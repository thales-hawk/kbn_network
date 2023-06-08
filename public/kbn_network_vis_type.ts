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
import { AggGroupNames } from '@kbn/data-plugin/public';
import { VisTypeDefinition } from '@kbn/visualizations-plugin/public';
import './index.scss';
import image from './images/icon-network.svg';
import { KbnNetworkVisParamsExp } from './types';
import { toExpressionAst } from './to_ast';
import KbnNetworkOptions from './components/editor/kbn_network_vis_options';

// define the visType object, which kibana will use to display and configure new Vis object of this type.
export const kbnNetworkVisTypeDefinition: VisTypeDefinition<KbnNetworkVisParamsExp> = {
  name: 'kbn_network',
  title: i18n.translate('visTypeKbnNetwork.visTitle', {
    defaultMessage: 'Network',
  }),
  icon: image,
  toExpressionAst,
  requiresSearch: true,
  description: i18n.translate('visTypeKbnNetwork.visDescription', {
    defaultMessage: 'Network plugin for visualizing data as networks',
  }),
  // getSupportedTriggers: () => {
  //   return [VIS_EVENT_TO_TRIGGER.filter];
  // },
  visConfig: {
    defaults: {
      showLabels: true,
      showPopup: true,
      showColorLegend: true,
      nodePhysics: true,
      firstNodeColor: '#6F86D7',
      secondNodeColor: '#DAA05D',
      edgeColor: '#6F86D7',
      shapeFirstNode: 'dot',
      shapeSecondNode: 'box',
      displayArrow: false,
      posArrow: 'to',
      shapeArrow: 'arrow',
      smoothType: 'continuous',
      scaleArrow: 1,
      minCutMetricSizeNode: 0,
      maxNodeSize: 80,
      minNodeSize: 8,
      maxEdgeSize: 20,
      minEdgeSize: 0.1,
      springConstant: 0.001,
      gravitationalConstant: -35000,
      labelColor: '#000000',
    },
  },
  editorConfig: {
    optionsTemplate: KbnNetworkOptions,
    schemas: [
      {
        group: AggGroupNames.Metrics,
        name: 'size_node',
        title: 'Node Size',
        aggFilter: ['!geo_centroid', '!geo_bounds'],
        aggSettings: {
          top_hits: {
            allowStrings: false,
          },
        },
        mustBeFirst: true,
        min: 1,
        max: 1,
        defaults: [{ type: 'count', schema: 'size_node' }],
      },
      {
        group: AggGroupNames.Metrics,
        name: 'size_edge',
        title: 'Edge Size',
        aggFilter: ['!geo_centroid', '!geo_bounds'],
        aggSettings: {
          top_hits: {
            allowStrings: false,
          },
        },
        min: 0,
        max: 1,
      },
      {
        group: AggGroupNames.Buckets,
        name: 'first',
        title: 'Node',
        mustBeFirst: true,
        min: 1,
        max: 2,
        aggFilter: ['terms'],
      },
      {
        group: AggGroupNames.Buckets,
        name: 'second',
        title: 'Relation',
        max: 1,
        aggFilter: ['terms'],
      },
      {
        group: AggGroupNames.Buckets,
        name: 'colornode',
        title: 'Node Color',
        max: 1,
        aggFilter: ['terms'],
      },
    ],
  },
};
