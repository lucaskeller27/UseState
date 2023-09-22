import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import React from 'react';
import { useState } from 'react';

export default function Home(){

    const [ name, setName ] = useState('')
    const [ dataNasc, setDataNasc ] = useState('')
    
    function handleUserAdd(){
        console.log("Nome completo: " + name + 
                    "\nData de nascimento: " + dataNasc)
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Preencha os dados</Text>

            <TextInput style={styles.input} placeholder="Nome completo" 
            onChangeText={ setName } value={ name }/>
            
            <TextInput style={styles.input} placeholder="Data de nascimento"
            onChangeText={ setDataNasc } value={ dataNasc }/>

        
            <TouchableOpacity style={styles.btn} onPress={ handleUserAdd }>
                <Text style={styles.btnTxt}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}
