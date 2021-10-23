import React from "react";
import { KeycloakProvider, useKeycloak } from "expo-keycloak";
import AppConfig from "./app.json";
import { Auth } from "./sreens/auth";

export default function App() {
  const keycloakConfiguration = {
    clientId: 'android',
    realm: 'WearableThermometer',
    url: 'http://10.0.2.2:8080/auth', // This is usually an url ending with /auth
    scheme: AppConfig.expo.scheme,
  };

  return (
    <KeycloakProvider {...keycloakConfiguration}>
        <Auth />
    </KeycloakProvider>
  );
}

