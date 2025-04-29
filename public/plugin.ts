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

import { PluginInitializerContext, CoreSetup, CoreStart, Plugin } from '@kbn/core/public';
import { VisualizationsSetup } from '@kbn/visualizations-plugin/public';
import { DataPublicPluginStart } from '@kbn/data-plugin/public';
import { KbnNetworkVisSetupDependencies, KbnNetworkVisStartDependencies } from './types';
import { getKbnNetworkVisRenderer } from './kbn_network_vis_renderer';
import { createKbnNetworkVisFn } from './kbn_network_vis_fn';
import { kbnNetworkVisTypeDefinition } from './kbn_network_vis_type';

/** @internal */
export interface TablePluginSetupDependencies {
  visualizations: VisualizationsSetup;
}

/** @internal */
export interface TablePluginStartDependencies {
  data: DataPublicPluginStart;
}

/** @internal */
export class KbnNetworkPlugin implements Plugin<Promise<void>, void> {
  initializerContext: PluginInitializerContext;
  createBaseVisualization: any;

  constructor(initializerContext: PluginInitializerContext) {
    this.initializerContext = initializerContext;
  }

  public async setup(
    core: CoreSetup,
    { visualizations, expressions }: KbnNetworkVisSetupDependencies
  ) {
    visualizations.createBaseVisualization(kbnNetworkVisTypeDefinition);
    expressions.registerFunction(createKbnNetworkVisFn());
    expressions.registerRenderer(getKbnNetworkVisRenderer(core));
  }

  public start(core: CoreStart, {}: KbnNetworkVisStartDependencies) {}
}
