import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import React from 'react';

export default function Home(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Preencha os dados</Text>

            <TextInput style={styles.input} placeholder="Nome completo"/>
            
            <TextInput style={styles.input} placeholder="Data de nascimento"/>

            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}
