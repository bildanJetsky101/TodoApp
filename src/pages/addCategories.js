import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import CategoryButton from '../components/categoryButton/categoryButton';

export default function AddCategory() {

  const handleSubmit = () => {
    alert('success submit')
  }  

  return (
    <View style={styles.container}>
    <View style={styles.sumbitCategory}>
        <Text style={styles.title}>Add Category</Text>
        <TextInput style={styles.input} placeholder="Your Category"/>
        <PrimaryButton info="Add Category" onPress={handleSubmit}/>
    </View>
    <View style={styles.categoryList}>
        <Text style={styles.title}>Category List</Text>
        <View style={styles.categoryListWrapper}>
            <CategoryButton category="Study" color="tomato"/>
            <CategoryButton category="Workout" color="#1d9965"/>
            <CategoryButton category="Home Work" color="#993446"/>
            <CategoryButton category="Task" color="#ef961a"/>
            <CategoryButton category="Presentation" color="#1d8e99"/>
        </View>
    </View>
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
    
  },
  sumbitCategory: {
    width:'100%',
    marginBottom:'50px'
  },
  categoryList: {
    width:'100%'
  },
  title: {
    fontWeight:700,
    fontSize:'24px',
    marginBottom:'20px'
  },
  categoryListWrapper: {
    //backgroundColor:"aqua",
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between',
    width:'100%'
  },
  input : {
    height:'45px',
    padding:'15px',
    width:'100%',
    backgroundColor:'rgba(0, 0, 0, 0.1)',
    borderRadius:"5px",
    color:'rgba(0, 0, 0, 0.3)',
    marginBottom:'5px'
 }
})
