import React from 'react';
import { StyleSheet, Text, View ,TextInput,Button} from 'react-native';

export default function App() {
  state={
    nome:"",
    preco:"",
  }
  cadastrar = () =>{
    let produto ={
      nome: this.state.nome,
      preco: this.state.preco,
    }
    let requestInfo ={
      method: 'POST',
      body: JSON.stringify(produto),
      headers:{
      'Contet-Type':'application/json',
      }
    }
    fetch("localhost:4001/produtos",requestInfo)
      .then(()=>{
      this.setState({nome: "",preco:""})
    })
    .catch((erro)=>{
      this.setState({
        nome:erro,
      })
    })
  }
  text = (tx) => {
    this.setState({nome:tx})
  }
  pre = (pr) =>{
    this.setState({preco:pr})
  }
  return (
    <View style={styles.container}>
      <View style={{flex:1, borderBottomWidth: 2,marginTop:30}}>
        <TextInput style={styles.input} placeholder="nome" onChangeText={this.text} value={this.state.nome}/>
        <TextInput style={styles.input} placeholder="preço" onChangeText={this.pre} value={this.state.preco}/>
      </View>
      <View style={{flex:1}}>
        <Text>ola</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input:{
    margin:5,
    borderColor:"black",
    borderWidth: 2,
    
  },
});
