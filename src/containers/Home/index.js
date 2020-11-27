import React from 'react'

import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useTranslation } from 'react-i18next';

const Home = () => {

    const { t } = useTranslation('home')

    return (
        <SafeAreaView>
            <View>
                <Text>This page is: {t('topDesigner')}</Text>
            </View>
        </SafeAreaView>
    )
}

export default Home;