import React from "react";
// import SpecailHeader from "./component/header";
import {Text,View , StyleSheet,Image} from "react-native";
import { Ionicons } from "@expo/vector-icons";
const SpecailHeader=()=>{
  return(
    <View style={styles.container}>
        <View style={styles.logo}>
            <Image 
              style={styles.img}
              source={require("../assets/logo1.png")}
            />
           
            <Text style={styles.appname}>store</Text>
        </View>
        <View style={styles.profile}>
          <View style={styles.profileimg}>
          <View style={styles.icon}>
            <Ionicons style={{color:"black" , fontSize:24 , marginLeft:12}} name="notifications-outline"></Ionicons>

          </View>
            <View>
              <Image 
              style={styles.pro_img}
              source={{
              uri:"https://cdn.shopify.com/s/files/1/0149/4614/0260/files/HP_Banner_1_63a3d368-ae18-4ced-b8af-a65053d8cef5.png?v=1669730133"
              }}/>
            </View>
            
          </View>
        </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    height:70,

    borderBottomWidth:0.5,
    borderColor:"#E2E2E2",
    marginTop:10,
    backgroundColor:"white",
  },
  appname:{
    fontWeight:"bold",
    fontSize:17,
    marginLeft:30,
    paddingTop:5
  },
  logo:{
    flexDirection:"row" , 
    
    position:"absolute" ,
    left:16,
    height:80,
    alignItems:"center"
  },
  img:{
    position:"absolute",
    width: 24,
    height: 24,
   
  },
  profileimg:{
    flexDirection:"row",
    
    height:80,
    width:100,
    position:"absolute",
    right:0,
    justifyContent:"space-between",
    alignItems:"center",
    paddingRight:16
  },
  pro_img:{
    width: 30,
    height: 30,
  
    borderRadius:24

  }
})
export default SpecailHeader;