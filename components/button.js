import React from "react";
import {TouchableOpacity,Text} from "react-native";

const SpecailBtn=({...props})=>{
    return(
<TouchableOpacity 
      style={styles}
      activeOpacity={0.8}
      {...props}
       >
      </TouchableOpacity>
    )}

const styles ={
        marginTop:40,
        backgroundColor:'#9649E2',
        paddingHorizontal:20,
        paddingVertical:15,
        borderRadius:6,
        textAlign:'center'
         }

export default SpecailBtn;
