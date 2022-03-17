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

import { ExpressionsSetup } from '../../../src/plugins/expressions/public';
import { SchemaConfig } from '../../../src/plugins/visualizations/public';
import { VisualizationsSetup } from '../../../src/plugins/visualizations/public/plugin';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface KbnNetworkVisParamsExp {}

export interface DimensionsVisParam {
  metrics: SchemaConfig[];
  buckets?: SchemaConfig;
}

export interface KbnNetworkVisSetupDependencies {
  visualizations: VisualizationsSetup;
  expressions: ExpressionsSetup;
}

export interface KbnNetworkVisStartDependencies {}

export interface KbnNetworkVisParams {
  showLabels: boolean;
  showPopup: boolean;
  showColorLegend: boolean;
  nodePhysics: boolean;
  firstNodeColor: string;
  secondNodeColor: string;
  edgeColor: string;
  shapeFirstNode: string;
  shapeSecondNode: string;
  displayArrow: boolean;
  posArrow: string;
  shapeArrow: string;
  smoothType: string;
  scaleArrow: number;
  minCutMetricSizeNode: number;
  maxNodeSize: number;
  minNodeSize: number;
  maxEdgeSize: number;
  minEdgeSize: number;
  springConstant: number;
  gravitationalConstant: number;
  labelColor: string;
  aggs: { sizeNode?: any[]; sizeEdge?: any[]; node?: any[]; relation?: any[]; colorNode?: any };
}
