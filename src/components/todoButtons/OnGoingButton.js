import { TouchableOpacity, StyleSheet } from "react-native";
import { backgroundColor } from "styled-system";

export default function OnGoingButton(){
    return(
        <TouchableOpacity style={styles.onGoingButton}>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    onGoingButton: {
        width:50,
        height:50,
        borderRadius:'50%',
        backgroundColor:'grey'
    }
})