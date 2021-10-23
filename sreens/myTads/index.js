import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen } from '../home';
import { SettingsScreen } from '../settings';
import { MeasuringNow } from '../measuringNow';

import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    switch (route.name) {
                        case ('Главная'):
                            iconName = 'home'
                            break;
                        case ('Измерить сейчас'):
                            iconName = 'ios-add-circle-sharp'
                            break;
                        case ('Настройки'):
                            iconName = 'settings'
                            break;
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Главная" component={HomeScreen} />
            <Tab.Screen name="Измерить сейчас" component={MeasuringNow} />
            <Tab.Screen name="Настройки" component={SettingsScreen} />
        </Tab.Navigator>
    );
}

export { MyTabs }