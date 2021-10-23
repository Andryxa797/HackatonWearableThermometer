import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MyTabs } from './sreens/myTads';
import { Font } from 'expo';
import { Provider } from '@ant-design/react-native';
import AppLoading from 'expo-app-loading';
// import { Provider } from 'react-redux';


// export default function App() {
//   return (
//     <NavigationContainer>
//       <MyTabs />
//     </NavigationContainer>
//   );
// }

export default class App extends React.Component {
  state = {
    theme: null,
    currentTheme: null,
    isReady: false,
  };
  changeTheme = (theme, currentTheme) => {
    this.setState({ theme, currentTheme });
  };
  async componentDidMount() {
    this.setState({ isReady: true });
  }
  render() {
    const { theme, currentTheme, isReady } = this.state;
    if (!isReady) {
      return <AppLoading />;
    }
    return (
      <Provider theme={theme}>
        <NavigationContainer>
          <MyTabs />
        </NavigationContainer>
      </Provider>
    );
  }
}
