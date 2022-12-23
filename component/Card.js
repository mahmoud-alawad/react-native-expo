import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image, FlatList} from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import Card from'./component/Card'
const card = (props) =>{
    const { item } = props
    
    return(
        <View style={styles.cont}>
        <Image source={item.img} style={styles.img} />
        <Image source={item.image} style={styles.img} />
        <View style={styles.box}>
          <Text style={styles.title}>{item.name}</Text>
          <View style={styles.row}>
            <Text style={styles.size}>{item.count}</Text>
            <Text style={styles.rate}>{item.rate}</Text>
          </View>
          <Text style={styles.price}>{item.price}</Text>
        </View>
        <TouchableOpacity activeOpacity={0.8} 
        style={styles.heart}  
        >
          <Ionicons
            color={"red"}
            name={item.is_fav ? "heart" : "heart-outline"}
            size={20}
          />
        </TouchableOpacity>
      </View>
    )
}


const styles = StyleSheet.create({
    btn: {
      backgroundColor: "black",
      padding: 15,
      width: 85,
      borderRadius: 20,
      marginLeft: 10,
      marginBottom: 10,
      alignItems: "center",
    },
    text: {
      fontSize: 40,
      fontWeight: "bold",
      textAlign: "center",
      marginTop: 40,
    },
    cont: {
      width: 300,
      marginRight: 20,
      
    },
    box: {
      height: 120,
      backgroundColor: "white",
      justifyContent: "space-between",
      padding: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      elevation: 1,
      shadowColor: "#000",
      shadowOpacity: 0.3,
      shadowOffset: {
        height: 0,
        width: 0,
      },
    },
    img: {
      width: "100%",
      height: 300,
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      resizeMode:'cover'
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    title: {
      fontWeight: "bold",
      fontSize: 20,
    },
    size: {
      color: "grey",
      fontSize: 18,
    },
    rate: {
      fontSize: 18,
      color: "orange",
    },
    price: {
      fontSize: 18,
      color: "green",
    },
    heart: {
      position: "absolute",
      right: 0,
      top: 10,
      backgroundColor: "#fff",
      width: 30,
      height: 30,
      zIndex: 10,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 15,
    },
  });
  export default Card;