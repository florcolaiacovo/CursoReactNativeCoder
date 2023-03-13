import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

//data
import { ORDERS } from '../../data/orders'

//componente
import OrderItem from '../../components/OrderItem'

import { useSelector, useDispatch } from 'react-redux'
import { getOrders } from "../store/actions/order.action"

const OrdersScreen = () => {

    const dispatch = useDispatch()
    const orders = useSelector(state => state.orders.list)
  
    useEffect(() => {
      dispatch(getOrders())
    }, [])


    const renderOrderItem = ({item}) => (
        <OrderItem
            item={item}
            onDelete={()=> console.log('borrarrrr')} />
    )

  return (
    <View>
      <FlatList
        data={orders}
        keyExtractor={item => item.id}
        renderItem={renderOrderItem}
      />
    </View>
  )
}

export default OrdersScreen

const styles = StyleSheet.create({})