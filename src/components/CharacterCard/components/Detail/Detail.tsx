import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './Details.styled';
import {fontSize} from '../../../../styles/global';

type DetailProps = {
  label: string;
  text: string;
  accent?: boolean;
  labelSize?: keyof typeof fontSize;
  textSize?: keyof typeof fontSize;
};

export default function Detail({
  label,
  text,
  accent,
  labelSize,
  textSize,
}: DetailProps) {
  return (
    <View style={[styles.container, accent && styles.accent]}>
      <Text
        style={[styles.label, labelSize && {fontSize: fontSize[labelSize]}]}>
        {label}
      </Text>

      <Text style={[styles.text, textSize && {fontSize: fontSize[textSize]}]}>
        {text}
      </Text>
    </View>
  );
}
