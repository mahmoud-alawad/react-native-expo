import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native'

const StoreCard = (props) =>{
    const { item } = props
    
    return(
      <View style={{flex:1}}>
        <View style={styles.cont}>
          {/* <Image source={item.img} style={styles.img} /> */}
          <View style={styles.box}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.desc}>{item.description}</Text>
          </View>
      </View>
      </View>
    )
}


const styles = StyleSheet.create({
    cont: {
      width: "100%",
      marginRight: 20,
      paddingBottom:16
    },
    box: {
      height: 150,
      backgroundColor: "white",
      justifyContent: "space-between",
      padding: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },
    img: {
      width: "100%",
      height: 200,
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
    },
    title: {
      fontWeight: "bold",
      fontSize: 14,
    },
    desc:{
        fontSize:12,
        paddingTop:8
    }
  });
  export default StoreCard;