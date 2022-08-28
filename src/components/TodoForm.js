//import { Picker } from '@react-native-picker/picker';
import { StyleSheet, View, TextInput } from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
import { useEffect, useState } from 'react';
import { TextArea } from 'native-base'

export default function TodoForm() {

  const [selected, setSelected] = useState(0)

  const data = [
    {key:'1',value:'Workout'},
    {key:'2',value:'Task'},
    {key:'3',value:'Home Work'},
    {key:'4',value:'Presentation'},
    {key:'5',value:'Event'}
  ]

  useEffect(()=>{
      if(selected){
        console.log(data[selected-1].value)
      }
    },[selected])

  return (
    <View style={styles.container}>
        <TextInput style={styles.input} placeholder='Name'/>
        <SelectList style={styles.inputSelect} 
         data={data} 
         setSelected={setSelected} 
         boxStyles={styles.inputSelect}
         placeholder='Select Category'
         maxHeight={300}
         dropdownStyles={{backgroundColor:'rgba(0, 0, 0, 0.1)', color:'white', marginBottom:'10px', borderStyle:'none'}}
         />
         <TextArea style={styles.textArea} h={100} placeholder="Description" w="100%"  /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop:'20px',
    width:'100%'
  },
  input : {
     height:'45px',
     padding:'15px',
     backgroundColor:'rgba(0, 0, 0, 0.1)',
     borderRadius:"5px",
     color:'rgba(0, 0, 0, 0.3)',
     marginBottom:'15px'
  },
  inputSelect : {
    height:'45px',
    padding:'15px',
    backgroundColor:'rgba(0, 0, 0, 0.1)',
    borderRadius:"5px",
    color:'rgba(0, 0, 0, 0.3)',
    marginBottom:'15px',
    borderStyle:'none'
 },
 textArea: {
    fontSize:14,
    backgroundColor:'rgba(0, 0, 0, 0.1)',
    borderStyle:'none'
 }
})