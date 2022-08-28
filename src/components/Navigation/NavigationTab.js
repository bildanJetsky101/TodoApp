import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddList from '../../pages/addTodos';
import AddCategory from '../../pages/addCategories';
import TodoList from '../../pages/todoList';
import { NavigationContainer } from '@react-navigation/native';


const Tab = createBottomTabNavigator();

export default function NavigationTab() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          style: {
              position: 'absolute',
              bottom: 25,
              left: 20,
              right: 20,
              elevation: 0,
              backgroundColor: '#fff',
              borderRadius: 15,
              height: 90,
              ...styles.shadow
          }
        }}
      >

<Tab.Screen name="TodoList" component={TodoList} 
         options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItem: 'center', justifyContent: 'center', top: 10,}}>
              <Image 
                source={require('../../../assets/listtodo.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#FF5555' : '#D9D9D9',
                }}
              />
            </View>
          ),
        }}
        />



<Tab.Screen name="TaskListAdd" component={AddList} 
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItem: 'center', justifyContent: 'center', top: 10,}}>
              <Image 
                source={require('../../../assets/addtodo.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#FF5555' : '#D9D9D9',
                }}
              />
            </View>
          ),
        }}/>

<Tab.Screen name="Category" component={AddCategory} 
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItem: 'center', justifyContent: 'center', top: 10,}}>
              <Image 
                source={require('../../../assets/category.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#FF5555' : '#D9D9D9',
                }}
              />
            </View>
          ),
        }} /> 

        
      </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create ({
  shadow: {
     shadowColor: '#7F5DF0',
     shadowOffset: {
      width: 0,
      height: 10,
     },
     shadowOpacity: 0.25,
     shadowRadius: 3.5,
     elevation: 5,
  }
});