import { StyleSheet, Text, View, } from 'react-native';

export default function CategoryButton({category, color}) {

    const styles = StyleSheet.create({
        container:{
          marginBottom:'10px', 
          padding:'15px',
          width:'fitContent',
          height:'35px',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          borderRadius:'5px',
          backgroundColor:`${color}`
        },
      
      })

 console.log(color)
  return (
    // <View style={{backgroundColor:`${color}`}}>
    <View style={styles.container}>
       <Text style={{color:'white'}}>{category}</Text>
    </View>
  );
}
