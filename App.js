import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets  } from '@react-navigation/stack';

import LaunchScreen from './app/src/webui/views/LaunchScreen/LaunchScreen';
import LoaderContainer from './app/src/webui/containers/componentsContainers/LoaderContainer';
import SignUpScreen from './app/src/webui/views/SignUpScreen/SignUpScreen';
import PlacesTypesScreenContainer from './app/src/webui/containers/screensContainers/PlacesTypesScreenContainer';
import HomeScreenContainer from './app/src/webui/containers/screensContainers/HomeScreenContainer';
import store from './app/src/webui/redux/store';
import { navigationRef } from './app/src/webui/views/RootNavigation';
import { colors } from './app/src/webui/modules/styles/colors.styles';
import OnboardingScreen from './app/src/webui/views/OnboardingScreen/OnboardingScreen';

const Stack = createStackNavigator();

// define default app background color
const navTheme = DefaultTheme;
navTheme.colors.background = '#FFFFFF';

const App: () => React$Node = () => {
  return (
    <View style={styles.root}>
        <Provider store={store}>
            <NavigationContainer
                theme={navTheme}
                ref={navigationRef}
            >
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen
                        name="Onboarding"
                        component={OnboardingScreen}
                        options={{
                            ...TransitionPresets.RevealFromBottomAndroid
                        }}
                    />
                    <Stack.Screen
                        name="Signup"
                        component={SignUpScreen}
                        options={{
                            ...TransitionPresets.SlideFromRightIOS
                        }}
                    />
                    <Stack.Screen
                        name="Places Types"
                        component={PlacesTypesScreenContainer}
                        options={{
                            ...TransitionPresets.SlideFromRightIOS
                        }}
                    />
                    <Stack.Screen
                        name="Home"
                        component={HomeScreenContainer}
                        options={{
                            ...TransitionPresets.RevealFromBottomAndroid
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
            <LoaderContainer/>
        </Provider>
    </View>
  );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: colors.white
    }
});

export default App;
