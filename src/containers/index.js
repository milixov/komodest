
import React from 'react';

//react-navigation
import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

//containers
import Home from './Home';
import Detail from './Detail';

//drawer cp
import NavigationDrawer from '../components/Drawer'

//header cp
import HomeHeader from '../components/Headers/Home'
import DetailHeader from '../components/Headers/Detail'

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const Index = () => {
    return (
        <Drawer.Navigator initialRouteName="home" drawerContent={props => <NavigationDrawer {...props} />} drawerStyle={{ backgroundColor: '#F4F6FC' }}>
            <Stack.Screen name="home" component={Home}/>
        </Drawer.Navigator>
    );
}

const ScreenTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#F4F6FC',
    },
};

const Navigation = () => {
    return (
        <NavigationContainer theme={ScreenTheme}>
            <Stack.Navigator
                headerMode="screen"
                initialRouteName="index">
                <Stack.Screen name="index" component={Index} options={{ header: props => <HomeHeader {...props} />}}/>
                <Stack.Screen name="detail" component={Detail} options={{headerTransparent: true, header: props => <DetailHeader {...props}/>}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation