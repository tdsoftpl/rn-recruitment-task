import React, {type ComponentProps} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './Button.styled';

type ButtonProps = {
  name: string;
  variant: ButtonVariant;
  icon?: React.ReactNode | string;
} & ComponentProps<typeof TouchableOpacity>;

type ButtonVariant = 'primary' | 'primaryActive' | 'outline' | 'outlineActive';

export default function Button({name, variant, icon, ...props}: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      {...props}
      style={[styles.btn, styles[variant], props.style]}>
      {icon && (typeof icon === 'string' ? <Text>{icon}</Text> : icon)}

      <Text style={{color: styles[variant].color}}>{name}</Text>
    </TouchableOpacity>
  );
}
