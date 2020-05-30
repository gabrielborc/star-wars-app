import React, { Component } from 'react';
import { Image } from 'react-native';
import { inject, observer } from 'mobx-react';

import Header from '../header';
import { Layout, Card, Text } from '@ui-kitten/components';

import HomeStore from '../../stores/home.store';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

interface Props {
    homeStore: HomeStore,
    navigation: any,
    ROUTES_NAMES: any,
}

@inject('homeStore')
@inject('configurationStore')
@observer
export default class Home extends Component<Props> {

    async componentDidMount() {
        const { getFilms } = this.props.homeStore;
        await getFilms();
    }

    render() {
        const { films } = this.props.homeStore;

        const navigateScreen = (id: number) => {
            const { navigation: { navigate }, ROUTES_NAMES } = this.props;
            navigate(ROUTES_NAMES.Film, { id });
        }

        return (
            <>
                <Header navigation={this.props.navigation} title='List Films' />
                <Layout style={{ flex: 1, paddingTop: 20 }}>
                    <ScrollView>
                        {films.map((film, index) => (
                            <Card onPress={() => navigateScreen(film.id)} key={index}>
                                <Text style={styles.title}>{film.title}</Text>
                                <Text>Episode {film.episode_id.toString()}</Text>
                            </Card>
                        ))}
                    </ScrollView>
                </Layout>
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: '10',
        padding: 8,
    },
    title: {
        fontSize: 20,     
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});