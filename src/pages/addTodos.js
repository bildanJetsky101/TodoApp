import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import TodoForm from '../components/TodoForm'
import { useState } from 'react'

export default function AddTodo() {

  const [form, setForm] = useState({
     name:'',
     email:'',
     password:''
  })

  console.log(form)

  const handleSubmit = () => {
    alert('success submit')
  }  

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Add List</Text>
        <TodoForm setForm={setForm}/>
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
