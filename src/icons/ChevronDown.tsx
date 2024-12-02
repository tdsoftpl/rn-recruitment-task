import React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {IconProps} from './types';

export default function ChevronDownIcon({color, size}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 8 5" fill="none">
      <Path
        d="M6.67969 0.00390625L7.5 0.824219L4 4.32422L0.5 0.824219L1.32031 0.00390625L4 2.68359L6.67969 0.00390625Z"
        fill={color}
      />
    </Svg>
  );
}
