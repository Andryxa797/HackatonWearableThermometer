import React from "react";
import { KeycloakProvider, useKeycloak } from "expo-keycloak";
import AppConfig from "./app.json";
import { Auth } from "./sreens/auth";

export const DOMIN = '192.168.0.102:8080'

export default function App() {
  const keycloakConfiguration = {
    clientId: 'android',
    realm: 'WearableThermometer',
    url: `http://${DOMIN}/auth`,
    scheme: AppConfig.expo.scheme,
  };

  return (
    <KeycloakProvider {...keycloakConfiguration}>
        <Auth />
    </KeycloakProvider>
  );
}

