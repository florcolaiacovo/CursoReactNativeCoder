import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList } 
    from "react-native";
import React from "react";

//data
import { CATEGORIAS } from "../../data/categories";

//componente
import CategoriesItem from "../../components/CategoriesItem";


const CategoriesScreen = ( {navigation}) => {
  //funcion para navegar a los cursos y productos
  // luego lo asignamos a nuestra funcion renderCategoriesItem
  const seleccionarCategoria = (item) => {
    navigation.navigate("Productos", 
    {/*{
      categoryId: item.id,
      title: item.title,
    }*/})
  }

  //funcion que define lo que va a rendear el FlatList en la pantalla principal
  const renderCategoriesItem = ({item}) => (
    <View>
      <CategoriesItem 
        item={item} 
        onSelected={() => seleccionarCategoria()}/>
    </View>
  )

  return (
    <View>
      <Text>Cuando sos padre primerizo muchas veces no sabés por donde empezar. Nos invaden tantos miedos.
      ¿Seré un buen padre? ¿Repetiré los errores que mis padres cometieron conmigo? ¿Qué puedo hacer para ser conciente de lo que debo saber para evitar errores comunes?
      En esta aplicación podrás encontrar una gran guía y apoyo para que explotes tu máximo potencial. Espero ser de gran ayuda para el trabajo más importante de tu vida. Queremos lo mejor para la familia hermosa que te aventuraste a formar. Espero que disfrutes de esta app que creé con tanto amor :)
    </Text>
      <FlatList 
        data={CATEGORIAS}
        renderItem={renderCategoriesItem}
        keyExtractor= {item => item.id}
      />
      {/*<Button title="Cursos" onPress={() => navigation.navigate("Productos")}/>*/}
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
