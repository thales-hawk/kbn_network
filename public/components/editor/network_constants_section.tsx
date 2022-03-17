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

import { EuiFieldNumber, EuiForm, EuiFormRow, EuiPanel, EuiSpacer, EuiTitle } from '@elastic/eui';
import { i18n } from '@kbn/i18n';
import React from 'react';
import { KbnNetworkVisParams } from '../../types';

interface NetworkConstantsSectionProps {
  stateParams: KbnNetworkVisParams;
  setValue: any;
}

export function NetworkConstantsSection({ stateParams, setValue }: NetworkConstantsSectionProps) {
  return (
    <EuiPanel paddingSize="s">
      <EuiTitle size="xs">
        <h3>
          {i18n.translate('visTypeKbnNetwork.params.networkConstantsSection', {
            defaultMessage: 'Network constants',
          })}
        </h3>
      </EuiTitle>
      <EuiSpacer size="m" />
      <EuiForm>
        <EuiFormRow
          label={i18n.translate('visTypeKbnNetwork.params.gravitationalConstant', {
            defaultMessage: 'Attraction Force',
          })}
        >
          <EuiFieldNumber
            value={stateParams.gravitationalConstant}
            onChange={(e) => setValue('gravitationalConstant', e.target.value)}
          />
        </EuiFormRow>
        <EuiFormRow
          label={i18n.translate('visTypeKbnNetwork.params.springConstant', {
            defaultMessage: 'Spring Force',
          })}
        >
          <EuiFieldNumber
            value={stateParams.springConstant}
            onChange={(e) => setValue('springConstant', e.target.value)}
          />
        </EuiFormRow>
        <EuiFormRow
          label={i18n.translate('visTypeKbnNetwork.params.minCutMetricSizeNode', {
            defaultMessage: 'Hide nodes under size',
          })}
        >
          <EuiFieldNumber
            value={stateParams.minCutMetricSizeNode}
            onChange={(e) => setValue('minCutMetricSizeNode', e.target.value)}
          />
        </EuiFormRow>
      </EuiForm>
    </EuiPanel>
  );
}
