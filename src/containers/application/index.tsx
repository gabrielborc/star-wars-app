import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import { SafeAreaView } from 'react-native';
import { mapping } from '@eva-design/eva';

import { ApplicationProvider } from '@ui-kitten/components';

import Routes from '../../routes';

@inject('configurationStore')
@observer
export default class Application extends Component<any> {
    render() {
        return (
            <ApplicationProvider mapping={mapping} theme={this.props.configurationStore.theme}>
                <SafeAreaView style={{ flex: 1 }}>
                    <Routes />
                </SafeAreaView>
            </ApplicationProvider>
        );
    }
}