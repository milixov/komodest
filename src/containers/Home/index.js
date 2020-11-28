import React from 'react'

//rn components
import { StyleSheet, ScrollView, FlatList, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Surface, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

//i18n
import { useTranslation } from 'react-i18next';

//hooks
import useGetUser from '../../hooks/api/useGetUser'
import useGetPost from '../../hooks/api/useGetPost'

//component
import Section from '../../components/Section'
import UserAvatar, { Skeleton } from '../../components/UserAvatar'

const Home = () => {

    const { t } = useTranslation('home');
    const [users] = useGetUser();
    const [posts] = useGetPost();

    return (
        <SafeAreaView>
            <ScrollView>
                <Surface style={styles.surface}>
                    <Section title={t('topDesigner')} action={() => console.log('#')} />
                    <FlatList
                        horizontal
                        contentContainerStyle={styles.userList}
                        data={users && users.data || []}
                        renderItem={props => <UserAvatar {...props}/>}
                        ItemSeparatorComponent={() => <View style={styles.divider}/>}
                        ListEmptyComponent={() => <Skeleton/>}
                        keyExtractor={item => item.id}
                    />
                    <Section title={t('popularDesign')} action={() => console.log('#')} />
                    <View style={{width: 375, height: 520, paddingHorizontal: 16, display: 'flex', flexDirection: 'row', alignContent: 'stretch', alignItems: 'flex-start' ,justifyContent: 'space-between', flexWrap: 'wrap', flexBasis: 'auto'}}>
                        {/* <View style={{backgroundColor: 'red' ,height: 100, width: 343}}><Text>A</Text></View> */}
                        <View style={{backgroundColor: 'blue' ,height: 100, width: 150}}><Text>B</Text></View>
                        <View style={{backgroundColor: 'green' ,height: 200, width: 150}}><Text>C</Text></View>
                        <View style={{backgroundColor: 'yellow' ,height: 200, width: 150}}><Text>D</Text></View>
                        <View style={{backgroundColor: 'purple' ,height: 100, width: 150}}><Text>E</Text></View>
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
    userList: {
        paddingHorizontal: 16,
        marginVertical: 16
    }
});

export default Home;