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

    page = (index) => {
        this.props.navigation.navigate("Pagina", { nome: this.state.livros[index].nome, autor: this.state.livros[index].autor, telefone: this.state.livros[index].telefone, id: this.state.livros[index].id });
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
                <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "flex-end" }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Cadastrar")} style={{ backgroundColor: "skyblue", borderRadius: 40, height: 80, width: 80, margin: 8, alignItems: "center", justifyContent: "center" }}><Text style={{ fontSize: 60 }}>+</Text></TouchableOpacity>
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