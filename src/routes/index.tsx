import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import { Image } from 'react-native';

import Home from '../containers/home';
import Configuration from '../containers/configuration';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

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
        const { bgTheme, fontTheme, tintColor }= this.state;

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
                    initialRouteName="Etanol ou Gasolina?"
                >
                    <Drawer.Screen name="Etanol ou Gasolina?" component={Home} />
                    <Drawer.Screen name="Configuração" component={Configuration} />
                </Drawer.Navigator>
            </NavigationContainer>
        );
    }    
}