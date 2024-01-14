import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './Styles';
import batLogo from '../../../assets/bat-logo.png';

export function BatLogo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BAT PASS GENERATOR</Text>
      <Image style = {styles.image} source={batLogo}/>
    </View>
  );
}