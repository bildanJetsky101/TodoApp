import { StyleSheet, View, TextInput, } from 'react-native';
import {useState} from 'react'
import PrimaryButton from './PrimaryButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RegisterForm() {

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = values;

  const handleChange = (name, value) => {
    setValues({
      ...values,
      [name]: value,
      
    });
  }

  console.log(values)

  const handleSubmit = async () => {   
    try {
      const config = {
        headers: {
          'Content-type': 'application/json',
          },
        }
      
      const data = JSON.stringify(values)

      const response = await axios.post()

      // jika data berhasil dikirim maka ambil token dari user lalu masukan ke storage
      if (response){
          await AsyncStorage.setItem('token', response.data.token)
      }

      const tokenValue = await AsyncStorage.getItem('token')
      if(!tokenValue){
          console.log('Nope')
      }

      } catch(error){
          console.log(error)
          console.log(error.response.data.message)
      }
    }  

  return (
    <View style={styles.container}>
        <TextInput style={styles.input} value={name} name='name' onChangeText={(value) => handleChange('name', value)} placeholder='Username'/>
        <TextInput style={styles.input} value={email} name='email' onChangeText={(value) => handleChange('email', value)} placeholder='Email'/>
        <TextInput style={styles.input} value={password} name='password' onChangeText={(value) => handleChange('password', value)} placeholder='Password'/> 
        <PrimaryButton info="Register" onPress={handleSubmit}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop:'40px',
    width:'100%'
  },
  input : {
     height:'45px',
     padding:'15px',
     backgroundColor:'rgba(0, 0, 0, 0.1)',
     borderRadius:"5px",
     color:'rgba(0, 0, 0, 0.3)',
     marginBottom:'15px'
  }
})