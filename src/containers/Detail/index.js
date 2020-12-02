import React, { useEffect, useMemo } from 'react'
import { useRoute } from '@react-navigation/native';
import { useHeaderHeight } from '@react-navigation/stack';

//rn-components
import { ScrollView, View, Image, Dimensions, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Avatar, Surface, Text, Title, Caption } from 'react-native-paper'

//hooks
import { useGetPostById } from '../../hooks/api/useGetPost'

//theme
import Theme from '../../style/theme'
import { useTranslation } from 'react-i18next';

const Detail = () => {

    const { params } = useRoute()
    const { t } = useTranslation('detail')
    const data = useGetPostById(params && params.postId || null)

    const screenWidht = useMemo(() => {
        return Dimensions.get('screen').width
    }, [Dimensions.get('screen').width])

    const screenHeight = useMemo(() => {
        return Dimensions.get('screen').height
    }, [Dimensions.get('screen').height])

    const headerHeight = useHeaderHeight();

    return (
        <>
            <View style={styles.container}>
                <Image source={{ uri: data && data.image || '' }} style={[styles.image, { width: screenWidht }]} />
                <ScrollView style={[styles.view, { height: screenHeight - headerHeight, top: headerHeight }]}>
                    <Surface style={[styles.surface, { height: screenHeight - headerHeight, top: headerHeight }]}>
                        <ScrollView>
                            <View style={[styles.handleContainer, { width: screenWidht }]}>
                                <View style={styles.handle} />
                            </View>
                            <View style={styles.content}>
                                {!data && <View style={styles.titleSkeleton} />}
                                {data && <>
                                    <View>
                                        <Title>{data.text}</Title>
                                    </View>
                                    <View style={styles.avatarContainer}>
                                        <View>
                                            <Avatar.Image source={{ uri: data.owner.picture }} size={40} />
                                        </View >
                                        <View style={styles.avatarTextContainer}>
                                            <View>
                                                <Text style={styles.name}>{`${data.owner.firstName} ${data.owner.lastName}`}</Text>
                                            </View>
                                            <View>
                                                <Caption style={styles.caption}>{data.owner.email}</Caption>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.tags}>
                                        {data.tags && Array.isArray(data.tags)
                                            && data.tags.map(item => <Text key={`tag_${item}`} style={styles.tag}>{item}</Text>)}
                                    </View>
                                    <View style={styles.lorem}>
                                        <Text>{t('lorem')}</Text>
                                    </View>
                                    <Title>{t('gallery')}</Title>
                                </>}
                            </View>
                            <View style={styles.gallery}>

                            </View>
                        </ScrollView>
                    </Surface>
                </ScrollView>
            </View>
            <StatusBar translucent />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    view: {
        position: 'absolute',
        left: 0,
        right: 0,
        height: Dimensions.get('screen').width,
    },
    surface: {
        marginTop: 312,
        borderTopEndRadius: 40,
        borderTopStartRadius: 40,
        display: "flex",
        flexDirection: 'column'
    },
    handleContainer: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20
    },
    handle: {
        height: 6,
        width: 121,
        backgroundColor: Theme.colors.accent,
        borderRadius: 3,
    },
    content: {
        paddingHorizontal: 40
    },
    titleSkeleton: {
        height: 30,
        width: 130,
        backgroundColor: Theme.colors.accent,
        borderRadius: 6,
    },
    image: {
        height: 500,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: Theme.colors.accent,
    },
    avatarContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 20,
        alignItems: 'center'
    },
    avatarTextContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginHorizontal: 12
    },
    name: {
        fontSize: 12,
        fontWeight: 900
    },
    caption: {
        fontSize: 8,
        lineHeight: 10,
        marginTop: 4
    },
    tags: {
        display: 'flex',
        flexDirection: 'row',
    },
    tag: {
        paddingHorizontal: 18,
        paddingVertical: 6,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: Theme.colors.placeholder,
        fontSize: 10,
        marginEnd: 8
    },
    lorem: {
        marginVertical: 20,
        fontSize: 12
    }
})

export default Detail;