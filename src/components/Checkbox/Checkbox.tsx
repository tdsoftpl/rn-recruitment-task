import React, {type ComponentProps} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import CheckMarkIcon from '../../icons/CheckMark';
import {styles} from './Checkbox.styled';
import {colors} from '../../styles/global';

type CheckboxProps = {
  checked?: boolean;
  label?: string;
} & ComponentProps<typeof TouchableOpacity>;

export default function Checkbox({checked, label, ...props}: CheckboxProps) {
  return (
    <TouchableOpacity {...props} style={[styles.container, props.style]}>
      <View style={[styles.checkbox, checked && styles.checked]}>
        {checked && <CheckMarkIcon color={colors.white} />}
      </View>

      {label && <Text style={styles.label}>{label}</Text>}
    </TouchableOpacity>
  );
}
