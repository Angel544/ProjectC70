import React from 'react';
import {StyleSheet,Text,View,Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBoottomTabNavigator} from 'react-navigation-tabs'

import WriteStoryScreen from './screens/WriteStoryScreen'
import ReadStorScreen from './screens/ReadStoryScreen'

export default class App extends React.Component{
    render(){
        return(

            <AppContainer/>

        );
    }
}

const TabNavigator = createBoottomTabNavigator({
    Read:{screen:ReadStoryScreen},
    Write:{WriteStoryScreen},
});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor='grey',
        alignItems: 'center',
        justifyContent:'center',
    },
});