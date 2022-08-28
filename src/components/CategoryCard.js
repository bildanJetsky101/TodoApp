//import { View } from "native-base"
import { Text, StyleSheet, Image, View } from "react-native"
import CategoryIcon from "./categoryButton/categoryButton"
import DoneButton from "./todoButtons/DoneButton"
import OnGoingButton from "./todoButtons/onGoingButton"
import { useState } from "react"

export default function CategoryCard({category, name, date, color}){

    const [buttonInfo, setButtonInfo] = useState(color)

    const colorPicker = (color) => {
        if(color){
            return'rgba(241, 255, 239, 1)'
        } 
         return 'rgba(218, 239, 255, 1)'
    }

    const styles = StyleSheet.create({
        container: {
            backgroundColor: `${colorPicker(color)}`,
            flexDirection:"column",
            borderRadius:'5px',
        },
        cardHeader: {
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            paddingTop:'10px',
            paddingLeft:'10px',
            paddingRight:'10px',
            alignItems:'center'
        },
        cardInfo: {
            display:"flex",
            width:'100%',
            flexDirection:'row',
            // backgroundColor:'tomato',
            paddingBottom:'10px',
            paddingLeft:'10px',
            justifyContent:'space-between'
        },
        cardIconInfo: {
            display:'flex',
            width:'20%',
            flexDirection:'column',
            paddingRight:10,
            // backgroundColor:"wheat"
        },
        cardInfoTitle:{
            fontWeight:500,
            fontSize:'16px',
        },
        cardInfoDesc: {
            marginBottom:'5px',
            width:'70%',
            color:'rgba(155, 155, 155, 1)',
            // backgroundColor:'yellow'
        }, 
        cardInfoDate: {
            color:'grey',
            padding:'10px',
            flexDirection:'row'
        }
    })

    return(
        <View style={styles.container}>
            <View style={styles.cardHeader}>
                <Text style={styles.cardInfoTitle}>{category} - <Text>{name}</Text></Text>
                <CategoryIcon category={category} color="tomato"/>
            </View>
            <View style={styles.cardInfo}>
                <Text style={styles.cardInfoDesc}>
                     This is a description This is a description This is a description This is a description
                </Text>
                <View style={styles.cardIconInfo}>
                    {buttonInfo? <DoneButton/> : <OnGoingButton/>  }
                </View>
            </View>
                <View style={styles.cardInfoDate}>
                    <Image style={{width:'20px',height:'20px'}} source={require('../../assets/calendar-icon.png')}/>
                    <Text style={{marginLeft:'5px'}}>{date}</Text>
                </View>
        </View>
    )
}
