import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './Button.styled';
import {ButtonProps} from './Button.types';

interface Props extends ButtonProps {
  containerStyle?: object;
  variant?: 'primary-filled' | 'primary-outlined';
}

function Button({
  onPress,
  children,
  isLiked,
  containerStyle,
  variant = 'primary-filled',
}: Props) {
  const getStyles = () => {
    switch (variant) {
      case 'primary-filled':
        return {
          buttonStyle: styles.primaryFilledButton,
          textStyle: styles.primaryText,
          iconColor: isLiked ? styles.goldIcon.color : styles.whiteIcon.color,
        };
      case 'primary-outlined':
        return {
          buttonStyle: styles.primaryOutlinedButton,
          textStyle: styles.primaryOutlinedText,
          iconColor: isLiked ? styles.goldIcon.color : styles.primaryIcon.color,
        };
      default:
        return {
          buttonStyle: styles.primaryFilledButton,
          textStyle: styles.primaryText,
          iconColor: styles.whiteIcon.color,
        };
    }
  };

  const {buttonStyle, textStyle, iconColor} = getStyles();

  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle, containerStyle]}
      onPress={onPress}>
      <View style={styles.iconWrapper}>
        <Icon
          name={isLiked ? 'star' : 'star-outline'}
          size={16}
          color={iconColor}
        />
      </View>
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
}

export default Button;
