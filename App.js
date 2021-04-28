import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, Alert } from 'react-native';

export default class calcIMC extends Component{
    
    state = {
      numAltura: 0.0,
      numPeso: 0.0,
      IMC: 0.0
    }

    clicar = () => {
      if(this.state.numAltura == "" || this.state.numPeso == ""){
        alert("Preencha os campos");
        return;
      }
      let altura = parseFloat(this.state.numAltura)/100.0;
      let peso = parseFloat(this.state.numPeso);
      var IMC = peso / (altura*altura);
      this.setState({IMC});
    }

    classifica = (IMC) => {
      if(IMC >= 1 && IMC < 18.5){
        return "Seu IMC é Magreza";
      }else if(IMC >= 18.5 && IMC < 25.0){
        return "Seu IMC é Normal";
      }else if(IMC >=25.0 && IMC < 30.0){
        return "Seu IMC é Sobre Peso";
      }else if(IMC >=30.0 && IMC < 40.0){
        return "Seu IMC é Obesidade";
      }else if(IMC > 40.0){
        return "Seu IMC é Obesidade Grave";
      }
      return "";
    }  

  
    render() {
      return(
        <SafeAreaView style={styles.container}>
        <View>
            <Text style={styles.titulo}>Cálculo de IMC</Text>
            <StatusBar style="auto" />
        </View>
        <View>
            <TextInput placeholder="Altura (em cm)" style={styles.input} keyboardType={"numeric"} onChangeText={(numAltura) => {this.setState({numAltura})}}/>
            <TextInput placeholder="Peso (em kg)" style={styles.input} keyboardType={"numeric"}  onChangeText={(numPeso) => {this.setState({numPeso})}}/>
        </View> 
        <View style={styles.divBotao}>
            <Button title="Calcular" onPress={this.clicar} color= "#049d00" />
        </View>
        <View>
            <TextInput placeholder="IMC" style={styles.IMC} editable={false} value={this.state.IMC.toFixed(1)}/>
        </View> 
        <View>
            <TextInput placeholder="classificacao" style={styles.IMC} editable={false} value={this.classifica(this.state.IMC)}/>
        </View> 
         </SafeAreaView>
      );
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 18
  },
  titulo: {
      marginTop: 20,
      textAlign: "center",
      fontSize: 40,
  },
  
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#aaaaaa',
    margin: 10,
    padding: 10,
  },

  IMC: {
    height: 40,
    borderWidth: 1,
    borderColor: '#aaaaaa',
    margin: 10,
    padding: 10,
  },
  

  divBotao:{
    padding: 10
  },
});
