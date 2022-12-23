import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
} from "react-native";
import Category from "../components/All_Category";
import SpecailHeader from "../components/header";


export default ({ route }) => {

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
      img: { uri: "https://i.pinimg.com/564x/a6/72/3b/a6723bdc6f208141d854b9c0f79104ed.jpg" },
      name: "product 2"
    },
    {
      id: 2,
      img: { uri: "https://i.pinimg.com/564x/7f/ab/35/7fab35c5307d91d33408fd3dddfd74af.jpg" },
      name: "product 3"
    },
    {
      id: 3,
      img: { uri: "https://i.pinimg.com/564x/d6/7f/d4/d67fd40b19636eac0b2216a14a6d036c.jpg" },
      name: "product 4"
    },
    {
      id: 4,
      img: {
        uri: "https://i.pinimg.com/564x/c6/65/4f/c6654fadd6f317f9b922842237cff50b.jpg"
      },
      name: "product 5"
    },
    {
      id: 5,
      img: {
        uri: "https://i.pinimg.com/564x/fc/bb/7b/fcbb7bbac6b26ad599832e1616931c96.jpg"
      },
      name: "product 6"
    },
    {
      id: 6,
      img: {
        uri: "https://i.pinimg.com/564x/8c/6d/08/8c6d08a050f88547640eefcf22868779.jpg"
      },
      name: "product 7"

    }

  ]);

  return (
    <View style={{ flex: 1, backgroundColor: "#f6f6f6" }}>
      <SpecailHeader />
      <View style={{ flex: 1, marginHorizontal: 16 }}>

        <FlatList
          numColumns={3}
          showsHorizontalScrollIndicator={false}
          data={products}
          renderItem={({ item }) => (
            <Category item={item} />
          )}
          keyExtractor={(item, index) => index.toString()}

        />
      </View>

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



});




