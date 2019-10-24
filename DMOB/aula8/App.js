import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Login from "./src/components/login"

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Bem vindo</Text>
      </View>
    );
  }
}
class Contato extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Contatos</Text>
      </View>
    );
  }
}

const navigator = createDrawerNavigator({
  Home,
  Contato,
  Login
})

const stacknav = createStackNavigator({
  Login,
  Drawer:{
    screen: navigator,
    navigationOptions: ({navigation})=>({
      headerLeft: <Icon name="menu" size={24} color = 'black' style={{marginLeft:15}}
      onPress={()=> navigation.toggleDrawer()}/>
    })
  }
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createAppContainer(stacknav)

