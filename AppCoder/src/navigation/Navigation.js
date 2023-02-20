import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import CursoDeMotricidad from '../screens/cursos/CursoDeMotricidad'
import CursoPAyRCP from '../screens/cursos/CursoPayRcp'
import ProductosScreen from '../screens/cursos/ProductosScreen.jsx'
import CategoriesScreen from '../screens/cursos/CategoriesScreen';

//constantes
import COLORS from '../constants/colors'

const Stack = createNativeStackNavigator();

function MyTabs() {
    return (
        <Stack.Navigator
            initialRouteName="Categorías"
            screenOptions={{
                headerStyle: {backgroundColor: COLORS.primario1},
                hearderTintColor: COLORS.primario2,
                headreTitleStyle: {
                    fontWeight: "bold"
                }
            }}
        >
            
            <Stack.Screen 
                name="Categorías" 
                component={CategoriesScreen}
                options={{
                    title: "Inicio"
                }} />
            <Stack.Screen 
                name="Motricidad" 
                component={CursoDeMotricidad}
                options={{
                    title: "Curso de motricidad"
                }}
                />
            <Stack.Screen name="Rcp" component={CursoPAyRCP} />
            <Stack.Screen 
                name="Productos" 
                component={ProductosScreen} 
                options={({ route }) => ({
                    title: route.params.title,
                    })}
            /> 
        </Stack.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}