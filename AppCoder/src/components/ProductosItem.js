import { 
  StyleSheet, 
  Text, 
  View, 
  Button, 
  TouchableOpacity, 
  Image } 
  from 'react-native'
import React from 'react'

const ProductosItem = ({item, onSelected}) => {
  return (

    <TouchableOpacity
      onPress={() => onSelected(item)}>

      <View style={styles.cajaProducto}>
        <View>
          <Image 
            style={{width: 155, height: 100}}
            source={{uri:  "https://reactjs.org/logo-og.png"
            }}/>
        </View>
      
        <View style={styles.textoItem}>  
          <Text>{item.title}</Text>
          <Text>$ {item.price} ARS</Text>
        </View>

      </View>
    </TouchableOpacity>
  )
}

export default ProductosItem

const styles = StyleSheet.create({
    cajaProducto: {
      margin: 15,
      width: '80%',
      height: '150%',
      paddingVertical: 7,
    },
    textoItem: {
      height: 300,
    }
})