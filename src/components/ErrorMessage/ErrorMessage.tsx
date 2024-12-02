import React from 'react';
import {Text} from 'react-native';
import Button from '../Button/Button';
import {styles} from './ErrorMessage.styled';

export default function ErrorMessage({refetchData}: {refetchData: () => void}) {
  return (
    <>
      <Text style={styles.text}>Something went wrong.</Text>

      <Button name="Try again" onPress={refetchData} variant="primary" />
    </>
  );
}
