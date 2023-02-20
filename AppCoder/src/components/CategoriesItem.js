import { 
  Button,
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View,
  Image} 
        from 'react-native'
import React from 'react'

//constantes
import COLORS from '../constants/colors'


const CategoriesItem = ({item, onSelected}) => {
  return (
    <View style={styles.categoriesItemContainer}>

        <TouchableOpacity 
          style={styles.categoriesItemSubContainer}
          onPress={() => onSelected(item)}>

        <Text>{item.title}</Text>
        <Image 
          style={styles.imgItem}
          source={{uri: item.img,}}/>
        
        {/*<Image 
          style={styles.imgItem}
          source={require('../elements/Minnie.jpg')}/>
                      
                      <Image 
          style={styles.imgItem}
          source={{uri: "https://www.conpsicologia.es/wp-content/uploads/2019/08/Alegr%C3%ADa-felicidad-1024x576.jpg.webp"}}/>
*/}
        </TouchableOpacity>
    </View>
  )
}

export default CategoriesItem

const styles = StyleSheet.create({
  categoriesItemContainer: {
    flex: 1,
    height: 250,
    backgroundColor: COLORS.primario1,
    marginVertical: 15,
    borderRadius: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 10, 
  },

  imgItem: {
    width: "50%",
    height: "50%",
    marginVertical: 25,
    
  }
})