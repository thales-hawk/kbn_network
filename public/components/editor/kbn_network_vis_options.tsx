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

import React from 'react';
import { EuiSpacer } from '@elastic/eui';
import { ColorSection } from './color_section';
import { DirectionalEdgesSection } from './directional_edges_section';
import { SizeSection } from './size_section';
import { NodeShapeSection } from './node_shape_section';
import { ExtraSection } from './extra_section';
import { NetworkConstantsSection } from './network_constants_section';
import { KbnNetworkVisParams } from '../../types';

interface KbnNetworkOptionsProps {
  stateParams: KbnNetworkVisParams;
  setValue: any;
}

function KbnNetworkOptions(props: KbnNetworkOptionsProps) {
  return (
    <div className="kbn-network-vis-params">
      <ColorSection {...props} />
      <EuiSpacer />
      <SizeSection {...props} />
      <EuiSpacer />
      <NodeShapeSection {...props} />
      <EuiSpacer />
      <DirectionalEdgesSection {...props} />
      <EuiSpacer />
      <ExtraSection {...props} />
      <EuiSpacer />
      <NetworkConstantsSection {...props} />
    </div>
  );
}

// default export required for React.Lazy
// eslint-disable-next-line import/no-default-export
export { KbnNetworkOptions as default };
