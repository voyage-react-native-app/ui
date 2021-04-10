import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets  } from '@react-navigation/stack';

import SplashScreen from 'react-native-splash-screen';
import { setData, getData } from './app/src/webui/modules/util/user';

import LoaderContainer from './app/src/webui/containers/componentsContainers/LoaderContainer';
import SignUpScreenContainer from './app/src/webui/containers/screensContainers/SignUpScreenContainer';
import PlacesTypesScreenContainer from './app/src/webui/containers/screensContainers/PlacesTypesScreenContainer';
import HomeScreenContainer from './app/src/webui/containers/screensContainers/HomeScreenContainer';
import OnboardingScreen from './app/src/webui/views/OnboardingScreen/OnboardingScreen';
import store from './app/src/webui/redux/store';
import * as RootNavigation from './app/src/webui/views/RootNavigation';
import { navigationRef } from './app/src/webui/views/RootNavigation';
import { colors } from './app/src/webui/modules/styles/colors.styles';

const Stack = createStackNavigator();

// define default app background color
const navTheme = DefaultTheme;
navTheme.colors.background = '#FFFFFF';

const App: () => React$Node = () => {
    const checkUser = async () => {
        const user = await getData('@user');
        if(user !== null) {
            return user;
        }

        return null;
    }

    useEffect(() => {
        checkUser().then(user => {
            SplashScreen.hide();
            if(user) {
                RootNavigation.navigate('Home');
            } else {
                RootNavigation.navigate('Onboarding');
            }
        });
    }, []);

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
                                ...TransitionPresets.SlideFromRightIOS
                            }}
                        />
                        <Stack.Screen
                            name="Signup"
                            component={SignUpScreenContainer}
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
