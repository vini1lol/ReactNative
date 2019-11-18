import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';

export default class MeusDados extends Component {
  state = {
    nome: "",
    Email: "",
  }
  opp = () => {
    this.props.navigation.navigate("Home", { NumerUser: this.state.nome, EmailUser: this.state.Email });
  }

  render() {
    return (
      <View>
        <Text style={styles.texto1}>Numero: {this.props.navigation.getParam("Number", "mm")}</Text>

        <View style={{ flexDirection: "row" }}>
          <Text style={styles.texto1}>Nome:</Text>
          <TextInput style={styles.texto} placeholder='Nome' onChangeText={(text) => this.setState({ nome: text })} value={this.state.nome}></TextInput>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Text style={styles.texto1}>E-mail:</Text>
          <TextInput style={styles.texto} placeholder='E-mail' onChangeText={(text) => this.setState({ nome: text })} value={this.state.Email}></TextInput>
        </View>

        <View style={{ alignItems: "center", marginTop: 10 }}>
          <TouchableOpacity onPress={() => this.opp}><Text>Salvar</Text></TouchableOpacity>
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

