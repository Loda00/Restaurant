import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import RegisterForm from '../../components/Account/RegisterForm'


const Register = () => {
  return (
    <KeyboardAwareScrollView>
      <Image
        source={require('../../img/logo.png')}
        resizeMode="contain"
        style={style.logo}
      />
      <View
        style={style.viewForm}
      >
        <RegisterForm />
      </View>
    </KeyboardAwareScrollView>
  )
}

export default Register

const style = StyleSheet.create({
  logo: {
    width: '100%',
    height: 150,
    marginTop: 20
  },
  viewForm: {
    marginRight: 40,
    marginLeft: 40
  }
})
