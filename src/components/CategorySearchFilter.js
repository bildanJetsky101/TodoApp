import { VStack, Heading, Input, Icon, } from "native-base"
import { useState } from "react"
import { View, StyleSheet, TextInput } from "react-native"
import SelectField from "./select/SelectField"


export default function CategorySearchFilter(){

    const [service, setService] = useState('')
    const [serviceStatus, setServiceStatus] = useState('')

    return(
        <View style={styles.container}>
            <VStack style={styles.searchBar}  w="100%" space={5} alignSelf="center" mb={2}>
                <Input  placeholder="Search " width="100%" borderRadius="4" py="3" px="1" fontSize="14" InputLeftElement={<Icon m="2" ml="3" size="6" color="gray.400"  />} />
            </VStack>
            <View style={styles.filterCategory}>
                <TextInput style={styles.input} placeholder='Date'/>
                <SelectField style={styles.select} label='Study' accessibilityLabel='Category' />
                <SelectField style={styles.select} label='On-going' accessibilityLabel='Status' />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white'
    }, 
    filterCategory: {
        display:'flex',
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between'
    },
    searchBar: {
        marginTop:'10px',
        backgroundColor:'rgba(0, 0, 0, 0.1)',
        borderStyle:'none'
    },
    select: {
        backgroundColor:'rgba(0, 0, 0, 0.1)',
        borderStyle:'none'
    },
    input: {
        height:'35px',
        padding:'15px',
        width:'32%',
        backgroundColor:'rgba(0, 0, 0, 0.1)',
        borderRadius:"5px",
        color:'rgba(0, 0, 0, 0.3)',
    }
})