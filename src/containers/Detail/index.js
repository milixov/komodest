import React, { useEffect, useMemo } from 'react'
import { useRoute } from '@react-navigation/native';

//rn-components
import { Text, ScrollView, View, Image, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';

//hooks
import {useGetPostById} from '../../hooks/api/useGetPost'

const Detail = () => {

    const { params } = useRoute()
    
    const data = useGetPostById(params && params.postId || null)

    const screenWidht = useMemo(() => {
        return Dimensions.get('screen').width
    }, [Dimensions.get('screen').width])

    useEffect(()=>{
        console.log(data)
    }, [data])

    return (
        <ScrollView>
            <View>
                <Image source={{uri: data && data.image || ''}} style={{width: screenWidht, height: 500}}/>
            </View>
            <StatusBar translucent/>
        </ScrollView>
    )
}

export default Detail;