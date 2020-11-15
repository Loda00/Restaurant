import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Account from '../screens/Account/Account'
import Register from '../screens/Account/Register'
import Login from '../screens/Account/Login'

const Stack = createStackNavigator()

const AccountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="account"
        component={Account}
        options={{ title: 'Cuenta' }}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{ title: 'Iniciar session' }}
      />
      <Stack.Screen
        name="register"
        component={Register}
        options={{ title: 'Registro' }}
      />
    </Stack.Navigator>
  )
}

export default AccountStack
