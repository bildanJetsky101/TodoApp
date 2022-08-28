//import { View } from "native-base"
import { StyleSheet, Image, Text, View } from "react-native"
import CategoryCard from "../components/CategoryCard"
import CategorySearchFilter from "../components/CategorySearchFilter"
import NavigationTab from "../components/Navigation/NavigationTab"

export default function ListTodo(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerText}>
                    <Text style={styles.headerTextProfile}>Hi User</Text>
                    <Text style={styles.headerTextList}>50 List</Text>
                </View>
                {/* <Image source={require('../../asset/profile.png')}/> */}
            </View>
            <CategorySearchFilter/>
            <View style={styles.cardContainer}>
                <CategoryCard category='Study' name='Go' date='12 September 2023' color={false}/>
                <CategoryCard category='Study' name='Go' date='12 September 2023' color={false}/>
                <CategoryCard category='Workout' name='Leg-day' date='12 September 2023' color={true}/>
            </View>
            <NavigationTab />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        padding:'30px',
    },
    cardContainer: {
        marginTop:'20px',
        display:'flex',
        minheight:'20rem',
        flexDirection:'column',
        justifyContent:'space-between'
    },
    header: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    headerText: {
        display:'flex',
        flexDirection:'column'
    },
    headerTextProfile: {
        fontSize:24,
        fontWeight:600,
    },
    headerTextList:{
        color:'rgba(255, 85, 85, 1)'
    }
})