import React, { useState } from 'react';
import { Animated } from 'react-native';

import { styles } from './ProgressiveImage.styles.';

const ProgressiveImage = ({
    defaultImageSource,
    imageSource,
    style,
    resizeMode
}) => {
    const [ defaultImageAnimated ] = useState(new Animated.Value(0));

    const [ imageAnimated ] = useState(new Animated.Value(0));

    const handleAnimated = imageState => {
        Animated.timing(imageState, {
            toValue: 1,
            useNativeDriver: true
        }).start();
    };

    return (
        <>
            <Animated.Image
                source={defaultImageSource}
                style={[style, { opacity: defaultImageAnimated }]}
                onLoad={() => handleAnimated(defaultImageAnimated)}
                blurRadius={1}
                resizeMode={resizeMode}
            />
            <Animated.Image
                source={imageSource}
                style={[style, { opacity: imageAnimated }, styles.imageOverlay]}
                onLoad={() => handleAnimated(imageAnimated)}
                resizeMode={resizeMode}
            />
        </>
    );
};

export default ProgressiveImage;
