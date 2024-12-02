import React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {IconProps} from './types';

export default function ArrowBackIcon({color, size}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 9 8" fill="none">
      <Path
        d="M4.00284 8L0.184659 4.18182L4.00284 0.363636L4.65909 1.01136L1.95739 3.71307H8.95455V4.65057H1.95739L4.65909 7.34375L4.00284 8Z"
        fill={color}
      />
    </Svg>
  );
}
