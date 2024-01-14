import React, { useState } from 'react';
import { Text, Pressable } from 'react-native';
import * as Clipboard from 'expo-clipboard';

import { styles } from './Styles';
import { BatTextInput } from '../BatTextInput/Index';
import generatePassword from '../../services/passwordService';

export function BatButton() {

  const [pass, setPass] = useState('');

  const handleGenerateButton = () => {
    let generateToken = generatePassword();
    setPass(generateToken);
  }

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(pass);
  };
  const handleGenerateCopy = async () => {
    const text = await Clipboard.getStringAsync();
    setPass(text);
  };

  return (
    <>
      <BatTextInput pass={pass}/>
      <Pressable onPress={handleGenerateButton} style={styles.button}>
        <Text style={styles.text}>GENERATE</Text>
      </Pressable>

      <Pressable onPress={handleGenerateCopy} style={styles.button}>        
        <Text style={styles.text}>⚡ COPY</Text>
      </Pressable>
    </>
  );
}