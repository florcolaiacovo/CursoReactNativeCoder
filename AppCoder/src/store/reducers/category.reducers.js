import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import {CATEGORIAS} from '../../data/categories'

const initialState = {
    categories: CATEGORIAS,
    selected: null
}

const CategoryReducer = ( state = initialState, action) => {
  return state
}

export default CategoryReducer
const styles = StyleSheet.create({})