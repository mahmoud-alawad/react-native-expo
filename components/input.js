import React from "react";
import {TextInput} from "react-native";

const SpecailInput=({...props})=>{
    return(
<TextInput 
        style={styles}
    {...props}
      />
    )
}

const styles ={
          backgroundColor:"#f2f2f2",
          borderRadius:5,
          paddingHorizontal:20,
          paddingVertical:15,
          marginTop:10
};


export default SpecailInput;
