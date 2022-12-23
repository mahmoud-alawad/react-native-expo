import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import SpecailInput from "../components/input";
import SpecailBtn from '../components/button';


const App = ({ navigation, route }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [counrty, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const onClick = () => {
    console.log(email, password, phone, counrty, name)
    setEmail("")
    setPassword("")
    setPhone("")
    setCountry("")
    setName("")

    navigation.navigate('bottomTabs')
  }

  const onNav = () => {
    navigation.navigate("Login Screen")

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

      <Text style={styles.title}> Sign Up </Text>
      <View style={styles.textbox}>
        <Text style={styles.label}> userName</Text>
        <SpecailInput
          placeholder="username"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}> Email</Text>
        <SpecailInput
          keyboardType='email-address'
          placeholder="email"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.label}> Password</Text>
        <SpecailInput
          secureTextEntry={true}
          placeholder="password"
          value={password}
          onChangeText={setPassword}
        />
        <Text style={styles.label}> Phone number</Text>
        <SpecailInput
          keyboardType='number-pad'
          placeholder="phone number"
          value={phone}
          onChangeText={setPhone}
        />
        <Text style={styles.label}> country name</Text>
        <SpecailInput
          placeholder="counrty name"
          value={counrty}
          onChangeText={setCountry}
        />

      </View>

      <Text style={styles.forgetpass}>Forget Password?</Text>
      <SpecailBtn
        onPress={onClick}
      >
        <Text style={{ color: 'white', alignSelf: "center" }}>Sign Up</Text>
      </SpecailBtn>
      <View style={{ marginTop: 10, flexDirection: "row", justifyContent: "flex-start", marginBottom: 20 }}>
        <Text style={styles.action}>Already have an account ?</Text>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={onNav}>
          <Text style={styles.signup}>Log In</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
};


const styles = StyleSheet.create({
  view: {
    flex: 4,
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
    fontSize: 14,
    marginTop: 20,
    fontWeight: "bold"

  },
  icon: {
    marginTop: -30,
    marginHorizontal: 300

  },
  forgetpass: {
    color: '#9649E2',
    fontSize: 10,
    paddingTop: 10

  },
  login: {
    color: '#9649E2',
    fontSize: 12,
    paddingTop: 10,
    textAlign: 'center'

  },
  action: {
    color: 'black',
    fontWeight: "bold",
    fontSize: 10
  },
  signup: {
    color: '#9649E2',
    fontSize: 12,
    marginLeft: 8
  }
});

export default App;