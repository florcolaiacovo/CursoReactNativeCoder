import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const DetallesScreen = ({ route, navigation}) => {

  const bread = useSelector(state => state.products.selected)

  return (
    <View>
      <Text>Detalles screen {route.params.name}</Text>
      <Button title="Ir al inicio" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default DetallesScreen;

const styles = StyleSheet.create({});
