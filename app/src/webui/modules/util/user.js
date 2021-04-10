import AsyncStorage from '@react-native-async-storage/async-storage';

export const setData = async (key, value) => {
    try {
        await AsyncStorage.setItem(`@${key}`, JSON.stringify(value));
        return true;
    } catch (err) {
        console.log('Error saving to local storage: ' + err);
        return undefined;
    }
};

export const getData = async key => {
    try {
        const data = await AsyncStorage.getItem(`@${key}`);
        return JSON.parse(data);
    } catch (err) {
        console.log('Error saving to local storage: ' + err);
        return undefined;
    }
};
