import React, { useEffect } from 'react';
import { View, useWindowDimensions, SafeAreaView, BackHandler, Alert } from 'react-native';

import BigButton from '../../components/BigButton/BigButton';
import Title from '../../components/Title/Title';
import CustomText from '../../components/CustomText/CustomText';
import PlaceTypeContainer from '../../containers/componentsContainers/PlaceTypeContainer';
import { mapSelectedPlaceTypesToKeys, mapTypesOfPlacesToIconNames, typesOfPlaces } from '../../modules/util/meta.js';
import { colors } from '../../modules/styles/colors.styles';
import { styles } from './PlacesTypesScreen.styles';
import { safeAreaViewCheck } from '../../modules/styles/platform.styles';

const PlacesTypesScreen = ({
    selectedPlaceTypes,
    submitSelectedPlaceTypes
}) => {
    const isSelectedPlacesTypesEmpty = selectedPlaceTypes.length === 0;

    const setSelectedPlaceTypes = () => {
        const selectedPlaceTypeKeys = mapSelectedPlaceTypesToKeys(selectedPlaceTypes);
        submitSelectedPlaceTypes(selectedPlaceTypeKeys);
    }

    useEffect(() => {
        const backAction = () => {
            Alert.alert(null, "Are you sure you want to exit the app?", [
                {
                    text: "Cancel",
                    onPress: () => null,
                    style: "cancel"
                },
                { text: "YES", onPress: () => BackHandler.exitApp() }
            ]);
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, []);

    return (
        <SafeAreaView contentContainerStyle={{ flex: 1 }}>
            <View style={[styles.placeTypesScreenContainer,
                { height: useWindowDimensions().height }, safeAreaViewCheck]}
            >
                <Title>What kind of places are you interested in exploring?</Title>
                <CustomText style={{marginTop: 10}}>Pick your most interesting places</CustomText>
                <View style={styles.placeTypesContainer}>
                    {Object.keys(typesOfPlaces).map((placeKey, index) => {
                        const placeTypeName = typesOfPlaces[placeKey];
                        return <PlaceTypeContainer
                            placeTypeName={placeTypeName}
                            placeTypeIconName={mapTypesOfPlacesToIconNames(placeTypeName)}
                            key={placeKey + index}
                        />
                    })}
                </View>
                <BigButton
                    backgroundColor={colors.blue}
                    fontColor={colors.white}
                    buttonText={'Continue'}
                    disabled={isSelectedPlacesTypesEmpty}
                    onPress={setSelectedPlaceTypes}
                    style={{marginBottom: 40}}
                />
            </View>
        </SafeAreaView>
    );
};

export default PlacesTypesScreen;
