import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function PrimaryButton({info}) {

    const onPress = () =>{
        alert(`button ${info} success`)
    }

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onPress} >
            <Text style={{color:'white'}}>{info}</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop:'20px',
    width:'100%'
  },
  button : {
    height:'40px',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:'5px',
    backgroundColor:'rgba(255, 85, 85, 1)',
    width:'100%'
  }
})