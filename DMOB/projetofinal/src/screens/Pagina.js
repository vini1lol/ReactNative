import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import firebase from 'react-native-firebase';

export default class Pagina extends React.Component {

  static navigationOptions = {
    drawerLabel: () => null
  }


  render() {
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <View style={styles.card}>
          <Text style={styles.testo}>Nome:{this.props.navigation.getParam("nome", "mm")}</Text>
          <Text style={styles.testo}>Autor:{this.props.navigation.getParam('autor', 'mm')}</Text>
          <Text style={styles.testo}>Telefone:{this.props.navigation.getParam("telefone", "mm")}</Text>
        </View>
        <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "flex-end" }}>
          <View style={styles.car}>
            <TouchableOpacity
              onPress={() =>
                firebase.firestore().collection("livros").doc(this.props.navigation.getParam("id", "0")).delete()
                  .then(function () {
                    alert("deleted")
                    this.props.navigation.navigate("Home")
                  }).catch(function (error) {
                    alert("Error removing document: ", error);
                  })
              }
            ><Text>Apagar</Text></TouchableOpacity>
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
  },
  testo: {
    fontSize: 16,
  }
})
