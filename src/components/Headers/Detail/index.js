import React from 'react'
import { StyleSheet } from 'react-native'

import { Surface, Appbar, Avatar } from 'react-native-paper';

import { useNavigation, DrawerActions } from '@react-navigation/native';

const HomeHeader = () => {

    const navigation = useNavigation();

    return (
        <Appbar.Header style={styles.header}>
            <Appbar.BackAction />
            <Appbar.Content title="" subtitle="" />
            <Appbar.Action icon="heart-outline" />
            <Appbar.Action icon="share" />
        </Appbar.Header>
    )
}

const styles = StyleSheet.create({
    header: {
        elevation: 0,
        height: 72,
        backgroundColor: 'transparent'
    },
    avatar: {
        marginEnd: 16,
        padding: 0,
        borderRadius: 16,
        elevation: 0,
        borderWidth: 4, 
        borderColor: '#E6EEFE' 
    }
});

export default HomeHeader;