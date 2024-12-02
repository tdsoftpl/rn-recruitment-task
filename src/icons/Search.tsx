import React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {IconProps} from './types';

export default function SearchIcon({color, size}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M13 13L17 17M15 9C15 12.3137 12.3137 15 9 15C5.68629 15 3 12.3137 3 9C3 5.68629 5.68629 3 9 3C12.3137 3 15 5.68629 15 9Z"
        stroke={color}
        stroke-width="1.5"
      />
    </Svg>
  );
}
