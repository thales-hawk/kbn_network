/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import _ from 'lodash';
import randomColor from 'randomcolor';
import { Datatable, DatatableColumn, DatatableRow } from '@kbn/expressions-plugin/common';
import { KbnNetworkVisParams } from '../types';

export const nodeShapes = [
  'dot',
  'circle',
  'ellipse',
  'database',
  'box',
  'text',
  'diamond',
  'start',
  'triangle',
  'triangleDown',
  'square',
] as const;

export type VisNetworkNodeShape = typeof nodeShapes;

export interface NodeColors {
  [id: string]: string;
}

interface NodeOptions {
  shape: VisNetworkNodeShape;
  value: (row: DatatableRow) => number;
  color: (row: DatatableRow) => string;
  title?: (row: DatatableRow) => string;
  font: {
    color: string;
  };
}

interface EdgeOptions {
  value: (row: DatatableRow) => number;
  color: (row: DatatableRow) => string;
}

export class NetworkData {
  constructor(private visParams: KbnNetworkVisParams) {}

  private getTooltipTitle(termName: string, termValue: string, sizeTerm = null, sizeValue = null) {
    let tooltipTitle = `${termName}: ${termValue}`;
    if (sizeTerm !== null) {
      tooltipTitle += `\n${sizeTerm}: ${sizeValue}`;
    }
    return tooltipTitle;
  }

  private getColumns(visData: Datatable) {
    return {
      sizeNodeMetric: visData.columns.find(
        (column) => column.meta.sourceParams?.schema === 'size_node'
      ),
      sizeEdgeMetric: visData.columns.find(
        (column) => column.meta.sourceParams?.schema === 'size_edge'
      ),
      nodeBuckets: visData.columns.filter((column) => column.meta.sourceParams?.schema === 'first'),
      relationBucket: visData.columns.find(
        (column) => column.meta.sourceParams?.schema === 'second'
      ),
      colorNodeBucket: visData.columns.find(
        (column) => column.meta.sourceParams?.schema === 'colornode'
      ),
    };
  }

  private getNodes(column: DatatableColumn | undefined, visData: Datatable, options: NodeOptions) {
    if (!column) {
      return [];
    }

    const nodes = visData.rows.map((row) => {
      const value = options.value(row);

      if (value >= this.visParams.minCutMetricSizeNode) {
        return {
          id: row[column.id],
          key: row[column.id],
          ...options,
          value,
          title: options.title && this.visParams.showPopup ? options.title(row) : undefined,
          label: this.visParams.showLabels ? row[column.id] : undefined,
          color: options.color(row),
        };
      }
    });

    return _.compact(_.uniqBy(nodes, 'id'));
  }

  private getEdges(
    sourceColumn: DatatableColumn,
    destColumn: DatatableColumn,
    visData: Datatable,
    options: EdgeOptions
  ) {
    return visData.rows.map((row) => ({
      from: row[sourceColumn.id],
      to: row[destColumn.id],
      color: options.color(row),
      value: options.value(row),
    }));
  }

  private getRandomColor(unvailableColors: string[]) {
    while (true) {
      const color = randomColor();
      if (unvailableColors.indexOf(color) === -1) {
        return color;
      }
    }
  }

  private getNodeColors(visData: Datatable, colorNodeColumn?: DatatableColumn): NodeColors {
    const colors: { [rowValue: string]: string } = {};

    if (colorNodeColumn) {
      for (const row of visData.rows) {
        const rowValue = row[colorNodeColumn.id];
        if (!colors[rowValue]) {
          colors[rowValue] = this.getRandomColor(_.toArray(colors));
        }
      }
    }

    return colors;
  }

  public from(visData: Datatable) {
    const columns = this.getColumns(visData);
    const sourceNodeColumn = columns.nodeBuckets[0];
    const nodeSizeColumn = columns.sizeNodeMetric;
    const edgeSizeColumn = columns.sizeEdgeMetric;
    const destNodeColumn = columns.nodeBuckets[1] || columns.relationBucket;
    const colorNodeColumn = columns.colorNodeBucket;

    const nodeColors = this.getNodeColors(visData, colorNodeColumn);

    const sourceNodes = this.getNodes(sourceNodeColumn, visData, {
      shape: this.visParams.shapeFirstNode as unknown as VisNetworkNodeShape,
      value: (row) => (nodeSizeColumn ? row[nodeSizeColumn.id] : 1),
      color: (row) =>
        (colorNodeColumn && nodeColors[row[colorNodeColumn.id]]) || this.visParams.firstNodeColor,
      font: {
        color: this.visParams.labelColor,
      },
      title: (row) =>
        this.getTooltipTitle(
          sourceNodeColumn.meta.field || sourceNodeColumn.name,
          row[sourceNodeColumn.id],
          nodeSizeColumn?.meta.field || nodeSizeColumn?.name,
          row[nodeSizeColumn?.id]
        ),
    });

    let destNodes = [];
    let edges = [];

    if (destNodeColumn) {
      destNodes = this.getNodes(destNodeColumn, visData, {
        shape: this.visParams.shapeSecondNode as unknown as VisNetworkNodeShape,
        value: (_row) => 1,
        color: (row) =>
          (colorNodeColumn && nodeColors[row[colorNodeColumn.id]]) ||
          this.visParams.secondNodeColor,
        font: {
          color: this.visParams.labelColor,
        },
      });

      edges = this.getEdges(sourceNodeColumn, destNodeColumn, visData, {
        value: (row) => (edgeSizeColumn ? row[edgeSizeColumn.id] : 1),
        color: (row) =>
          (colorNodeColumn && nodeColors[row[colorNodeColumn.id]]) || this.visParams.edgeColor,
      });

      if (columns.relationBucket) {
        edges = edges.filter(
          (edge) => !!sourceNodes.find((sourceNode) => sourceNode.id === edge.to)
        );
      }
    }

    const nodes = columns.relationBucket
      ? sourceNodes
      : _.unionBy([...sourceNodes, ...destNodes], 'id');

    return {
      nodes,
      edges,
      nodeColors,
    };
  }
}
