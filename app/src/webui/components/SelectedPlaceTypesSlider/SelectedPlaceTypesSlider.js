import React from 'react';
import { ScrollView } from 'react-native';

import Pillar from '../Pillar/Pillar';
import { styles} from './SelectedPlaceTypesSlider.styles';
import { mapTypesOfPlacesToIconNames } from '../../modules/util/meta';

const SelectedPlaceTypesSlider = ({
    selectedPlaceTypes
}) => {
    return (
        <ScrollView
            contentContainerStyle={styles.sliderContainer}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            {selectedPlaceTypes.map(placeTypeName => (
                <Pillar
                    key={placeTypeName}
                    iconName={mapTypesOfPlacesToIconNames(placeTypeName)}
                >
                    {placeTypeName}
                </Pillar>
            ))

            }
        </ScrollView>
    );
};

export default SelectedPlaceTypesSlider;
