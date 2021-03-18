import React from 'react';
import { View } from 'react-native';

import { styles } from './Circle.styles';

const Circle = ({
    size,
    backgroundColor
}) => {
    return (
        <View style={{ width: size, height: size, borderRadius: size / 2, backgroundColor: backgroundColor }}/>
    );
};

export default Circle;
