import React, { Component } from 'react';
import { FlatList, Text, StyleSheet, View, TouchableOpacity } from 'react-native';

import firebase from 'react-native-firebase';

const extractKey = ({ id }) => id

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            livros: [],
            nome: "",
            autor: "",
            telefone: "",
        }
    }

    componentDidMount() {
        this.getLivros()
    }

    getLivros = () => {
        firebase.firestore().collection("livros").get()
            .then((querySnapshot) => {
                let livros = []
                querySnapshot.forEach((doc) => {
                    livros.push({ id: doc.id, ...doc.data() })
                });
                this.setState({ livros: livros })
            })
    }

    page = ({ item }) => {
        this.props.navigation.navigate("Pagina", { nome: item.nome, autor: item.autor, telefone: item.telefone });
    }

    renderItem = ({ item }) => {

        return (
            <View style={styles.vi}>
                <TouchableOpacity onPress={this.page({ item })}>
                    <Text >
                        Nome: {item.nome}
                    </Text>
                    <Text >
                        Autor: {item.autor}
                    </Text>
                    <Text>
                        Telefone: {item.telefone}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        return (
            <FlatList
                style={styles.container}
                data={this.state.livros}
                renderItem={this.renderItem}
                keyExtractor={extractKey}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    vi: {
        padding: 15,
        marginBottom: 5,
        marginTop: 5,
        marginHorizontal: 20,
        backgroundColor: 'skyblue',
    },
})