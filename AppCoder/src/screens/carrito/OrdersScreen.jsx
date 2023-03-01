import { StyleSheet, FlatList, View, Text} from 'react-native'
import React from 'react'

//data
import { ORDERS } from '../../data/orders'

//componente
import OrderItem from '../../components/OrderItem'

const OrdersScreen = () => {

  const renderOrderItem = ({item}) => (
    <OrderItem
      item={item}
      onDelete={() => console.log('borrar item del carrito')} />
  )

  return (
    <View>
      <View>
        <Text>OrdersScren</Text>
      </View>
      <FlatList
        data= {ORDERS}
        keyExtractor= {item => item.id}
        renderItem= {renderOrderItem} />
    </View>
  )
}

export default OrdersScreen

const styles = StyleSheet.create({})