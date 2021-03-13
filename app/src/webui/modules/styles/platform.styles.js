import { Platform, StatusBar } from 'react-native';

const statusBarHeight = StatusBar.currentHeight;

export const safeAreaViewCheck = Platform.OS === 'android' && { marginTop: statusBarHeight };
