import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CartScreen from '../screens/carrito/CartScreen.jsx'

const Stack = createNativeStackNavigator();

export default function CartNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="Categorías"
            screenOptions={{
                headreTitleStyle: {
                    fontWeight: "bold"
                }
            }}
            >       
            <Stack.Screen 
                name="Cart" 
                component={CartScreen}
                options={{
                    title: "Carrito"
                }} />
     
        </Stack.Navigator>
    )
}