import React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {IconProps} from './types';

export default function CheckMarkIcon({color, size}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 13 10" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.8057 0.734315C12.1181 1.04673 12.1181 1.55327 11.8057 1.86569L5.01746 8.65391C5.00324 8.66813 4.98861 8.68171 4.97362 8.69463C4.94911 8.72842 4.92162 8.76072 4.89117 8.79117C4.57875 9.10359 4.07222 9.10359 3.7598 8.79117L0.234315 5.26569C-0.0781049 4.95327 -0.0781049 4.44673 0.234315 4.13431C0.546734 3.8219 1.05327 3.8219 1.36569 4.13431L4.32 7.08863L10.6743 0.734315C10.9867 0.421895 11.4933 0.421895 11.8057 0.734315Z"
        fill={color}
      />
    </Svg>
  );
}
