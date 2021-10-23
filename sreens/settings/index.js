import { useKeycloak } from 'expo-keycloak';
import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { Buffer } from "buffer"
import JWT from 'expo-jwt';


function SettingsScreen() {
  const {logout, token} = useKeycloak();
  const parts = token.split('.').map(part => Buffer.from(part.replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString());
  const payload = JSON.parse(parts[1]);
  console.log('JWT payload', payload);
  
  
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{payload.name}</Text>
        <Button onPress={logout} title={'Logout'}/>
        
      </View>
    );
  }

  export {SettingsScreen}