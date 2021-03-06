import React from 'react';
import { TextInput, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import firebase from 'react-native-firebase';
import { green } from 'ansi-colors';


class Cadastrar extends React.Component {

  static navigationOptions = {
    drawerLabel: () => null
  }

  state = {
    nome: "",
    autor: "",
    numero: "",
  }
  onpress = () => {
    firebase.firestore().collection("livros").add({
      nome: this.state.nome,
      autor: this.state.autor,
      telefone: this.state.numero
    })
      .then(() =>
        alert('Livro cadastrado com sucesso'),
        this.props.navigation.navigate('Home')
      )
      .catch(() => alert('Erro ao cadastrar livro'))
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Nome:</Text>

        <TextInput style={styles.texto} placeholder='nome do livro' onChangeText={(text) => this.setState({ nome: text })} value={this.state.nome}></TextInput>

        <Text>Autor:</Text>

        <TextInput style={styles.texto} placeholder='autor' onChangeText={(tex) => this.setState({ autor: tex })} value={this.state.autor}></TextInput>

        <Text>Telefone:</Text>

        <TextInput style={styles.texto} placeholder='+5584999999999' onChangeText={(text) => this.setState({ numero: text })} value={this.state.numero} ></TextInput>

        <View style={{ alignItems: "center", marginTop: 10 }}>
          <TouchableOpacity onPress={this.onpress} style={{ backgroundColor: "cyan", height: 40, width: 80, borderRadius: 20, justifyContent: "center", alignItems: "center" }}><Text style={{ fontSize: 15 }}>Cadastrar</Text></TouchableOpacity>
        </View>
      </View>
    )
  }
}

styles = StyleSheet.create({
  texto: {
    height: 40,
    borderWidth: 2,
    marginBottom: 5,
    marginRight: 20,
  }
})

export default Cadastrar