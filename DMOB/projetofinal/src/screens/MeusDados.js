import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';

import firebase from 'react-native-firebase';

export default class MeusDados extends Component {
  state = {
    nome: "",
    Email: "",
    telefone: "",
  }


  render() {
    return (
      <View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.texto1}>Telefone:</Text>
          <TextInput style={styles.texto} placeholder='numero' onChangeText={(text) => this.setState({ telefone: text })} value={this.state.telefone}></TextInput>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Text style={styles.texto1}>Nome:</Text>
          <TextInput style={styles.texto} placeholder='Nome' onChangeText={(text) => this.setState({ nome: text })} value={this.state.nome}></TextInput>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Text style={styles.texto1}>E-mail:</Text>
          <TextInput style={styles.texto} placeholder='E-mail' onChangeText={(text) => this.setState({ Email: text })} value={this.state.Email}></TextInput>
        </View>

        <View style={{ alignItems: "center", marginTop: 10 }}>
          <TouchableOpacity
            onPress={() =>
              firebase.firestore().collection("users").add({
                nome: this.state.nome,
                Email: this.state.Email,
                telefone: this.state.telefone
              })
                .then(() =>
                  alert('Dados cadastrado com sucesso'),
                  this.props.navigation.navigate('Home')
                )
                .catch(() => alert('Erro ao cadastrar Dados'))
            }
            style={{ backgroundColor: "cyan", height: 40, width: 80, borderRadius: 20, justifyContent: "center", alignItems: "center" }}><Text>Salvar</Text></TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  texto: {
    height: 40,
    borderWidth: 2,
    marginBottom: 5,
    marginLeft: 15,
    width: 200,
    borderColor: "black",
  },
  texto1: {
    marginTop: 5,
  },
})

