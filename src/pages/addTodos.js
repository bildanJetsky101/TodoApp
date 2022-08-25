import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import TodoForm from '../components/TodoForm'

export default function AddCategory() {

  const handleSubmit = () => {
    alert('success submit')
  }  

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Add List</Text>
        <TodoForm/>
        <PrimaryButton info="Add List" onPress={handleSubmit}/>
    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:30,
    
  },
  title: {
    fontWeight:700,
    fontSize:'24px',
  },
  
})
