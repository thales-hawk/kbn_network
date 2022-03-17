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

import { EuiForm, EuiFormRow, EuiPanel, EuiSpacer, EuiSwitch, EuiTitle } from '@elastic/eui';
import { i18n } from '@kbn/i18n';
import React from 'react';
import { KbnNetworkVisParams } from '../../types';

interface ExtraSectionProps {
  stateParams: KbnNetworkVisParams;
  setValue: any;
}

export function ExtraSection({ stateParams, setValue }: ExtraSectionProps) {
  return (
    <EuiPanel paddingSize="s">
      <EuiTitle size="xs">
        <h3>
          {i18n.translate('visTypeKbnNetwork.params.extraSection', {
            defaultMessage: 'Extra',
          })}
        </h3>
      </EuiTitle>
      <EuiSpacer size="m" />
      <EuiForm>
        <EuiFormRow>
          <EuiSwitch
            label={i18n.translate('visTypeKbnNetwork.params.showLabels', {
              defaultMessage: 'Show Labels',
            })}
            checked={stateParams.showLabels}
            onChange={(e) => setValue('showLabels', e.target.checked)}
          />
        </EuiFormRow>
        <EuiFormRow>
          <EuiSwitch
            label={i18n.translate('visTypeKbnNetwork.params.showPopup', {
              defaultMessage: 'Show Popup',
            })}
            checked={stateParams.showPopup}
            onChange={(e) => setValue('showPopup', e.target.checked)}
          />
        </EuiFormRow>
        <EuiFormRow>
          <EuiSwitch
            label={i18n.translate('visTypeKbnNetwork.params.showColorLegend', {
              defaultMessage: 'Show Color Legend (Node Color selected)',
            })}
            checked={stateParams.showColorLegend}
            onChange={(e) => setValue('showColorLegend', e.target.checked)}
          />
        </EuiFormRow>
        <EuiFormRow>
          <EuiSwitch
            label={i18n.translate('visTypeKbnNetwork.params.nodePhysics', {
              defaultMessage: 'Node Acting like Springs',
            })}
            checked={stateParams.nodePhysics}
            onChange={(e) => setValue('nodePhysics', e.target.checked)}
          />
        </EuiFormRow>
      </EuiForm>
    </EuiPanel>
  );
}
