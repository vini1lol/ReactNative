import React from 'react';
import { StyleSheet, Text, View, Button,Image} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

class Home extends React.Component {
    static navigationOptions={
        tabBarLabel:"Perfil",
        tabBarIcon: ({focused})=>{
            let color = focused ? '#000000' : "#BBBBBB"
            return <Icons name="home" size={24} color={color}></Icons>}
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Bem vindo ao Home</Text>
                {/* <Button title="Perfil" color="#378" onPress={()=> this.props.navigation.navigate("Perfil")}/> */}
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
export default Home