import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default class Pagina extends React.Component {

  press = () => {

  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <View style={styles.card}>
          <Text>Nome:{this.props.navigation.getParam("nome", "mm")}</Text>
          <Text>Autor:{this.props.navigation.getParam('autor', 'mm')}</Text>
          <Text>Telefone:{this.props.navigation.getParam("telefone", "mm")}</Text>
        </View>
        <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "flex-end" }}>
          <View style={styles.car}>
            <TouchableOpacity onPress={() => this.press}><Text>Apagar</Text></TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "black",
    marginTop: 30,
    padding: 20,
  },
  car: {
    borderRadius: 5,
    backgroundColor: "red",
    padding: 10,
    marginBottom: 2
  }
})
