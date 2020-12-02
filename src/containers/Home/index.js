import React, { useMemo } from 'react'
import { useNavigation } from '@react-navigation/native';

//rn components
import { StyleSheet, ScrollView, FlatList, View, Dimensions, Image } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Surface, TouchableRipple, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

//i18n
import { useTranslation } from 'react-i18next';

//hooks
import {useGetUser} from '../../hooks/api/useGetUser'
import {useGetPost} from '../../hooks/api/useGetPost'

//component
import Section from '../../components/Section'
import UserAvatar, { Skeleton } from '../../components/UserAvatar'

//enum
import { HOME_PAGE } from '../../config/enums'
const { masonHeight, padding, gap } = HOME_PAGE

//theme
import Theme from '../../style/theme'

const Home = () => {

    const { t } = useTranslation('home');
    const { navigate } = useNavigation()
    const users = useGetUser(1, 10);
    const posts = useGetPost(1, 5);

    const frameWidth = useMemo(() => {
        return Dimensions.get('screen').width - padding * 2
    }, [Dimensions.get('screen').width])

    const masonWidth = useMemo(() => {
        return (frameWidth - gap) / 2
    }, [Dimensions.get('screen').width])

    const postMason = useMemo(() => {
        if (posts && Array.isArray(posts.data)) {

            let data = posts.data.slice(1, posts.data.length);
            return data.map((item, index) => ({ ...item, masonHeight: masonHeight[index] }))
        }
    }, [posts])

    return (
        <SafeAreaView>
            <ScrollView>
                <Surface style={styles.surface}>
                    <Section title={t('topDesigner')} action={() => console.log('#')} />
                    <FlatList
                        horizontal
                        contentContainerStyle={styles.userList}
                        data={users && Array.isArray(users.data) && users.data || []}
                        renderItem={props => <UserAvatar {...props} />}
                        ItemSeparatorComponent={() => <View style={styles.divider} />}
                        ListEmptyComponent={() => <Skeleton />}
                        keyExtractor={item => item.id}
                    />
                    <Section title={t('popularDesign')} action={() => console.log('#')} />
                    <View style={styles.frame}>
                        <View style={[styles.mason, { height: 145, width: frameWidth }]}>
                            {posts && posts.data && Array.isArray(posts.data) &&
                                <TouchableRipple onPress={() => navigate('detail', {postId: posts.data[0].id})}>
                                    <Image source={{ uri: posts.data[0].image }} style={{ height: 145, width: frameWidth }} />
                                </TouchableRipple>
                            }
                        </View>
                    </View>
                    <View style={styles.masonry}>
                        {
                            !posts && masonHeight.map((item, index) =>
                                <View key={`mason_sk_${index}`} style={[styles.mason, { height: item, width: masonWidth }]} />)

                        }
                        {
                            postMason && Array.isArray(postMason) && postMason.map(item =>
                                <View key={`${item.id}`} style={[styles.mason, { height: item.masonHeight, width: masonWidth }]}>
                                    <TouchableRipple onPress={() => navigate('detail', {postId: item.id})}>
                                        <Image source={{ uri: item.image }} style={{ height: item.masonHeight, width: masonWidth }} />
                                    </TouchableRipple>
                                </View>)
                        }
                    </View>
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
    divider: {
        width: 20
    },
    frame: {
        paddingHorizontal: padding,
        marginTop: padding
    },
    userList: {
        paddingHorizontal: padding,
        marginVertical: padding
    },
    mason: {
        borderRadius: 8,
        backgroundColor: Theme.colors.accent,
        overflow: 'hidden'
    },
    masonry: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        marginVertical: gap,
        height: 337 + gap,
        alignContent: 'space-between',
        justifyContent: 'space-between',
        paddingHorizontal: padding
    }
});

export default Home;