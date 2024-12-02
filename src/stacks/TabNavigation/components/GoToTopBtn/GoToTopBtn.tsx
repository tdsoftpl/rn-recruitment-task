import React, {type ComponentProps} from 'react';
import {TouchableOpacity} from 'react-native';
import ChevronDownIcon from '../../../../icons/ChevronDown';
import {styles} from './GoToTopBtn.styled';
import {colors} from '../../../../styles/global';

export default function GoToTopBtn({
  ...props
}: ComponentProps<typeof TouchableOpacity>) {
  return (
    <TouchableOpacity {...props} style={[styles.goToTopButton, props.style]}>
      <ChevronDownIcon color={colors.white} size={16} />
    </TouchableOpacity>
  );
}
