import  React from "react";
import { View, 
        Text, 
        StyleSheet, 
        Image,  
        TextInput,
        ScrollView
} from "react-native";
import SpecailHeader from "../components/header";
import SpecailBtn from "../components/button";
import { MaterialIcons } from "@expo/vector-icons";



export default ({route}) => {

  return (
    <View style={styles.view}>
      <SpecailHeader/>
      <ScrollView style={{flex:1 , marginHorizontal:16}}>
          <View style={styles.imgConatiner}>
              <Image 
              style={styles.pro_img}
              source={{
              uri:"https://cdn.shopify.com/s/files/1/0149/4614/0260/files/HP_Banner_1_63a3d368-ae18-4ced-b8af-a65053d8cef5.png?v=1669730133"
              }}/>

              <View style={styles.edit}>
                  <MaterialIcons style={styles.icon} name="edit"/>
              </View>

          </View>
          <View style={styles.content}>
              <TextInput style={styles.box_text}>nisreen  ahmed salman</TextInput>
              <TextInput style={styles.box_text}>+972 598380344</TextInput>
              <TextInput style={styles.box_text}>nisreensalman../gmail.com</TextInput>
              <TextInput 
              style={styles.box_text}
              placeholder="Write your place"></TextInput>

              <SpecailBtn>
                  <Text style={styles.text}>Save</Text>
              </SpecailBtn>

          </View>
          </ScrollView>
    
    </View>
  );
};


const styles = StyleSheet.create({
  view:{
    flex:1,
  },

  imgConatiner:{
    marginTop:50,
    alignSelf:"center"
    },

  pro_img:{
    width: 150,
    height: 150,
    borderRadius:80

  },
  edit:{
    width: 40,
    height: 40,
    position:"absolute",
    borderRadius:24,
    bottom:0,
    right:0,
    backgroundColor:"#9649E2"
    
  

  },
  icon:{
    color:"white" , 
    fontSize:24 ,
    alignSelf:"center",
    marginTop:6
},
  content:{
    flex:1,
    marginTop:40

  },

  box_text:{
          backgroundColor:"white",
          borderRadius:6,
          paddingHorizontal:20,
          paddingVertical:15,
          marginTop:24,
          
  },
  text:{
    color:'white', 
    alignSelf:"center"
  }

  
});

