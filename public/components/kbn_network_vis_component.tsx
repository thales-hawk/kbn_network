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

import React, { useEffect, useRef, useState } from 'react';
import _ from 'lodash';
import { Network } from 'vis-network';
import { Datatable } from '../../../../src/plugins/expressions/public';
import { NetworkData } from '../lib/network_data';
import { NetworkOptions } from '../lib/network_options';
import { KbnNetworkVisParams } from '../types';
import { KbnNetworkVisLegend } from '../components/legend';

interface KbnNetworkComponentProps {
  visData: Datatable;
  visParams: KbnNetworkVisParams;
}

function KbnNetworkComponent({ visParams, visData }: KbnNetworkComponentProps) {
  const [data, setData] = useState<any>();
  const networkContainerRef = useRef();

  useEffect(() => {
    if (networkContainerRef) {
      const networkData = new NetworkData(visParams);
      const newData = networkData.from(visData);

      const networkOptions = new NetworkOptions(newData);
      const options = networkOptions.from(visParams);
      new Network(networkContainerRef.current, _.omit(newData, ['nodeColors']), options);

      setData(newData);
    }
  }, [networkContainerRef, visData, visParams, setData]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {visParams.showColorLegend && data && <KbnNetworkVisLegend colors={data.nodeColors} />}
      <div
        style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 }}
        ref={networkContainerRef}
      />
    </div>
  );
}

// eslint-disable-next-line import/no-default-export
export default KbnNetworkComponent;
