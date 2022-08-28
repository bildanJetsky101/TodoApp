import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import LandingPage from './src/pages/landingPage';
import Login from './src/pages/login';
import Register from './src/pages/register';
import AddCategory from './src/pages/addCategories';
import TodoForm from './src/components/TodoForm';
import AddTodo from './src/pages/addTodos';
import ListTodo from './src/pages/listTodo';

export default function App() {
  return (
    <NativeBaseProvider>
        <Register/>
    </NativeBaseProvider>
    
  );
}
