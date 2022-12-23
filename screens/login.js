import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import SpecailInput from "../components/input";
import SpecailBtn from '../components/button';

export default ({ navigation, route }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onClick = () => {
    console.log(email, password)
    setEmail("")
    setPassword("")
    navigation.navigate('bottomTabs')

  }
  const onNav = () => {
    navigation.navigate("Signup Screen")

  }
  return (
    <ScrollView style={styles.view} showsVerticalScrollIndicator={false}>
      <View style={styles.logo}>
        <Image
          style={styles.img}
          source={require("../assets/logo1.png")}
        />
        <Text style={styles.appname}>STORE</Text>
      </View>

      <Text style={styles.title}> login page</Text>
      <View style={styles.textbox}>
        <Text style={styles.label}> userName</Text>
        <SpecailInput
          keyboardType='email-address'
          placeholder="username"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.label}> Password</Text>
        <SpecailInput
          secureTextEntry={true}
          value={password}
          placeholder="password"
          onChangeText={setPassword}
        />
        <Feather style={styles.icon} name="eye-off" />
      </View>

      <Text style={styles.forgetpass}>Forget Password?</Text>
      <SpecailBtn
        onPress={onClick}
      >
        <Text style={{ color: 'white', alignSelf: "center" }}>Sign In</Text>
      </SpecailBtn>
      <View style={{ marginTop: 10, flexDirection: "row", justifyContent: "flex-start", marginBottom: 20 }}>
        <Text style={styles.action}>Dont have an account ?</Text>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={onNav}>
          <Text style={styles.signup}>sign up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginHorizontal: 16,

  },
  img: {
    position: "absolute",
    top: 0,
    width: 24,
    height: 24,

  },
  appname: {
    fontWeight: "bold",
    fontSize: 12,
    marginLeft: 30,
    paddingTop: 5
  },
  logo: {
    flexDirection: "row",
    position: "absolute",
    top: 50,
    height: 30,
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 100
  },
  textbox: {
    flex: 1,

    marginTop: 30

  },
  label: {
    fontSize: 12,
    marginTop: 20,
    fontWeight: "bold"

  },
  icon: {
    marginTop: -30,
    marginHorizontal: 340

  },
  forgetpass: {
    color: '#9649E2',
    fontSize: 10,
    paddingTop: 20

  },
  login: {
    color: '#9649E2',
    fontSize: 12,
    paddingTop: 10,
    textAlign: 'center'

  },
  action: {
    color: 'black',

    fontSize: 12
  },
  signup: {
    color: '#9649E2',
    fontSize: 12,
    marginLeft: 8
  }
});

