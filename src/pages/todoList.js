import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import NavigationTab from '../components/Navigation/NavigationTab';
import PrimaryButton from '../components/PrimaryButton';
import TodoForm from '../components/TodoForm'

export default function TodoList() {

  const handleSubmit = () => {
    alert('success submit')
  }  

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Add List</Text>
        <TodoForm/>
        <PrimaryButton info="Add List" onPress={handleSubmit}/>
    <StatusBar style="auto" />
    <NavigationTab />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding:30,
    
  },
  title: {
    fontWeight:700,
    fontSize:'24px',
    marginBottom:'100px'
  },
  
})
