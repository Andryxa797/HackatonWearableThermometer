import * as React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
// import { Image } from "antd-mobile";
import photo from "../../assets/photo.jpg";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useKeycloak } from "expo-keycloak";
import { Button } from "react-native";
import { Buffer } from "buffer";
import JWT from "expo-jwt";

function SettingsScreen() {
  const RCTNetworking = require("react-native/Libraries/Network/RCTNetworking");
  RCTNetworking.clearCookies((result) => {
    console.log(result); //true if successfully cleared
  });

  const { logout, token } = useKeycloak();
  const parts = token
    .split(".")
    .map((part) =>
      Buffer.from(
        part.replace(/-/g, "+").replace(/_/g, "/"),
        "base64"
      ).toString()
    );
  const payload = JSON.parse(parts[1]);
  // console.log("JWT payload", payload);
  console.log(logout);

  // const logOutHandler = () => {
  //   // RCTNetworking.clearCookies(() => {});

  //   return logout;
  // };

  return (
    <View style={styles.container}>
      {/* <Text></Text> */}
      {/* <Button onPress={logout} title={"Logout"} /> */}
      <View style={styles.image}>
        <Image source={photo} style={styles.stretch} />
      </View>
      <View style={styles.name}>
        <Text style={styles.text}>{payload.name}</Text>
      </View>
      <View style={styles.addDevice}>
        <Text style={styles.text}>Мои устройства</Text>
      </View>
      <TouchableOpacity onPress={() => {}}>
        <View
          style={{
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 15,
            padding: 15,
          }}
        >
          <Text style={{ color: "tomato" }}>
            <Ionicons name="add" color="00FF00" />
            &nbsp; Добавить устройство
          </Text>
        </View>
      </TouchableOpacity>

      <View style={styles.logout}>
        <TouchableOpacity onPress={logout}>
          <View
            style={{
              backgroundColor: "#fff",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 15,
              padding: 15,
            }}
          >
            <Text
              style={{
                color: "red",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <Ionicons name="log-out" color="red" size={20} />
              &nbsp; Выйти
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
  image: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
  },
  addDevice: {
    marginTop: 30,
    marginLeft: 25,
    marginBottom: 10,
  },
  stretch: {
    width: 100,
    height: 100,
    resizeMode: "stretch",
    borderRadius: 10000,
  },
  text: {
    fontSize: 17,
    color: "black",
  },
  name: {
    marginTop: 105,
    justifyContent: "center",
    alignItems: "center",
  },
  logout: {
    marginTop: 370,
  },
});

export { SettingsScreen };
