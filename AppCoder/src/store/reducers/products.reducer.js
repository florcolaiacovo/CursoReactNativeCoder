import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import {PRODUCTOS} from '../../data/products'

const initialState = {
    products: PRODUCTOS,
    selected: null
}

const ProductsReducer = (state = initialState, action) => {
  return state
}

export default ProductsReducer

const styles = StyleSheet.create({})