import React from 'react';
import { View } from 'react-native';

import CustomText from '../CustomText/CustomText';
import { styles } from './ExistingAccount.styles';
import { colors } from '../../modules/styles/colors.styles';

const ExistingAccount = ({

}) => {
    return (
        <View style={styles.existingAccount}>
            <CustomText
                textColor={colors.gray500}
            >
                Already have and account?
            </CustomText>
            <CustomText
                textColor={colors.blue}
                fontWeight={'bold'}
                style={{marginLeft: 5}}
                onPress={() => console.log('screen')}
            >
                Sign In
            </CustomText>
        </View>
    );
};

export default ExistingAccount;
