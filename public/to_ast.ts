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

import {
  EsaggsExpressionFunctionDefinition,
  IndexPatternLoadExpressionFunctionDefinition,
} from '@kbn/data-plugin/public';
import { buildExpression, buildExpressionFunction } from '@kbn/expressions-plugin/public';
import { getVisSchemas, SchemaConfig, Vis } from '@kbn/visualizations-plugin/public';
import { Arguments, KbnNetworkVisExpressionFunctionDefinition } from './kbn_network_vis_fn';
import { KbnNetworkVisParamsExp } from './types';

const prepareDimension = (params: SchemaConfig) => {
  const visdimension = buildExpressionFunction('visdimension', { accessor: params.accessor });

  if (params.format) {
    visdimension.addArgument('format', params.format.id);
    visdimension.addArgument('formatParams', JSON.stringify(params.format.params));
  }

  return buildExpression([visdimension]);
};

export const toExpressionAst = (vis: Vis<KbnNetworkVisParamsExp>, params) => {
  const esaggs = buildExpressionFunction<EsaggsExpressionFunctionDefinition>('esaggs', {
    index: buildExpression([
      buildExpressionFunction<IndexPatternLoadExpressionFunctionDefinition>('indexPatternLoad', {
        id: vis.data.indexPattern!.id!,
      }),
    ]),
    metricsAtAllLevels: vis.isHierarchical(),
    partialRows: false,
    aggs: vis.data.aggs!.aggs.map((agg) => buildExpression(agg.toExpressionAst())),
  });

  const schemas = getVisSchemas(vis, params);
  const args: Arguments = {
    sizeNode: schemas.size_node?.map(prepareDimension),
    sizeEdge: schemas.size_edge?.map(prepareDimension),
    node: schemas.first?.map(prepareDimension),
    relation: schemas.second?.map(prepareDimension),
    colorNode: schemas.colornode ? prepareDimension(schemas.colornode[0]) : undefined,
    ...vis.params,
  };

  const kbnNetworkType = buildExpressionFunction<KbnNetworkVisExpressionFunctionDefinition>(
    'kbnNetwork',
    args
  );

  const ast = buildExpression([esaggs, kbnNetworkType]);

  return ast.toAst();
};
