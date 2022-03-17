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

import {
  EuiFieldNumber,
  EuiForm,
  EuiFormRow,
  EuiPanel,
  EuiSelect,
  EuiSpacer,
  EuiSwitch,
  EuiTitle,
} from '@elastic/eui';
import { i18n } from '@kbn/i18n';
import React from 'react';
import { KbnNetworkVisParams } from '../../types';

interface DirectionalEdgesSectionProps {
  stateParams: KbnNetworkVisParams;
  setValue: any;
}

export function DirectionalEdgesSection({ stateParams, setValue }: DirectionalEdgesSectionProps) {
  return (
    <EuiPanel paddingSize="s">
      <EuiTitle size="xs">
        <h3>
          {i18n.translate('visTypeKbnNetwork.params.directionalEdgesSection', {
            defaultMessage: 'Directional edges',
          })}
        </h3>
      </EuiTitle>
      <EuiSpacer size="m" />
      <EuiForm>
        <EuiFormRow>
          <EuiSwitch
            label={i18n.translate('visTypeKbnNetwork.params.displayArrow', {
              defaultMessage: 'Display directional edge',
            })}
            checked={stateParams.displayArrow}
            onChange={(e) => setValue('displayArrow', e.target.checked)}
          />
        </EuiFormRow>
        <EuiFormRow
          label={i18n.translate('visTypeKbnNetwork.params.posArrow', {
            defaultMessage: 'Endpoint position',
          })}
        >
          <EuiSelect
            value={stateParams.posArrow}
            options={[
              { text: 'End Side', value: 'to' },
              { text: 'Beginning', value: 'from' },
              { text: 'Middle', value: 'middle' },
            ]}
            onChange={(e) => setValue('posArrow', e.target.value)}
          />
        </EuiFormRow>
        <EuiFormRow
          label={i18n.translate('visTypeKbnNetwork.params.shapeArrow', {
            defaultMessage: 'Endpoint type',
          })}
        >
          <EuiSelect
            value={stateParams.shapeArrow}
            options={[
              { text: 'Arrow', value: 'arrow' },
              { text: 'Circle', value: 'circle' },
            ]}
            onChange={(e) => setValue('shapeArrow', e.target.value)}
          />
        </EuiFormRow>
        <EuiFormRow
          label={i18n.translate('visTypeKbnNetwork.params.scaleArrow', {
            defaultMessage: 'Scale factor',
          })}
        >
          <EuiFieldNumber
            value={stateParams.scaleArrow}
            onChange={(e) => setValue('scaleArrow', e.target.value)}
          />
        </EuiFormRow>
        <EuiFormRow
          label={i18n.translate('visTypeKbnNetwork.params.shapeArrow', {
            defaultMessage: 'Endpoint type',
          })}
        >
          <EuiSelect
            value={stateParams.smoothType}
            options={[
              { text: 'Dynamic', value: 'dynamic' },
              { text: 'Continuous Anchor', value: 'continuous' },
              { text: 'Discrete Anchor', value: 'discrete' },
              { text: 'Diagonal Anchor', value: 'diagonalCross' },
              { text: 'Straight Line', value: 'straightCross' },
              { text: 'Horizontal Anchor', value: 'horizontal' },
              { text: 'Vertical Anchor', value: 'vertical' },
              { text: 'Clock-wise Curve', value: 'curvedCW' },
              { text: 'Counter-Clock-wise Curve', value: 'curvedCCW' },
              { text: 'Cubic Bezier', value: 'cubicBezier' },
            ]}
            onChange={(e) => setValue('smoothType', e.target.value)}
          />
        </EuiFormRow>
      </EuiForm>
    </EuiPanel>
  );
}
