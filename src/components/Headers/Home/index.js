import React from 'react'
import { StyleSheet } from 'react-native'

import { Surface, Appbar, Avatar } from 'react-native-paper';

import { useNavigation, DrawerActions } from '@react-navigation/native';

const HomeHeader = () => {

    const navigation = useNavigation();

    return (
        <Appbar.Header style={styles.header}>
            <Appbar.Action icon="menu" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
            <Appbar.Content title="" subtitle="" />
            <Appbar.Action icon="magnify" />
            <Surface style={styles.avatar}>
                <Avatar.Image size={28} source={{ uri: 'https://i.pravatar.cc/100' }} />
            </Surface>
        </Appbar.Header>
    )
}

const styles = StyleSheet.create({
    header: {
        elevation: 0,
        height: 72
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