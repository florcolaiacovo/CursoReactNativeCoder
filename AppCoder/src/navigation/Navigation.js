import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

//screens
import CursoDeMotricidad from '../screens/cursos/CursoDeMotricidad'
import CursoPAyRCP from '../screens/cursos/CursoPayRcp'
import TodosLosCursos from '../screens/cursos/TodosLosCursos'
import CategoriesScreen from '../screens/cursos/CategoriesScreen';

//constantes
import COLORS from '../constants/colors'

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Categorías"
            screenOptions={{
                headerStyle: {backgroundColor: COLORS.primario1},
                hearderTintColor: COLORS.primario2,
                headreTitleStyle: {
                    fontWeight: "bold"
                }
            }}
        >
            
            <Tab.Screen 
                name="Categorías" 
                component={CategoriesScreen}
                options={{
                    title: "Inicio"
                }} />
            <Tab.Screen 
                name="Motricidad" 
                component={CursoDeMotricidad}
                options={{
                    title: "Curso de motricidad"
                }}
                />
            <Tab.Screen name="Rcp" component={CursoPAyRCP} />
            <Tab.Screen 
                name="Todos los cursos" 
                component={TodosLosCursos} 
                options={({ route }) => ({
                    title: route.params.title,})} /> 
        </Tab.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}