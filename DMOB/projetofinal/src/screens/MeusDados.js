import React, { Component } from 'react'
import { FlatList, Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';

export default class MeusDados extends Component {
  state = {
    nome: "",
    Numero: this.props.navigation.getParam('Number', '+55'),
    Email: "",
  }
  onpress = () => {
    this.props.navigation.navigate("Home");
  }

  render() {
    return (
      <View>
        <Text style={styles.tt}>Numero:{this.Numero}</Text>

        <View style={{ flexDirection: "row" }}>
          <Text>Nome:</Text>
          <TextInput style={styles.texto} placeholder='Nome' onChangeText={(text) => this.setState({ nome: text })} value={this.state.nome}></TextInput>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Text>E-mail:</Text>
          <TextInput style={styles.texto} placeholder='E-mail' onChangeText={(text) => this.setState({ nome: text })} value={this.state.Email}></TextInput>
        </View>

        <View style={{ alignItems: "center", marginTop: 10 }}>
          <TouchableOpacity onPress={this.onpress}><Text>Salvar</Text></TouchableOpacity>
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
    width: 200,
  },
  tt: {

  },
})

