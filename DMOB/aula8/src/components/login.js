import { View, TextInput, Button, StyleSheet } from 'react-native'
import React from 'react';

class Login extends React.Component {

    state = {
        nome: '',
        senha: '',
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.conteiner}>
                <TextInput style={styles.input} value={this.state.nome} placeholder="nome" onChangeText={(nome) => this.setState({ nome: nome })} />
                <TextInput style={styles.input} value={this.state.senha} placeholder="senha" onChangeText={(senha) => this.setState({ senha: senha })} />
                <View style={{ paddingHorizontal: 20, }}>
                    <Button title='ok' onPress={() => {
                        if (this.state.nome == 'jose' && this.state.senha == '123') {
                            navigate("Drawer")
                        }else{
                            alert("valores incorretos");
                        }
                    }
                    } />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        paddingHorizontal: 40,
    },
})

export default Login