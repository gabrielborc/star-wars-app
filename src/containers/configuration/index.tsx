import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import { StyleSheet } from 'react-native';
import Header from '../header';
import {
    Card,
    Radio,
    Layout,
    CardHeader,
    RadioGroup,
  } from '@ui-kitten/components';

@inject('configurationStore')
@observer
export default class Home extends Component<any> {

    header() {
        return (
            <CardHeader
              title='Themes'
            />
        );
    }
    
    render() {
        return (
            <>
                <Header navigation={this.props.navigation} title='Settings' />
                <Layout style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5 }}>
                    
                    <Card header={this.header} style={{width: '100%'}}>
                        <RadioGroup
                            selectedIndex={this.props.configurationStore.indexTheme}
                            onChange={this.props.configurationStore.updateThemes}
                        >
                            <Radio style={styles.radio} text='Eva Dark'/>
                            <Radio style={styles.radio} text='Eva Light'/>
                        </RadioGroup>
                    </Card>

                </Layout>
            </>
        );
    }
}

const styles = StyleSheet.create({
    text: {
      marginVertical: 8,
    },
    radio: {
      marginVertical: 8,
    },
});