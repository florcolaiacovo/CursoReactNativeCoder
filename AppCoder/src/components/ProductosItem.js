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
      <View 
        style={styles.cajaProducto}>
        <Image 
          style={{width: '100%', height:'50%'}}
          source={{uri:  "https://reactjs.org/logo-og.png"
          }}/>
        <View>  
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
      height: '100%',
      width: '80%',
      paddingVertical: 7,

    }
})