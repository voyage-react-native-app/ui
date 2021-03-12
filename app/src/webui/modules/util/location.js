import Geolocation from "react-native-geolocation-service";

export const getLocationCoords = (setCoordsCallbackFn, getLocationCallbackFn) => {
    Geolocation.watchPosition(
        (position) => {
            setCoordsCallbackFn(position.coords);
            getLocationCallbackFn(position.coords);
        },
        (error) => {
            console.log(error.code, error.message);
        },
        { enableHighAccuracy: true }
    )
};
