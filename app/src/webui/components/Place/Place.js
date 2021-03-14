import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import ExpandButton from '../ExpandButton/ExpandButton';
import Title from '../Title/Title';
import PlaceRate from '../PlaceRate/PlaceRate';
import ProgressiveImage from '../ProgressiveImage/ProgressiveImage';
import { styles } from './Place.styles';
import { colors } from '../../modules/styles/colors.styles';

const Place = ({
    imageUri,
    placeName,
    rate,
    placeTypes
}) => {
    return (
        <View style={styles.placeContainer}>
            <View style={styles.placeImageWrapper}>
                <ProgressiveImage
                    defaultImageSource={require('../../assets/images/png/default-image-loader.png')}
                    imageSource={{ uri: 'https://reactjs.org/logo-og.png' }}
                    style={styles.placeImage}
                    resizeMode={'cover'}
                />
                <ExpandButton
                    position={{right: 15, bottom: 15}}
                />
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.titleAndRateWrapper}>
                    <Title
                        titleFontSize={16}
                        titleColor={colors.gray900}
                    >
                        {placeName}
                    </Title>
                    <PlaceRate
                        rate={rate}
                        absolutePosition={true}
                        top={2}
                        right={2}
                    />
                </View>
                <ScrollView
                    contentContainerStyle={styles.placeTypesIconsListWrapper}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {placeTypes.map((placeTypeName, index) => {
                        return <View
                            style={styles.placeTypeIconWrapper}
                            key={placeTypeName + index}
                        >
                            <Text style={styles.placeTypeName}>{placeTypeName}</Text>
                            {index < (placeTypes.length - 1) &&
                            <Text style={styles.bullet}>{'\u2B24'}</Text>
                            }
                        </View>
                    })}
                </ScrollView>
            </View>
        </View>
    );
};

export default Place;
