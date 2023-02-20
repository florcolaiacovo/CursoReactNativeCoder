import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const ProductosItem = ({item, onSelected}) => {
  return (
    <View style={styles.cajaProducto}>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text>$ {item.price} ARS</Text>
      <Button
        title="ver detalles"
        onPress={() => navigation.navigate('Detalles')}
        color="red" />
      <Button
        title="Ir atrás"
        onPress={() => navigation.goBack()} />
    </View>
  )
}

export default ProductosItem

const styles = StyleSheet.create({
    cajaProducto: {
        width: '70%',
    }
})