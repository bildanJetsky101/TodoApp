import {Center, Select, Box, CheckIcon} from 'native-base'
import { useState } from 'react'
import { StyleSheet } from 'react-native'

export default function SelectField({label, accessibilityLabel}){

    const [service, setService] = useState('')
    const [serviceStatus, setServiceStatus] = useState('')

    return(
        <Center style={styles.container}>
            <Box >
                <Select selectedValue={service}  accessibilityLabel={accessibilityLabel} placeholder={accessibilityLabel} _selectedItem={{
                    endIcon: <CheckIcon />
                }}  onValueChange={itemValue => setService(itemValue)}>
                    <Select.Item label={label} value={label} />
                </Select>
            </Box>
        </Center>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'rgba(0, 0, 0, 0.1)',
        borderStyle:'none',
        width:'32%',
    }
})