import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class Pagina extends React.Component {

  state = {
    nome: '',
    autor: '',
    telefone: '',
  }
  componentDidMount() {
    this.setState({ nome: this.props.navigation.getParam("nome", "mm"), autor: this.props.navigation.getParam('autor', 'mm'), telefone: this.props.navigation.getParam("telefone", "mm") })
  }
  render() {
    // const { nome, autor, telefone } = this
    // const { navigation } = this.props
    return (
      <View style={{ flex: 1 }}>
        <Text>Nome:{this.state.nome}</Text>
        <Text>Autor:{this.state.autor}</Text>
        <Text>Telefone:{this.state.telefone}</Text>
      </View>
    )
  }
}