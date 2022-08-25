import { StyleSheet, View, TextInput } from 'react-native';

export default function RegisterForm() {

  return (
    <View style={styles.container}>
        <TextInput style={styles.input} placeholder='Username'/>
        <TextInput style={styles.input} placeholder='Email'/>
        <TextInput style={styles.input} placeholder='Password'/> 
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