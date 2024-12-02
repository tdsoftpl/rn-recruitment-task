import React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {IconProps} from './types';

export default function StarIcon({color, size}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.19198 2.14006C7.49065 1.42206 8.50932 1.42206 8.80798 2.14006L10.196 5.4774L13.7986 5.76673C14.5746 5.82873 14.8893 6.79673 14.298 7.3034L11.5533 9.65473L12.3913 13.1701C12.572 13.9274 11.7486 14.5254 11.0846 14.1201L7.99998 12.2361L4.91531 14.1201C4.25131 14.5254 3.42798 13.9267 3.60865 13.1701L4.44665 9.65473L1.70198 7.3034C1.11065 6.79673 1.42531 5.82873 2.20131 5.76673L5.80398 5.4774L7.19198 2.14006Z"
        fill={color}
      />
    </Svg>
  );
}
