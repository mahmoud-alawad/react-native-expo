import React from "react";
import {Text,View , StyleSheet, TouchableOpacity} from "react-native";
import { Ionicons } from "@expo/vector-icons";
const All=()=>{
    return(
        <TouchableOpacity 
         activeOpacity={0.8} style={styles.container}>
          <View style={styles.box}>
            <Ionicons style={styles.icon} name="color-wand"/>
          </View>
          <Text style={styles.txt}>All</Text>
        </TouchableOpacity>

    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        marginRight:16

    },
    box:{
        width:60,
        height:60,
        backgroundColor:"#9649E2",
        borderRadius:50

    },
    icon:{
        color:"white" , 
        fontSize:40 ,
        alignSelf:"center",
        marginTop:12
    },
    txt:{
        fontSize:12 ,
        alignSelf:"center",
        paddingTop:12,
        fontWeight:"bold"
    }


})
export default All;