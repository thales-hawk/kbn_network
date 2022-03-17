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
  EuiPanel,
  EuiTitle,
  EuiSpacer,
  EuiForm,
  EuiFormRow,
  EuiColorPicker,
  useColorPickerState,
} from '@elastic/eui';
import { i18n } from '@kbn/i18n';
import React, { useEffect } from 'react';
import { KbnNetworkVisParams } from '../../types';

interface ColorSectionProps {
  stateParams: KbnNetworkVisParams;
  setValue: any;
}

export function ColorSection({ stateParams, setValue }: ColorSectionProps) {
  const [firstNodeColor, setFirstNodeColor, firstNodeColorErrors] = useColorPickerState(
    stateParams.firstNodeColor
  );
  const [secondNodeColor, setSecondNodeColor, secondNodeColorErrors] = useColorPickerState(
    stateParams.secondNodeColor
  );
  const [labelColor, setLabelColor, labelColorErrors] = useColorPickerState(stateParams.labelColor);
  const [edgeColor, setEdgeColor, edgeColorErrors] = useColorPickerState(stateParams.edgeColor);

  useEffect(() => {
    setValue('firstNodeColor', firstNodeColor);
  }, [firstNodeColor, setValue]);

  useEffect(() => {
    setValue('secondNodeColor', secondNodeColor);
  }, [secondNodeColor, setValue]);

  useEffect(() => {
    setValue('labelColor', labelColor);
  }, [labelColor, setValue]);

  useEffect(() => {
    setValue('edgeColor', edgeColor);
  }, [edgeColor, setValue]);

  return (
    <EuiPanel paddingSize="s">
      <EuiTitle size="xs">
        <h3>
          {i18n.translate('visTypeKbnNetwork.params.colorOptionsSection', {
            defaultMessage: 'Color options',
          })}
        </h3>
      </EuiTitle>
      <EuiSpacer size="m" />
      <EuiForm>
        <EuiFormRow
          label={i18n.translate('visTypeKbnNetwork.params.firstNodeColor', {
            defaultMessage: 'First node color',
          })}
        >
          <EuiColorPicker
            onChange={setFirstNodeColor}
            color={firstNodeColor}
            isInvalid={!!firstNodeColorErrors}
          />
        </EuiFormRow>
        <EuiFormRow
          label={i18n.translate('visTypeKbnNetwork.params.secondNodeColor', {
            defaultMessage: 'Second node color',
          })}
        >
          <EuiColorPicker
            onChange={setSecondNodeColor}
            color={secondNodeColor}
            isInvalid={!!secondNodeColorErrors}
          />
        </EuiFormRow>
        <EuiFormRow
          label={i18n.translate('visTypeKbnNetwork.params.labelColor', {
            defaultMessage: 'Label color',
          })}
        >
          <EuiColorPicker
            onChange={setLabelColor}
            color={labelColor}
            isInvalid={!!labelColorErrors}
          />
        </EuiFormRow>
        <EuiFormRow
          label={i18n.translate('visTypeKbnNetwork.params.edgeColor', {
            defaultMessage: 'Edge color',
          })}
        >
          <EuiColorPicker onChange={setEdgeColor} color={edgeColor} isInvalid={!!edgeColorErrors} />
        </EuiFormRow>
      </EuiForm>
    </EuiPanel>
  );
}
