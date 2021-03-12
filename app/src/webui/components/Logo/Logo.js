import React from 'react';
import { View, Image } from 'react-native';

import { styles } from './Logo.styles';

const Logo = ({
    height = 60,
    fadeDuration = 1000
}) => {
    return (
        <View style={{height: height}}>
            <Image
                source={require('../../assets/images/png/voyage-logo.png')}
                style={[styles.logo]}
                fadeDuration={fadeDuration}
            />
        </View>
    );
};

export default Logo;
