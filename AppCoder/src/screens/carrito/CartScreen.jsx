import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import CartItem from '../../components/CartItem'
import { PRODUCTOS } from '../../data/products'



const CartScreen = () => {

  const total = 100

  const handleConfirmCart = () => {
    console.log('Confirmar carrito')
  }

  const handleDeleteItem = () => {
    console.log('Borrar del carrito')
  }

  const renderCartItem = ({item}) => (
    <CartItem 
      item={item}
      onDelete= {handleDeleteItem}
    />
  )
  return (
    <View>
      <Text>CartScreen</Text>
      <FlatList
        data={PRODUCTOS}
        keyExtractor= {item => item.id}
        renderItem={renderCartItem} 
      />
     <View style={styles.footer}>
        <TouchableOpacity style={styles.confirm} onPress={handleConfirmCart}>
          <Text>Confirmar</Text>
          <View style={styles.total}>
            <Text style={styles.text}>Total</Text>
            <Text style={styles.text}>${total}</Text>
          </View>
        </TouchableOpacity>
      </View>
        
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#fff",
    paddingBottom: 120,
  },
  list: {
    flex: 1,
  },
  footer: {
    padding: 12,
    borderTopColor: "#ccc",
    borderTopWidth: 1,
  },
  confirm: {
    backgroundColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  total: {
    flexDirection: "row",
  },
  text: {
    fontSize: 18,
    padding: 8,
  }
})