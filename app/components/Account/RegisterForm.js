import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Input, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

const RegisterForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repitPassword, setRepitPassword] = useState('')
  const [hiddenPassword, setHiddenPassword] = useState(true)

  const handleOnChange = (e, fn) => {
    const { text } = e.nativeEvent
    fn(text)
  }
  
  console.log('email', email)
  return (
    <View style={style.formContainer}>
      <Input
        placeholder="Correo electrónico"
        containerStyle={style.inputForm}
        onChange={(e) => handleOnChange(e, setEmail)}
        rightIcon={
          <Icon
            name='user'
            size={24}
            color='black'
          />
        }
      />
      <Input
        placeholder="Contraseña"
        containerStyle={style.inputForm}
        onKeyPress={(e) => handleOnChange(e, setPassword)}
        secureTextEntry={hiddenPassword}
        rightIcon={
          <Icon
            name={hiddenPassword ? 'lock' : 'unlock'}
            onPress={() => setHiddenPassword(prev => !prev)}
            size={24}
            color='black'
          />
        }
      />

      <Input
        placeholder="Repetir contraseña"
        containerStyle={style.inputForm}
        textContentType="password"
        secureTextEntry
        maxLength={5}
        rightIcon={
          <Icon
            name='lock'
            size={24}
            color='black'
          />
        }
      />

      <Button
        title="Unirse"
        buttonStyle={style.buttonRegister}
        containerStyle={style.button}
      />
    </View>
  )
}

export default RegisterForm

const style = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop:  30
  },
  inputForm: {
    width: '100%',
    marginTop: 20
  },
  buttonRegister: {
    backgroundColor: '#00a680'
  },
  button: {
    marginTop: 20,
    width: '80%'
  }
})
