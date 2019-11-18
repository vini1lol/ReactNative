import React, { Component } from 'react';
import { FlatList, Text, StyleSheet, View, TouchableOpacity, Button } from 'react-native';

import firebase from 'react-native-firebase';
import { Button } from 'native-base';

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

    page = (index) => {
        this.props.navigation.navigate("Pagina", { nome: this.state.livros[index].nome, autor: this.state.livros[index].autor, telefone: this.state.livros[index].telefone });
    }

    pp = () => {
        this.props.navigation.navigate("Cadastrar");
    }

    renderItem = ({ item, index }) => {

        return (
            <View style={styles.vi}>
                <TouchableOpacity onPress={() => this.page(index)}>
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
            <View style={{ flex: 1 }}>
                <FlatList
                    style={styles.container}
                    data={this.state.livros}
                    renderItem={this.renderItem}
                    keyExtractor={extractKey}
                />
                <View style={{ flex: 1 }}>
                    <Button onPress={() => this.pp}>+</Button>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 5,
    },
    vi: {
        padding: 15,
        marginBottom: 5,
        marginTop: 5,
        marginHorizontal: 20,
        backgroundColor: 'skyblue',
    },
})