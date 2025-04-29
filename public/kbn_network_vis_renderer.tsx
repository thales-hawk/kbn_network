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

import { VisualizationContainer } from '@kbn/visualizations-plugin/public';
import { ExpressionRenderDefinition } from '@kbn/expressions-plugin/common/expression_renderers';
import { KibanaThemeProvider } from '@kbn/react-kibana-context-theme';
import { CoreSetup } from '@kbn/core/public';
import { KbnNetworkVisRenderValue } from './kbn_network_vis_fn';
// @ts-ignore
const KbnNetworkVisComponent = lazy(() => import('./components/kbn_network_vis_component'));

export const getKbnNetworkVisRenderer: (
  coreSetup: CoreSetup
) => ExpressionRenderDefinition<KbnNetworkVisRenderValue> = (coreSetup) => ({
  name: 'kbn_network',
  displayName: 'Network visualization',
  reuseDomNode: true,
  render: async (domNode, { visData, visParams }, handlers) => {
    handlers.onDestroy(() => {
      unmountComponentAtNode(domNode);
    });

    let error = '';
    if (visParams.aggs.relation && visParams.aggs.node && visParams.aggs.node.length > 1) {
      error = 'You can only choose Node-Node or Node-Relation';
    }

    render(
      <KibanaThemeProvider theme={coreSetup.theme}>
        <VisualizationContainer
          className="kbnNetworkVis"
          showNoResult={visData.rows.length === 0}
          error={error}
          handlers={handlers}
        >
          <KbnNetworkVisComponent visParams={visParams} visData={visData} />
        </VisualizationContainer>
      </KibanaThemeProvider>,
      domNode
    );
  },
});
