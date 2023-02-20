import { 
  StyleSheet, 
  Text, 
  View,
  FlatList } 
    from "react-native";
import React from "react";

//data 
import { PRODUCTOS } from "../../data/products";
import ProductosItem from "../../components/ProductosItem";


//funcion que define lo que va a renderear el Flatlist
const renderProductsItem = ({item}) => (
  <View>
    <ProductosItem 
      item={item}
      onSelected={() => console.log(item)}
    />
  </View>
)

const ProductosScreen = ({navigation, route}) => {
  
  
  return (
    <View>
      <Text>Productos</Text>
      <FlatList 
        data={PRODUCTOS}
        renderItem={renderProductsItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default ProductosScreen;

const styles = StyleSheet.create({});
