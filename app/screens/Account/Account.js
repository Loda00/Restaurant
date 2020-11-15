import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import firebase from 'firebase'

import UserGuest from './UserGuest'
import UserLogged from './UserLogged'
import Loading from '../../components/Loading'

const Account = () => {
  const [login, setLogin] = useState(null)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      user ? setLogin(true) : setLogin(false)
    })
  }, [])

  console.log('login', login)

  if (login === null) return <Loading isVisible text="Cargando ..." />

  return login ? <UserLogged /> : <UserGuest />
}

export default Account
