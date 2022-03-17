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

interface SizeSectionProps {
  stateParams: KbnNetworkVisParams;
  setValue: any;
}

export function SizeSection({ stateParams, setValue }: SizeSectionProps) {
  return (
    <EuiPanel paddingSize="s">
      <EuiTitle size="xs">
        <h3>
          {i18n.translate('visTypeKbnNetwork.params.sizeSection', {
            defaultMessage: 'Size',
          })}
        </h3>
      </EuiTitle>
      <EuiSpacer size="m" />
      <EuiForm>
        <EuiFormRow
          label={i18n.translate('visTypeTable.params.maxNodeSize', {
            defaultMessage: 'Max node size',
          })}
        >
          <EuiFieldNumber
            value={stateParams.maxNodeSize}
            onChange={(e) => setValue('maxNodeSize', e.target.value)}
            aria-label="Set the max node size"
          />
        </EuiFormRow>
        <EuiFormRow
          label={i18n.translate('visTypeTable.params.minNodeSize', {
            defaultMessage: 'Min node size',
          })}
        >
          <EuiFieldNumber
            value={stateParams.minNodeSize}
            onChange={(e) => setValue('minNodeSize', e.target.value)}
            aria-label="Set the min node size"
          />
        </EuiFormRow>
        <EuiFormRow
          label={i18n.translate('visTypeTable.params.maxEdgeSize', {
            defaultMessage: 'Max edge size',
          })}
        >
          <EuiFieldNumber
            value={stateParams.maxEdgeSize}
            onChange={(e) => setValue('maxEdgeSize', e.target.value)}
            aria-label="Set the max edge size"
          />
        </EuiFormRow>
        <EuiFormRow
          label={i18n.translate('visTypeTable.params.minEdgeSize', {
            defaultMessage: 'Min edge size',
          })}
        >
          <EuiFieldNumber
            value={stateParams.minEdgeSize}
            onChange={(e) => setValue('minEdgeSize', e.target.value)}
            aria-label="Set the min edge size"
          />
        </EuiFormRow>
      </EuiForm>
    </EuiPanel>
  );
}
