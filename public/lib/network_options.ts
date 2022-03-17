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

import { KbnNetworkVisParams } from '../types';

export class NetworkOptions {
  constructor(private data: { edges: any[]; nodes: any[] }) {}

  private getEdgeArrowsConfig(visParams: KbnNetworkVisParams) {
    switch (visParams.posArrow) {
      case 'from':
        return {
          from: {
            enabled: visParams.displayArrow,
            scaleFactor: visParams.scaleArrow,
            type: visParams.shapeArrow,
          },
        };
      case 'middle':
        return {
          middle: {
            enabled: visParams.displayArrow,
            scaleFactor: visParams.scaleArrow,
            type: visParams.shapeArrow,
          },
        };
      case 'to':
        return {
          to: {
            enabled: visParams.displayArrow,
            scaleFactor: visParams.scaleArrow,
            type: visParams.shapeArrow,
          },
        };
      default:
        return {
          from: {
            enabled: visParams.displayArrow,
            scaleFactor: visParams.scaleArrow,
            type: visParams.shapeArrow,
          },
        };
    }
  }
  public from(visParams: KbnNetworkVisParams) {
    return {
      autoResize: true,
      width: '100%',
      height: '100%',
      physics: {
        barnesHut: {
          gravitationalConstant: visParams.gravitationalConstant,
          springConstant: visParams.springConstant,
        },
      },
      edges: {
        arrowStrikethrough: false,
        smooth: {
          type: visParams.smoothType,
        },
        scaling: {
          min: visParams.minEdgeSize,
          max: visParams.maxEdgeSize,
        },
        arrows: this.getEdgeArrowsConfig(visParams),
      },
      nodes: {
        physics: visParams.nodePhysics,
        scaling: {
          min: visParams.minNodeSize,
          max: visParams.maxNodeSize,
        },
      },
      layout: {
        improvedLayout: !(this.data.edges.length > 200),
      },
      interaction: {
        hover: true,
        tooltipDelay: 50,
      },
      manipulation: {
        enabled: true,
      },
    };
  }
}
