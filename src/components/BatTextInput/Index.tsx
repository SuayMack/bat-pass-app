import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './Styles';

interface BatTextInputProps {
  pass: string
}

export function BatTextInput(props: BatTextInputProps) {
  return (
    < TextInput
      style={styles.textInput} 
      placeholder='pass' 
      placeholderTextColor='#14100083' 
      value={props.pass}
    />
  );
}