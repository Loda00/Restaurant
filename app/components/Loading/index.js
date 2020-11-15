import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import { Overlay } from 'react-native-elements'

const Loading = ({ isVisible, text, size = 'large', color = '#00a680' }) => {
  return (
    <Overlay
      isVisible={isVisible}
      windowBackgroundColor="rgba(0,0,0,0.4)"
      overlayBackgroundColor="transparent"
      overlayStyle={styles.overlay}
    >
      <View style={styles.view}>
        <ActivityIndicator size={size} color={color} />
        {text && <Text style={styles.text} >{text}</Text>}
      </View>
    </Overlay>
  )
}

export default Loading

const styles = StyleSheet.create({
  overlay: {
    height: 100,
    width: 200,
    backgroundColor: '#fff',
    borderColor: '#00a680',
    borderWidth: 2,
    borderRadius: 10
  },
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#00a680',
    textTransform: 'uppercase',
    marginTop: 10
  }
})
