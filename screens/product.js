
import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { Ionicons } from "../expo/vector-icons";

const Product = () => {
  const [heart, setHeart] = useState(true);
  return (

    <View style={{ flex: 1, backgroundColor: "#f1f1f1" }}>
      <Text style={styles.title}>store</Text>
      <View style={styles.imgcontainer}>
        <Image style={styles.img}
          source={{
            uri: "https://cdn.shopify.com/s/files/1/0149/4614/0260/files/Flo_Queen_of_Hearts_Backdrop8846_664x640_2eb18a23-5750-4f93-9f9c-14cfc3713a0c.jpg?v=1657291710"
          }}>
        </Image>
        <View style={styles.textcontainer}>
          <View style={styles.row1}>
            <Text style={{ fontSize: 14, fontWeight: "bold", color: "#9F9F9F" }}>Product name:</Text>
            <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: 12 }}>Makeup</Text>
          </View>
          <View style={styles.row2}>
            <Text style={{ fontSize: 14, fontWeight: "bold", color: "#9F9F9F" }}>Price:</Text>
            <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: 18, color: "#0D8D21" }}>20$.</Text>
          </View>
          <View style={styles.row3}>
            <Text style={{ fontSize: 14, fontWeight: "bold", color: "#9F9F9F" }}>Rating:</Text>
            <Ionicons style={{ color: "#EDB902", fontSize: 18, marginLeft: 12 }} name="star-half-outline"> </Ionicons>
            <Text style={{ fontSize: 14, fontWeight: "bold", color: "#CDCDCD" }}>4.5</Text>
          </View>
        </View>


        <Image style={styles.img}
          source={{
            uri: "https://cdn.shopify.com/s/files/1/0149/4614/0260/products/FLORENCE188.jpg?v=1668214718&width=400"
          }}>

        </Image>
        <View style={styles.textcontainer}>
          <View style={styles.row1}>
            <Text style={{ fontSize: 14, fontWeight: "bold", color: "#9F9F9F" }}>Product name:</Text>
            <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: 12 }}>Makeup</Text>
          </View>
          <View style={styles.row2}>
            <Text style={{ fontSize: 14, fontWeight: "bold", color: "#9F9F9F" }}>Price:</Text>
            <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: 18, color: "#0D8D21" }}>20$.</Text>
          </View>
          <View style={styles.row3}>
            <Text style={{ fontSize: 14, fontWeight: "bold", color: "#9F9F9F" }}>Rating:</Text>
            <Ionicons style={{ color: "#EDB902", fontSize: 18, marginLeft: 12 }} name="star-half-outline"> </Ionicons>
            <Text style={{ fontSize: 14, fontWeight: "bold", color: "#CDCDCD" }}>4.5</Text>
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setHeart(!heart)}
          style={styles.icon}
        >
          <Ionicons
            color={"red"}
            name={heart ? "heart" : "heart-outline"}
            size={6}
          />
        </TouchableOpacity>

      </View>
    </View>
  );


};
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 100
  },

  imgcontainer: {
    width: 250,
    alignSelf: "center",
    marginTop: 13

  },

  img: {
    width: "100%",
    height: 250,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    flex: 1,
    justifyContent: "space-between",
    // backgroundColor: "#fff",
    padding: 100,
    // margin: 1,

  },
  textcontainer: {
    // flex:0.7,
    height: 100,
    backgroundColor: "white",
    padding: 12,
    justifyContent: "space-between",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 1,
      width: 1,
    },


  },
  row1: {
    flexDirection: "row",
    alignItems: "center",

  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12

  },
  row3: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12
  },



  icon: {
    position: "absolute",
    right: 10,
    top: 20,
    backgroundColor: "#fff",
    width: 25,
    height: 25,
    zIndex: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    padding: 10
  }



});

export default Product;





