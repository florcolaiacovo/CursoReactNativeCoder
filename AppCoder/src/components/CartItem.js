import { 
    Text, 
    StyleSheet, 
    View } from 'react-native'
import React from 'react'

import Ionicons from "@expo/vector-icons/Ionicons"

const CartItem = ({item, onDelete}) => {
  return (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
      <Ionicons
        name='trash'
        size={24}
        onPress={() => console.log('borrar del carrito')} />    
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({})