import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import ArrowBackIcon from '../../../../icons/ArrowBack';
import {styles} from './CustomHeader.styled';
import {colors} from '../../../../styles/global';
import type {NativeStackHeaderProps} from '@react-navigation/native-stack';

export default function CustomHeader({
  navigation,
  options,
}: NativeStackHeaderProps) {
  // Check if options.headerTitle is a string
  const headerTitle =
    typeof options.headerTitle === 'string' ? options.headerTitle : 'Go back';

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={() => navigation.goBack()}>
      <View style={styles.innerContainer}>
        <View style={styles.iconContainer}>
          <ArrowBackIcon color={colors.mediumGreen} size={10} />
        </View>

        <Text style={styles.text}>{headerTitle}</Text>
      </View>
    </TouchableOpacity>
  );
}
