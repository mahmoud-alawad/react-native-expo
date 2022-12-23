import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native'
import { useNavigation } from '@react-navigation/native'
const Button = (props) =>{
    const navigation = useNavigation()
    console.log(props)
    return <TouchableOpacity 
    onPress = {()=>navigation.goBack()} 
   
        style={{
        backgroundColor:'blue',
        width:100,
    }}>
        <Text style={{
            color:'white',
            padding:10,
            fontSize:20
        }}>Back</Text>
    </TouchableOpacity>
}
export default Button ;

