import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import { Divider } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

import Logo from '../../img/logo.png'

const Login = () => {

  return (
    <ScrollView>
      <Image
        source={Logo}
        resizeMode="contain"
        style={styles.logo}
      />
      <View style={styles.container}>
        <Text>Login form</Text>
        <CreateAccount />
      </View>
      <Divider style={styles.divider} />
      <Text>Social Logg</Text>
    </ScrollView>
  )
}

export default Login

const CreateAccount = () => {
  const navigation = useNavigation()
  return (
    <Text style={styles.textRegister}>
      ¿Aún no tienes una cuenta? {" "}
      <Text
        onPress={() => navigation.navigate('register')}
        style={styles.register}  
      >
        Registrate
      </Text>
    </Text>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: 150,
    marginTop: 20
  },
  container: {
    marginLeft: 40,
    marginRight: 40
  },
  textRegister: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  register: {
    color: '#00a680',
    fontWeight: 'bold',
  },
  divider: {
    backgroundColor: '#00a680',
    margin: 40
  }
})
