import { TouchableOpacity, StyleSheet } from "react-native";

export default function DoneButton(){
    return(
        <TouchableOpacity style={styles.doneButton}>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    doneButton: {
        width:50,
        height:50,
        borderRadius:'50%',
        backgroundColor:'green'
    }
})