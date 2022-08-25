import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  Image } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import LoginForm from '../components/LoginFrom';

export default function Login() {

  const handleLogin = () => {
    alert('success login')
  }  

  return (
    <View style={styles.container}>
    <Image style={{width:'295px', height:'210px'}} source={require('../../assets/logIcon.png')}/>
    <Text style={styles.titleLogin}>Login</Text>
    <LoginForm/>
    <PrimaryButton info="login" onPress={handleLogin}/>
    <Text style={{marginTop:'15px'}}>New User? <Text style={styles.goRegister}>Register</Text></Text>
    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding:30,
    justifyContent: 'center',
  },
  titleLogin : {
    fontSize:24,
    fontWeight:700,
    marginTop:'20px',
    marginBottom:'-20px',
    marginLeft:'-260px'
  },
  goRegister: {
    fontWeight:500,
    color:'rgba(255, 85, 85, 1)'
  }
})
