import React from 'react';
import { View, ImageBackground, Text, ScrollView } from 'react-native';

import ContentLoader from 'react-native-easy-content-loader';

import ExpandButton from '../ExpandButton/ExpandButton';
import { styles } from './Place.styles';
import Title from '../Title/Title';
import { colors } from '../../modules/styles/colors.styles';
import PlaceRate from '../PlaceRate/PlaceRate';

const Place = ({
    places,
    imageUri,
    placeName,
    rate,
    placeTypes
}) => {
    if(places[0] === '') {
        return (
            <ContentLoader
                active
                pRows={3}
                pWidth={['100%', '80%', '50%']}
                pHeight={[190, 10, 10]}
                title={false}
                containerStyles={styles.contentLoaderWrapper}
            />
        );
    } else {
        return (
            <View style={styles.placeContainer}>
                <ImageBackground
                    source={{uri: 'https://reactjs.org/logo-og.png'}}
                    style={styles.placeImageSize}
                    imageStyle={styles.placeImage}
                >
                    <ExpandButton
                        position={{right: 15, bottom: 15}}
                    />
                </ImageBackground>
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
    }
};

export default Place;
