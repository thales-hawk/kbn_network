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

import _ from 'lodash';
import { EuiForm, EuiFormRow, EuiPanel, EuiSelect, EuiSpacer, EuiTitle } from '@elastic/eui';
import { i18n } from '@kbn/i18n';
import React from 'react';
import { nodeShapes } from '../../lib/network_data';
import { KbnNetworkVisParams } from '../../types';

interface NodeShapeSectionProps {
  stateParams: KbnNetworkVisParams;
  setValue: any;
}

const options = nodeShapes.map((nodeShape) => ({
  value: nodeShape,
  text: _.capitalize(nodeShape),
}));

export function NodeShapeSection({ stateParams, setValue }: NodeShapeSectionProps) {
  return (
    <EuiPanel paddingSize="s">
      <EuiTitle size="xs">
        <h3>
          {i18n.translate('visTypeKbnNetwork.params.nodeShapeSection', {
            defaultMessage: 'Node shape',
          })}
        </h3>
      </EuiTitle>
      <EuiSpacer size="m" />
      <EuiForm>
        <EuiFormRow
          label={i18n.translate('visTypeKbnNetwork.params.shapeFirtNode', {
            defaultMessage: 'First nodes shape',
          })}
        >
          <EuiSelect
            options={options}
            value={stateParams.shapeFirstNode}
            onChange={(e) => setValue('shapeFirstNode', e.target.value)}
            aria-label="Set the shape of the primary node"
          />
        </EuiFormRow>
        <EuiFormRow
          label={i18n.translate('visTypeKbnNetwork.params.shapeSecondNode', {
            defaultMessage: 'Second nodes shape',
          })}
        >
          <EuiSelect
            options={options}
            value={stateParams.shapeSecondNode}
            onChange={(e) => setValue('shapeSecondNode', e.target.value)}
            aria-label="Set the shape of the secondary node"
          />
        </EuiFormRow>
      </EuiForm>
    </EuiPanel>
  );
}
