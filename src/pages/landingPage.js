import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import TodoIcon from '../../assets/icon.png'

export default function LandingPage() {

  const goRegister = () => {
    alert('success go register')
  }  

  return (
    <View style={styles.container}>
      {/* <Image source={TodoIcon} /> */}
    <Image style={{width:'215px', height:'210px'}} source={require('./todo.png')}/>
      <Text style={styles.titleLeft}>Ways <Text style={styles.titleMiddle}>To</Text><Text style={styles.titleRight}>Do</Text> </Text>
      <Text style={styles.titleSentence}>Write your activity and finish it. Fast, Simple and Easy to Use</Text>
      <PrimaryButton info="login"/>
      <TouchableOpacity style={styles.buttonRegister} onPress={goRegister} >
            <Text style={{color:'white'}}>Register</Text>
      </TouchableOpacity>
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
  titleLeft: {
    fontSize:'35px',
    fontWeight:500
  },
  titleMiddle:{
    fontSize:'35px',
    color:'rgba(184, 32, 32, 1)',
    fontWeight:500
  },
  titleRight:{
    fontSize:'35px',
    color:'rgba(255, 85, 85, 1)',
    fontWeight:500
  },
  titleSentence: {
    textAlign:'center',
    marginTop:'10px',
    width:'80%',
    marginBottom:'30px'
  },
  buttonRegister: {
    height:'40px',
    justifyContent:'center',
    alignItems:'center',
    marginTop:'10px',
    borderRadius:'5px',
    backgroundColor:'rgba(0, 0, 0, 0.31)',
    width:'100%'
  }
});
