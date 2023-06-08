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

import { EuiFlexGroup, EuiFlexItem, EuiText } from '@elastic/eui';
import React from 'react';
import { NodeColors } from '../../lib/network_data';
import { ColorIndicator } from './color_indicator';

interface KbnNetworkVisLegendProps {
  colors: NodeColors;
}

export function KbnNetworkVisLegend({ colors }: KbnNetworkVisLegendProps) {
  return (
    <div style={{ position: 'absolute', right: 0, zIndex: 10000 }}>
      <div style={{ width: '100px', maxWidth: '100px', marginLeft: '0px', marginRight: '0px' }}>
        <ul style={{ paddingTop: '0px', paddingBottom: '0px' }}>
          {Object.keys(colors).map((colorId) => (
            <li key={colorId}>
              <EuiFlexGroup
                alignItems="center"
                justifyContent="flexStart"
                gutterSize="s"
                responsive={false}
              >
                <EuiFlexItem grow={false}>
                  <ColorIndicator color={colors[colorId]} />
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiText size="xs">{colorId}</EuiText>
                </EuiFlexItem>
              </EuiFlexGroup>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
