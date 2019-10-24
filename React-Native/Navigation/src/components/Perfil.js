import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

class Perfil extends React.Component {
    static navigationOptions={
        tabBarLabel:"Perfil",
        tabBarIcon: ({focused})=>{
            let color = focused ? '#000000' : "#BBBBBB"
            return <Icons name="account-circle" size={24} color={color}></Icons>}
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Bem vindo ao perfil</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default Perfil