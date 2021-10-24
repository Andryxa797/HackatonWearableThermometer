import React from "react";
import { Button, StyleSheet, ActivityIndicator, TextInput, View, Image, TouchableOpacity, Text, } from "react-native";
import { useKeycloak } from "expo-keycloak";
import { MyTabs } from "../myTads";
import { NavigationContainer } from "@react-navigation/native";
import logo from './../../assets/tag1.jpg'


export const Auth = () => {
    const { ready, login, isLoggedIn, token, } = useKeycloak();
    if (!ready) return <ActivityIndicator />;
    if (!isLoggedIn)
        return (
            <View style={{ margin: 24 }}>
                <Image style={styles.logo} source={logo} />
                {/* <Button style={styles.button} onPress={login} title="Login" /> */}
                <TouchableOpacity onPress={login}>
                    <View
                        style={{
                            backgroundColor: "tomato",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 15,
                            padding: 15,
                            marginTop: 70
                        }}
                    >
                        <Text
                            style={{
                                color: "#fff",
                                justifyContent: "center",
                                alignItems: "flex-start",
                            }}
                        >
                            {/* <Ionicons name="log-out" color="red" size={20} /> */}
                            &nbsp; Войти
                        </Text>
                    </View>
                </TouchableOpacity>
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
    logo: {
        width: 350,
        height: 350,
        marginTop: 50
    },
    button: {
        marginTop: 100,
        backgroundColor: 'tomato',
    }
});