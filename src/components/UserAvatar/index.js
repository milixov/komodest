import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Avatar, Text } from 'react-native-paper';

const UserAvatar = ({ item }) => {
    return (
        <View style={styles.container}>
            <Avatar.Image size={50} source={{ uri: item.picture }} />
            <Text style={styles.text}>{item.firstName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: 50
    },
    text: {
        color: '#9F9797',
        marginTop: 16,
        textAlign: 'center',
        fontSize: '8pt'
    },
})

export const Skeleton = () => {
    return (
        <>
            {[1, 2, 3].map(item => 
                <View key={`sk_avt_${item}`} style={skyles.container}>
                    <View style={skyles.avatar} />
                    <View style={skyles.text} />
                </View>)}
        </>
    )
}

const skyles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: 50,
        marginEnd: 20
    },
    avatar: {
        backgroundColor: '#F1E7E7',
        width: 50,
        height: 50,
        borderRadius: 25
    },
    text: {
        marginTop: 16,
        backgroundColor: '#F1E7E7',
        width: 40,
        height: 20,
        borderRadius: 4
    }
})

export default UserAvatar;