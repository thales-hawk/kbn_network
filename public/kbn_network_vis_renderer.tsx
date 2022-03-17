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

import React, { lazy } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import { VisualizationContainer } from '../../../src/plugins/visualizations/public';
import { ExpressionRenderDefinition } from '../../../src/plugins/expressions/common/expression_renderers';
import { KbnNetworkVisRenderValue } from './kbn_network_vis_fn';
// @ts-ignore
const KbnNetworkVisComponent = lazy(() => import('./components/kbn_network_vis_component'));

export const getKbnNetworkVisRenderer: () => ExpressionRenderDefinition<KbnNetworkVisRenderValue> = () => ({
  name: 'kbn_network',
  displayName: 'Network visualization',
  reuseDomNode: true,
  render: async (domNode, { visData, visParams }, handlers) => {
    handlers.onDestroy(() => {
      unmountComponentAtNode(domNode);
    });

    let error = '';
    if (visParams.aggs.relation && visParams.aggs.node.length > 1) {
      error = 'You can only choose Node-Node or Node-Relation';
    }

    render(
      <VisualizationContainer
        className="kbnNetworkVis"
        showNoResult={visData.rows.length === 0}
        error={error}
        handlers={handlers}
      >
        <KbnNetworkVisComponent visParams={visParams} visData={visData} />
      </VisualizationContainer>,
      domNode
    );
  },
});
