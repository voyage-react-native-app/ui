import React from 'react';
import { View, useWindowDimensions, SafeAreaView } from 'react-native';

import BigButton from '../../components/BigButton/BigButton';
import Title from '../../components/Title/Title';
import CustomText from '../../components/CustomText/CustomText';
import PlaceTypeContainer from '../../containers/componentsContainers/PlaceTypeContainer';
import { mapSelectedPlaceTypesToKeys, mapTypesOfPlacesToIconNames, typesOfPlaces } from '../../modules/util/meta.js';
import { colors } from '../../modules/styles/colors.styles';
import { styles } from './PlacesTypesScreen.styles';

const PlacesTypesScreen = ({
    selectedPlaceTypes,
    submitSelectedPlaceTypes
}) => {
    const isSelectedPlacesTypesEmpty = selectedPlaceTypes.length === 0;

    const setSelectedPlaceTypes = () => {
        const selectedPlaceTypeKeys = mapSelectedPlaceTypesToKeys(selectedPlaceTypes);
        submitSelectedPlaceTypes(selectedPlaceTypeKeys);
    }

    return (
        <SafeAreaView contentContainerStyle={{ flex: 1 }}>
            <View style={[styles.placeTypesScreenContainer, { height: useWindowDimensions().height }]}>
                <View style={styles.titleContainer}>
                    <Title>What kind of places are you interested in exploring?</Title>
                    <CustomText>Pick your most interesting places</CustomText>
                </View>
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
                <View style={styles.submitButtonWrapper}>
                    <BigButton
                        backgroundColor={colors.blue600}
                        fontColor={colors.white}
                        buttonText={'Continue'}
                        disabled={isSelectedPlacesTypesEmpty}
                        onPress={setSelectedPlaceTypes}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default PlacesTypesScreen;
