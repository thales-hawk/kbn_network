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

import { i18n } from '@kbn/i18n';
import _ from 'lodash';
import { ExpressionFunctionDefinition, Datatable, Render } from '@kbn/expressions-plugin/public';
import { prepareLogTable, Dimension } from '@kbn/visualizations-plugin/public';
import { KbnNetworkVisParams } from './types';

export type Input = Datatable;

interface AggArguments {
  sizeNode?: any[];
  sizeEdge?: any[];
  node?: any[];
  relation?: any[];
  colorNode?: any;
}

export type Arguments = AggArguments & Omit<KbnNetworkVisParams, 'aggs' | 'type'>;

export interface KbnNetworkVisRenderValue {
  visData: Input;
  visParams: KbnNetworkVisParams;
}

export type KbnNetworkVisExpressionFunctionDefinition = ExpressionFunctionDefinition<
  'kbnNetwork',
  Input,
  Arguments,
  Render<KbnNetworkVisRenderValue>
>;

export const createKbnNetworkVisFn = (): KbnNetworkVisExpressionFunctionDefinition => ({
  name: 'kbnNetwork',
  type: 'render',
  inputTypes: ['datatable'],
  help: i18n.translate('kbnNetwork.function.help', {
    defaultMessage: 'Network visualization',
  }),
  args: {
    sizeNode: {
      types: ['vis_dimension'],
      help: i18n.translate('kbnNetwork.function.metric.help', {
        defaultMessage: 'Size node metric dimension configuration',
      }),
      multi: true,
    },
    sizeEdge: {
      types: ['vis_dimension'],
      help: i18n.translate('kbnNetwork.function.bucket.help', {
        defaultMessage: 'Size edge metric dimension configuration',
      }),
      multi: true,
    },
    node: {
      types: ['vis_dimension'],
      help: i18n.translate('kbnNetwork.function.bucket.help', {
        defaultMessage: 'Node bucket dimension configuration',
      }),
      multi: true,
    },
    relation: {
      types: ['vis_dimension'],
      help: i18n.translate('kbnNetwork.function.bucket.help', {
        defaultMessage: 'Relation bucket dimension configuration',
      }),
      multi: true,
    },
    colorNode: {
      types: ['vis_dimension'],
      help: i18n.translate('kbnNetwork.function.bucket.help', {
        defaultMessage: 'Color node bucket dimension configuration',
      }),
    },
    firstNodeColor: {
      types: ['string'],
      help: i18n.translate('visTypeKbnNetwork.params.firstNodeColor', {
        defaultMessage: 'First node color configuration',
      }),
    },
    secondNodeColor: {
      types: ['string'],
      help: i18n.translate('visTypeKbnNetwork.params.secondNodeColor', {
        defaultMessage: 'Second node color configuration',
      }),
    },
    edgeColor: {
      types: ['string'],
      help: i18n.translate('visTypeKbnNetwork.params.edgeColor', {
        defaultMessage: 'Edge color configuration',
      }),
    },
    labelColor: {
      types: ['string'],
      help: i18n.translate('visTypeKbnNetwork.params.labelColor', {
        defaultMessage: 'Label color configuration',
      }),
    },
    displayArrow: {
      types: ['boolean'],
      help: i18n.translate('visTypeKbnNetwork.params.displayArrow', {
        defaultMessage: 'Display directional edge',
      }),
    },
    posArrow: {
      types: ['string'],
      help: i18n.translate('visTypeKbnNetwork.params.posArrow', {
        defaultMessage: 'Endpoint position',
      }),
    },
    scaleArrow: {
      types: ['number'],
      help: i18n.translate('visTypeKbnNetwork.params.scaleArrow', {
        defaultMessage: 'Scale arrow',
      }),
    },
    shapeArrow: {
      types: ['string'],
      help: i18n.translate('visTypeKbnNetwork.params.shapeArrow', {
        defaultMessage: 'Shape arrow',
      }),
    },
    smoothType: {
      types: ['string'],
      help: i18n.translate('visTypeKbnNetwork.params.smoothType', {
        defaultMessage: 'Smooth type',
      }),
    },
    maxNodeSize: {
      types: ['number'],
      help: i18n.translate('visTypeKbnNetwork.params.maxNodeSize', {
        defaultMessage: 'Max node size',
      }),
    },
    minNodeSize: {
      types: ['number'],
      help: i18n.translate('visTypeKbnNetwork.params.minNodeSize', {
        defaultMessage: 'Min node size',
      }),
    },
    maxEdgeSize: {
      types: ['number'],
      help: i18n.translate('visTypeKbnNetwork.params.maxEdgeSize', {
        defaultMessage: 'Max edge size',
      }),
    },
    minEdgeSize: {
      types: ['number'],
      help: i18n.translate('visTypeKbnNetwork.params.minEdgeSize', {
        defaultMessage: 'Min edge size',
      }),
    },
    shapeFirstNode: {
      types: ['string'],
      help: i18n.translate('visTypeKbnNetwork.params.shapeFirstNode', {
        defaultMessage: 'Primary node shape',
      }),
    },
    shapeSecondNode: {
      types: ['string'],
      help: i18n.translate('visTypeKbnNetwork.params.shapeFirstNode', {
        defaultMessage: 'Secondary node shape',
      }),
    },
    showLabels: {
      types: ['boolean'],
      help: i18n.translate('visTypeKbnNetwork.params.showLabels', {
        defaultMessage: 'Show labels',
      }),
    },
    showPopup: {
      types: ['boolean'],
      help: i18n.translate('visTypeKbnNetwork.params.showPopup', {
        defaultMessage: 'Show popup',
      }),
    },
    showColorLegend: {
      types: ['boolean'],
      help: i18n.translate('visTypeKbnNetwork.params.showColorLegend', {
        defaultMessage: 'Show color legend',
      }),
    },
    nodePhysics: {
      types: ['boolean'],
      help: i18n.translate('visTypeKbnNetwork.params.nodePhysics', {
        defaultMessage: 'Node acting like springs',
      }),
    },
    gravitationalConstant: {
      types: ['number'],
      help: i18n.translate('visTypeKbnNetwork.params.gravitationalConstant', {
        defaultMessage: 'Attraction force',
      }),
    },
    springConstant: {
      types: ['number'],
      help: i18n.translate('visTypeKbnNetwork.params.springConstant', {
        defaultMessage: 'Spring force',
      }),
    },
    minCutMetricSizeNode: {
      types: ['number'],
      help: i18n.translate('visTypeKbnNetwork.params.minCutMetricSizeNode', {
        defaultMessage: 'Hide nodes under size value',
      }),
    },
  },
  fn(input, args, handlers) {
    if (handlers?.inspectorAdapters?.tables) {
      const argsTable: Dimension[] = [];
      if (args.sizeNode) {
        argsTable.push([
          args.sizeNode,
          i18n.translate('kbnNetwork.function.dimension.sizeNode', {
            defaultMessage: 'Size node metric',
          }),
        ]);
      }

      if (args.sizeEdge) {
        argsTable.push([
          args.sizeEdge,
          i18n.translate('kbnNetwork.function.dimension.sizeEdge', {
            defaultMessage: 'Size edge metric',
          }),
        ]);
      }

      if (args.sizeEdge) {
        argsTable.push([
          args.sizeEdge,
          i18n.translate('kbnNetwork.function.dimension.sizeEdge', {
            defaultMessage: 'Size edge metric',
          }),
        ]);
      }

      if (args.node) {
        argsTable.push([
          args.node,
          i18n.translate('kbnNetwork.function.dimension.node', {
            defaultMessage: 'Node buckets',
          }),
        ]);
      }

      if (args.relation) {
        argsTable.push([
          args.relation,
          i18n.translate('kbnNetwork.function.dimension.relation', {
            defaultMessage: 'Relation bucket',
          }),
        ]);
      }
      const logTable = prepareLogTable(input, argsTable);
      handlers.inspectorAdapters.tables.logDatatable('default', logTable);
    }

    const visParams = {
      aggs: {
        sizeNode: args.sizeNode,
        sizeEdge: args.sizeEdge,
        node: args.node,
        relation: args.relation,
        colorNode: args.colorNode,
      },
      ..._.omit(args, ['sizeNode', 'sizeEdge', 'node', 'relation', 'colorNode']),
    };

    return {
      type: 'render',
      as: 'kbn_network',
      value: {
        visData: input,
        visParams,
      },
    };
  },
});
