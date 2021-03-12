import React, { useEffect, useState } from 'react';
import {View, ScrollView, SafeAreaView, StatusBar} from 'react-native';

import HeaderContainer from '../../containers/componentsContainers/HeaderContainer';
import SelectedPlaceTypesSliderContainer from '../../containers/componentsContainers/SelectedPlaceTypesSliderContainer';
import Place from '../../components/Place/Place';
import { getLocationPermission } from '../../modules/util/permissions';
import { getLocationCoords } from '../../modules/util/location';
import { styles } from './HomeScreen.styles';
import { typesOfPlaces } from '../../modules/util/meta';

const HomeScreen = ({
    location,
    getLocation,
    fetchPlaces,
    places
}) => {
    const [ coords, setCoords ] = useState({});

    const getPlaceTypes = keyPlaceTypes => {
        const fetchedPlaceTypes = keyPlaceTypes.split(',');
        const resultingPlaceTypes = [];

        fetchedPlaceTypes.forEach(fetchedPlaceType => {
            if(typesOfPlaces.hasOwnProperty(fetchedPlaceType)) {
                resultingPlaceTypes.push(typesOfPlaces[fetchedPlaceType]);
            }
        });

        return resultingPlaceTypes;
    }

    useEffect( () => {
        getLocationPermission().then(permission => {
            if(permission) {
                getLocationCoords(setCoords, getLocation, fetchPlaces);
            }
        });
    }, [coords]);

    useEffect(() => {
        if(coords) {
            fetchPlaces(coords);
        }
    }, [coords]);

    return (
        <SafeAreaView contentContainerStyle={{flex: 1}}>
            <StatusBar
                barStyle={'dark-content'}
                translucent={false}
                backgroundColor={'transparent'}
            />
            <View style={styles.homeScreenHeaderContainer}>
                <HeaderContainer/>
                <SelectedPlaceTypesSliderContainer/>
            </View>
            <ScrollView
                contentContainerStyle={styles.placesContainer}
                showsVerticalScrollIndicator={false}
            >
                {places.length > 0 && places.map((place, index) => (
                    <Place
                        placeName={place.name}
                        rate={place.rate}
                        placeTypes={getPlaceTypes(place.kinds)}
                        key={place+index}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    )
};

export default HomeScreen;
