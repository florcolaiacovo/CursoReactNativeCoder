import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const TodosLosCursos = ({navigation, route}) => {
  return (
    <View>
      <Text>TodosLosCursos</Text>
      <Button
        title="+ info"
        onPress={() => navigation.navigate('Detalles')}
        color="red" />
      <Button
        title="Ir atrás"
        onPress={() => navigation.goBack()} />
    </View>
  );
};

export default TodosLosCursos;

const styles = StyleSheet.create({});
