import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'

//rn components
import { StatusBar } from 'expo-status-bar';
import { Surface, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

//i18n
import { useTranslation } from 'react-i18next';

//components

const Home = () => {

    const { t } = useTranslation('home')

    return (
        <SafeAreaView>
            <ScrollView>
                <Surface style={styles.surface}>
                    <Text>This page is: {t('topDesigner')}</Text>
                </Surface>
            </ScrollView>
            <StatusBar style="auto" />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    surface: {
        elevation: 0,
        flex: 1,
    },
});

export default Home;