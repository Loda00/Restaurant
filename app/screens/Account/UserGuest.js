import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

const UserGuest = () => {
  const navigation = useNavigation()
  console.log('navigation', navigation)
  return (
    <ScrollView
      centerContent
      style={style.viewBody}
    >
      <Image
        source={require('../../img/user-guest.jpg')}
        resizeMode="contain"
        style={style.image}
      />
      <Text style={style.title}>Consulta tu perfil</Text>
      <Text style={style.description}>
        ¿Cómo describirías al mejor restaurante? Busca y visualiza los mejores
        restaurantes de una forma sencilla, vota cual te a gustado más y comenta
        como ha sido tu experiencia.
      </Text>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Button
          buttonStyle={style.styleViewProfile}
          containerStyle={style.btnContainer}
          title="Ver tu perfil"
          onPress={() => navigation.navigate('login')}
        ></Button>
      </View>
    </ScrollView>
  )
}

export default UserGuest

const style = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30,
  },
  image: {
    height: 300,
    width: '100%',
    marginBottom: 40
  },
  title: {
    fontWeight: 'bold',
    fontSize: 19,
    marginBottom: 10,
    textAlign: 'center'
  },
  description: {
    textAlign: 'center',
    marginBottom: 30
  },
  styleViewProfile: {
    backgroundColor: '#00a680'
  },
  btnContainer: {
    width: '70%'
  }
})