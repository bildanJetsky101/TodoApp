import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import RegisterForm from '../components/RegisterForm';

export default function Register() {

  const goLogin = () => {
    alert('go login')
  }

  return (
    <View style={styles.container}>
        <Image style={{width:'295px', height:'210px'}} source={require('../../assets/logIcon.png')}/>
        <Text style={styles.titleRegister}>Register</Text>
        <RegisterForm/>
        <Text style={{marginTop:'15px'}}>Already Have an Account? <Text onPress={goLogin} style={styles.goLogin}>Login</Text></Text>
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
  titleRegister : {
    fontSize:24,
    fontWeight:700,
    marginTop:'20px',
    marginBottom:'-20px',
    marginLeft:'-235px'
  },
  goLogin: {
    fontWeight:700,
    color:'rgba(255, 85, 85, 1)'
  }
})
