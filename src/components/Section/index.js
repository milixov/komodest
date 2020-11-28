import React from 'react'
import { View, StyleSheet} from 'react-native'
import { Title, IconButton } from 'react-native-paper'

const Section = ({ title, action }) => {

    return (
        <View style={styles.container}>
            <Title style={styles.title}>{title}</Title>
            <IconButton icon="arrow-right" size={24} onPress={() => action()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16
    },
    title: {
        fontWeight: 'bold',
        fontSize: '18pt'
    }
})

export default Section;