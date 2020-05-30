import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Home from '../containers/home';
import Film from '../containers/film';
import Configuration from '../containers/configuration';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export enum ROUTES_NAMES {
    Home = "Home",
    Film = "Film"
}

const HomeStack = (props) => (
    <Stack.Navigator initialRouteName={ROUTES_NAMES.Home}>
            <Stack.Screen
            options={{
                headerShown: false
            }}
            name={ROUTES_NAMES.Home}
            component={Home}
        />
        <Stack.Screen
            options={{
                headerTitle: 'Detail of Movie',
                headerTintColor: '#ffffff',
                headerStyle: {
                    backgroundColor: 'black',
                },
            }}
            name={ROUTES_NAMES.Film}
            component={Film}
        />
    </Stack.Navigator>
);

@inject('configurationStore')
@observer
export default class Routes extends Component<any>  {

    constructor(props) {
        super(props);
        
        this.state = {
            bgTheme: ['#1A2138', '#FFFFFF'],
            fontTheme: ['#FFFFFF', '#3366FF'],
            tintColor: ['#FFFFFF', '#3366FF']
        }
    }

    render() {
        const config = this.props.configurationStore;
        const { bgTheme, fontTheme, tintColor } : any = this.state;

        return (
            <NavigationContainer>
                <Drawer.Navigator
                    drawerStyle={{
                        backgroundColor: bgTheme[config.indexTheme]
                    }}
                    drawerContentOptions={{
                        activeTintColor: tintColor[config.indexTheme],
                        labelStyle: { color: fontTheme[config.indexTheme] },                    
                    }}
                    initialRouteName={ROUTES_NAMES.Home}
                >
                    <Drawer.Screen name="Star Wars" component={HomeStack} />
                    <Drawer.Screen name="Configuração" component={Configuration} />
                </Drawer.Navigator>
                
            </NavigationContainer>
        );
    }    
}