import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const DetallesScreen = ({ route, navigation}) => {
  return (
    <View>
      <Text>Detalles screen {route.params.name}</Text>
      <Button title="Ir al inicio" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default DetallesScreen;

const styles = StyleSheet.create({});
