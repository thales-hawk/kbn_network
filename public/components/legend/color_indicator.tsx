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

interface ColorIndicatorProps {
  color: string;
}

export function ColorIndicator({ color }: ColorIndicatorProps) {
  return (
    <svg width="16" height="16">
      <g
        transform="
          translate(8, 8)
          rotate(0)
        "
      >
        <path
          d="M -3.5 0 a 3.5,3.5 0 1,0 7,0 a 3.5,3.5 0 1,0 -7,0"
          stroke={color}
          strokeWidth="1"
          fill={color}
          opacity="1"
        />
      </g>
    </svg>
  );
}
