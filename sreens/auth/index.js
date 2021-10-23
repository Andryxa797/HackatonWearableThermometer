import React from "react";
import {
    Text,
    View,
    Button,
    StyleSheet,
    ActivityIndicator,
    TextInput,
} from "react-native";
import { KeycloakProvider, useKeycloak } from "expo-keycloak";
import AppConfig from "./../../app.json";
import { MyTabs } from "../myTads";
import { NavigationContainer } from "@react-navigation/native";

export const Auth = () => {
    const {
        ready, // If the discovery is already fetched and ready to prompt authentication flow
        login, // The login function - opens the browser
        isLoggedIn, // Helper boolean to use e.g. in your components down the tree
        token, // Access token, if available
        logout, // The logout function - Logs the user out
    } = useKeycloak();

    if (!ready) return <ActivityIndicator />;

    if (!isLoggedIn)
        return (
            <View style={{ margin: 24 }}>
                <Button onPress={login} title="Login" />
                <TextInput value={token}></TextInput>
            </View>
        );

    return (
        <NavigationContainer>
          <MyTabs/>
      </NavigationContainer>
    );
  };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

  //   <View style={{ margin: 24 }}>
        {/* <Text style={{ fontSize: 17, marginBottom: 24 }}>Logged in!</Text>
        <Text>Your Access Token</Text>
        <TextInput value={token}></TextInput>
        <Button onPress={logout} title={"Logout"} style={{ marginTop: 24 }} /> */}
        // <View>
        {/* <MyTabs /> */}
{/* </View> */}
    {/* </View> */ }