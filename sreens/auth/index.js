import React from "react";
import { Button, StyleSheet, ActivityIndicator, TextInput, View, } from "react-native";
import { useKeycloak } from "expo-keycloak";
import { MyTabs } from "../myTads";
import { NavigationContainer } from "@react-navigation/native";


export const Auth = () => {
    const { ready, login, isLoggedIn, token, } = useKeycloak();
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
            <MyTabs />
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