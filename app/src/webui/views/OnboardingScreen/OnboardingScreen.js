import React, { useState, useRef } from 'react';
import { View, useWindowDimensions, Animated, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import OnboardingSlideHeader from '../../components/OnboardingSlide/OnboardingSlideHeader/OnboardingSlideHeader';
import OnboardingSlideFooter from '../../components/OnboardingSlide/OnboardingSlideFooter/OnboardingSlideFooter';
import Paginator from '../../components/Paginator/Paginator';
import ChooseSvg from '../../assets/images/svg/choose_onboarding.svg';
import DiscoverSvg from '../../assets/images/svg/discover_onboarding.svg';
import EnjoySvg from '../../assets/images/svg/enjoy_onboarding.svg';
import { styles } from './OnboardingScreen.styles';
import { colors } from '../../modules/styles/colors.styles';

const onboardingData = [
    {
        text: {
            label: 'Choose',
            subtitle: 'Pack Your Bag',
            description: 'A great variety of local places is waiting for you.'
        },
        backgroundColor: colors.blue,
        picture: ChooseSvg
    },
    {
        text: {
            label: 'Discover',
            subtitle: 'Explore the world around you',
            description: 'Discover each and every one of them.'
        },
        backgroundColor: colors.blue,
        picture: DiscoverSvg,
        right: true
    },
    {
        text: {
            label: 'Enjoy',
            subtitle: 'Enjoy your trip',
            description: 'Don\'t forget to take photos and share them with the world.'
        },
        backgroundColor: colors.blue,
        picture: EnjoySvg
    }
];

const OnboardingScreen = ({

}) => {
    const navigation = useNavigation();

    const [ currentSlideIndex, setCurrentSlideIndex ] = useState(0);

    const width = useWindowDimensions().width;

    const height = useWindowDimensions().height;

    const scrollX = useRef(new Animated.Value(0)).current;

    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentSlideIndex(viewableItems[0].index);
    }).current;

    let slidesRef = useRef();

    const renderItem = ({ item, index }) => (
        <OnboardingSlideHeader
            label={item.text.label}
            backgroundColor={item.backgroundColor}
            Picture={item.picture}
            textRight={item.right}
            width={width}
            height={height * 0.6}
            key={item + index}
        />
    );

    const scrollTo = () => {
        if(slidesRef && currentSlideIndex < onboardingData.length - 1) {
            slidesRef.current.scrollToIndex({ index: currentSlideIndex + 1, animated: true });
        } else if(currentSlideIndex === onboardingData.length - 1) {
            navigation.navigate('Signup');
        }
    };

    return (
        <>
            <StatusBar
                barStyle={'light-content'}
                translucent
                backgroundColor={'transparent'}
            />
            <Animated.FlatList
                data={onboardingData}
                horizontal
                pagingEnabled
                keyExtractor={(_, index) => index.toString()}
                showsHorizontalScrollIndicator={false}
                decelerationRate={'fast'}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                    useNativeDriver: false
                })}
                renderItem={renderItem}
                onViewableItemsChanged={viewableItemsChanged}
                ref={slidesRef}
            />
            <View style={styles.paginatorWrapper}>
                <Paginator
                    onboardingData={onboardingData}
                    scrollX={scrollX}
                />
            </View>
            <Animated.View
                style={[styles.footerWrapper, { width: width * onboardingData.length,
                    transform: [{ translateX: currentSlideIndex * -width }]}]}
            >
                {onboardingData.map((item, index) => (
                    <OnboardingSlideFooter
                        width={width}
                        height={height * 0.4}
                        subtitle={item.text.subtitle}
                        description={item.text.description}
                        lastSlide={currentSlideIndex === onboardingData.length - 1}
                        onNextButtonPress={scrollTo}
                        key={item + index}
                    />
                ))}
            </Animated.View>
        </>
    );
};

export default OnboardingScreen;
