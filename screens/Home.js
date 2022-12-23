import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground, FlatList, TouchableOpacity } from "react-native";
import SpecailHeader from "../components/header";
import Card from "../components/Card";
import StoreCard from "../components/store_card";
import All from "../components/All";


export default  ({ route, navigation }) => {

  const [products, setProduct] = useState([
    {
      id: 0,
      img: {
        uri: "https://i.pinimg.com/564x/f3/58/78/f35878339ec3ecfea001dc50fc2268e1.jpg"
      },
      name: "product 1"
    },
    {
      id: 1,
      img: { uri: "https://i.pinimg.com/564x/43/6a/4d/436a4dd6997206efc6e210966d9efb51.jpg" },
      name: "product 2"
    },
    {
      id: 2,
      img: { uri: "https://i.pinimg.com/564x/45/6c/0d/456c0d26e070d95fd1fdb91e3c641de6.jpg" },
      name: "product 3"
    },
    {
      id: 3,
      img: { uri: "https://i.pinimg.com/564x/cb/7f/63/cb7f6381f26d312e6ce2142b24775b48.jpg" },
      name: "product 4"
    },
    {
      id: 4,
      img: {
        uri: "https://i.pinimg.com/564x/a9/e2/68/a9e2686bf7fee4b958a64d805d25b85f.jpg"
      },
      name: "product 5"
    }
  ]);


  const [stores, setStore] = useState([
    {
      id: 0,
      img: { uri: "https://cdn.shopify.com/s/files/1/0149/4614/0260/products/FLORENCE481_c2c7f591-9ccf-4f70-a94f-2684c6eea6d9.jpg?v=1635906736&width=400" },
      name: "shop hair",
      description: "To Mills, beauty is all about love and compassion—for ourselves and others. Her friend Liv lived that message every day in her struggle against leukemia. In honor of Liv’s memory and importance in Millie’s life, florence is proud to donate to the Olivia Hope Foundation, which continues to support Liv’s dream of finding a cure for childhood cancers."
      , products: [
        {
          name: "SKINCARE HEADBAND",
          image: { uri: "https://cdn.shopify.com/s/files/1/0149/4614/0260/products/FLORENCE-MAIN-SWATCH20_92d08122-3c83-46d5-b0aa-e840a47600ea.jpg?v=1635906590&width=400" },
          count: "2 Piece",
          rate: 3.6,
          price: "80$",
        },
        {
          name: "WHALE HAND MIRROR",
          image: { uri: "https://cdn.shopify.com/s/files/1/0149/4614/0260/products/CREME197.jpg?v=1634329626&width=400" },
          count: "2 Piece",
          rate: 3.6,
          price: "100$",
        },
      ],
    },
    {
      id: 1,
      img: { uri: "https://i.pinimg.com/564x/da/1d/ea/da1dead41bc230712e31986faf50741d.jpg" },
      name: "Makeup",
      description: "To Mills, beauty is all about love and compassion—for ourselves and others. Her friend Liv lived that message every day in her struggle against leukemia. In honor of Liv’s memory and importance in Millie’s life, florence is proud to donate to the Olivia Hope Foundation, which continues to support Liv’s dream of finding a cure for childhood cancers.."
      , products: [
        {
          name: " CREAM BLUSH",
          image: { uri: "https://cdn.shopify.com/s/files/1/0149/4614/0260/products/FLORENCE07474_StellerSabrina_1.jpg?v=1652911304&width=400" },
          count: "2 Piece",
          rate: 3.6,
          price: "100$",
        },
        {
          name: "TINT N TAME EYEBROW PENCIL",
          image: { uri: "https://cdn.shopify.com/s/files/1/0149/4614/0260/products/FLORENCE273-2700.jpg?v=1652379180&width=1350" },
          count: "2 Piece",
          rate: 3.6,
          price: "100$",
        },
      ],
    },
    {
      id: 2,
      img: { uri: "https://cdn.shopify.com/s/files/1/0149/4614/0260/products/puffybag_view2.png?v=1653620293&width=1350" },
      name: "Accessories",
      description: "We love being prepared for anything life will throw at us. Your everyday routine can be enhanced with the right tools, making your beauty routine easy and fun. From our silicone face brush to help glide on face masks to our reusable cotton rounds to help take off the day, equip yourself with all you need to shine! All florence by mills tools and accessories are designed to make life simple and care-free!."
      , products: [
        {
          name: "CROSSBODY COSMETIC BAG",
          image: { uri: "https://cdn.shopify.com/s/files/1/0149/4614/0260/products/Florence_10_18_20-179.jpg?v=1634861519&width=400" },
          count: "2 Piece",
          rate: 3.6,
          price: "100$",
        },
        {
          name: "AQUA CLOUD BAG",
          image: { uri: "https://cdn.shopify.com/s/files/1/0149/4614/0260/products/Florence_10_18_20-125copy.jpg?v=1603823450&width=400" },
          count: "2 Piece",
          rate: 3.6,
          price: "100$",
        },
      ],
    },
  ]);


  return (
    <View style={{ flex: 1, backgroundColor: "#f6f6f6" }}>
      <SpecailHeader />
      <ScrollView style={styles.view} showsVerticalScrollIndicator={false}>
        <ImageBackground
          imageStyle={{ resizeMode: "cover" }}
          style={{ flex: 1, paddingTop: 16, height: 250 }}
          source={{ uri: "https://cdn.shopify.com/s/files/1/0149/4614/0260/files/HP_Banner_1_63a3d368-ae18-4ced-b8af-a65053d8cef5.png?v=1669730133" }}
        >
        </ImageBackground>
        <View style={{ flex: 1, marginHorizontal: 16 }}>
          <Text style={styles.cat_text}>Categories</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={products}
            renderItem={({ item }) => (
              <Card item={item} />
            )}
            keyExtractor={(item, index) => index.toString()}
            ListHeadercomponents={
              <All />}

          />
        </View>
        <View style={styles.stores_container}>
          <View style={styles.stores_small}>
            <Text style={styles.stores_text}>Stores</Text>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigation.navigate("AllProducts")}>
              <Text style={styles.all_text}>View All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.sto_big}>

            {
              stores.map((item, index) => {
                return <StoreCard key={index} item={item} navigation={navigation} />
              })
            }
          </View>
        </View>
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  view: {
    flex: 1,

  },
  cat_text: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 24,
    marginBottom: 16,
  },
  stores_container: {
    flex: 1,
    marginHorizontal: 16,
    marginTop: 12
  },
  stores_small: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  stores_text: {
    fontSize: 16,
    fontWeight: "bold",

  },
  all_text: {
    fontSize: 12,
    color: "#377AFD"

  },
  sto_big: {
    marginTop: 16,
    marginBottom: 16,

  }


});
