import React, { Component } from 'react';
import { Image } from 'react-native';
import { inject, observer } from 'mobx-react';

import Header from '../header';
import { Layout, Card, Input, Button } from '@ui-kitten/components';

const themes = {
    icons: [
        require('../../../assets/icon-dark.png'),
        require('../../../assets/icon-light.png')
    ]
}

@inject('homeStore')
@inject('configurationStore')
@observer
export default class Home extends Component<any> {
    render() {
        const {
            etanol,
            gasolina,
            handleForm,
            calculate
        } = this.props.homeStore;

        return (
            <>
                <Header navigation={this.props.navigation} title='Etanol ou Gasolina?' />
                <Layout style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5 }}>
                    <Image source={themes.icons[this.props.configurationStore.indexTheme]} style={{ marginTop: -100, marginBottom: 50 }}/>

                    <Card style={{ width: '100%' }}>
                        <Input
                            size='medium'
                            placeholder='Etanol'
                            value={etanol.toString()}
                            onChangeText={etanol => handleForm({etanol})}
                        />
                        <Input
                            size='medium'
                            placeholder='Gasolina'
                            value={gasolina.toString()}
                            onChangeText={gasolina => handleForm({gasolina})}
                        />

                        <Button onPress={() => calculate()} style={{ marginTop: 5 }}>
                            Calcular
                        </Button>
                    </Card>
                </Layout>
            </>
        );
    }
}