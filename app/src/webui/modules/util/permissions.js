import { PermissionsAndroid, Platform } from 'react-native';

export const getLocationPermission = async () => {
    try {
        if(Platform.OS === 'android') {
            const granted =  await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
            return granted === PermissionsAndroid.RESULTS.GRANTED;
        } else {
            return true;
        }
    } catch (err) {
        console.warn(err);
    }
};
