import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';



const Category = (props) =>{
    const { item } = props
    
    return(
      <TouchableOpacity 
      activeOpacity={0.8}>
      <View style={{flex:1}}>
        <View style={styles.cont}>
          <Image source={item.img} style={styles.img} />
          <View style={styles.box}>
            <Text style={styles.title}>{item.name}</Text>
          </View>
      </View>
      </View>
      </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    cont: {
      width:120,
      marginRight: 8,
      marginTop:24,
      

    },
    box: {
        height: 50,
        backgroundColor: "white",
        justifyContent: "space-between",
        padding: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      

    },
    img: {
        width: "100%",
        height: 120,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
      
    },
    title: {
      fontWeight: "bold",
      fontSize: 12,
    }
  });
  export default Category;