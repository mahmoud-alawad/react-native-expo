import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ImageBackground,
} from "react-native";
import BackBtn from'../components/BackBtn'


const AllProducts = ({route, navigation}) => {
    
  const {store_name, products} = route.params




  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        imageStyle={{ resizeMode: "cover" }}
        style={{ flex: 1, paddingTop: 60 }}
        source={{uri:"https://i.pinimg.com/564x/97/a3/d6/97a3d66ffdacaad2609714ae47e52eb6.jpg"}}
      >
        <BackBtn />
        <FlatList
            data={products}
            style={{ marginLeft: 10 }}
            renderItem={({ item }) => (
              <TouchableOpacity 
            
              >
                  <Text>{item.name}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
      </ImageBackground>
    </View>
  );
};
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
    resizeMode: "cover",
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
export default AllProducts;
