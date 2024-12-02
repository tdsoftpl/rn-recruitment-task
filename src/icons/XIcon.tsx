import React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {IconProps} from './types';

export default function XIcon({color, size}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path d="M5 5L15 15M5 15L15 5" stroke={color} stroke-width="1.5" />
    </Svg>
  );
}
