import React, { useEffect, useState } from 'react';
import {View, ScrollView, SafeAreaView, StatusBar} from 'react-native';

import HeaderContainer from '../../containers/componentsContainers/HeaderContainer';
import SelectedPlaceTypesSliderContainer from '../../containers/componentsContainers/SelectedPlaceTypesSliderContainer';
import PlaceContainer from '../../containers/componentsContainers/PlaceContainer';
import { getLocationPermission } from '../../modules/util/permissions';
import { getLocationCoords } from '../../modules/util/location';
import { styles } from './HomeScreen.styles';
import { typesOfPlaces } from '../../modules/util/meta';
import ContentLoader from 'react-native-easy-content-loader';

const HomeScreen = ({
    getLocation,
    fetchPlaces,
    places
}) => {
    const [ coords, setCoords ] = useState({});

    const [ loading, setLoading ]  = useState(true);

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
        if(Object.keys(coords).length) {
            fetchPlaces(coords);
        }
    }, [coords]);

    useEffect(() => {
        if(places.length !== 0) {
            setLoading(false);
        }
    }, [places]);

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
                {loading ?
                    [...Array(10).fill('')].map((_, index) => (
                        <ContentLoader
                            active
                            pRows={3}
                            pWidth={['100%', '80%', '50%']}
                            pHeight={[190, 10, 10]}
                            title={false}
                            containerStyles={styles.contentLoaderWrapper}
                            key={index.toString()}
                        />
                    ))
                    :
                    places.map((place, index) => (
                        <PlaceContainer
                            placeName={place.name}
                            rate={place.rate}
                            placeTypes={place.kinds && getPlaceTypes(place.kinds)}
                            key={place+index}
                        />
                    ))
                }
            </ScrollView>
        </SafeAreaView>
    )
};

export default HomeScreen;
