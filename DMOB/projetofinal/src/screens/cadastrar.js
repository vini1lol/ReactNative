import React from 'react';
import { TextInput, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import firebase from 'react-native-firebase';


class Cadastrar extends React.Component {

  state = {
    nome: "",
    autor: "",
    numero: "",
  }
  onpress() {
    firebase.firestore().collection("livros").add({
      nome: this.state.nome,
      autor: this.state.autor,
      telefone: this.state.numero
    })
      .then(() => alert('Livro cadastrado com sucesso'))
      .catch(() => alert('Erro ao cadastrar livro'))
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Nome:</Text>

        <TextInput style={styles.texto} placeholder='nome do livro' onChangeText={(text) => this.setState({ nome: text })} value={this.state.nome}></TextInput>

        <Text>Autor:</Text>

        <TextInput style={styles.texto} placeholder='autor' onChangeText={(text) => this.setState({ autor: text })} value={this.state.autor}></TextInput>

        <Text>Telefone:</Text>

        <TextInput style={styles.texto} placeholder='+5584999999999' onChangeText={(text) => this.setState({ numero: text })} value={this.state.numero} ></TextInput>

        <TouchableOpacity onpress={this.onpress}><Text>Cadastrar</Text></TouchableOpacity>
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