import React from 'react'
import { View } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import styles from './Styles'
import { BatLogo } from '../../components/BatLogo/Index'
import { BatTextInput } from '../../components/BatTextInput/Index'
import { BatButton } from '../../components/BatButton/Index'

export default function Home() {
  return (
      <View style={styles.appContainer} >
        <StatusBar style="light" />
        <View style={styles.logoContainer} >        
          <BatLogo />        
        </View>
        <View>
          <BatButton />
        </View>  
      </View>
  )
}
