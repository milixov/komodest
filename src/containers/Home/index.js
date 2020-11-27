import React from 'react'
import { Text, View } from 'react-native';

import { useTranslation } from 'react-i18next';

const Home = () => {

    const {t} = useTranslation('home')

    return (
        <View>
            <Text>This page is: {t('topDesigner')}</Text>
        </View>
    )
}

export default Home;