import React from "react";
import { View, Text } from "react-native";

export default function Contacts({navigation}){
    return(
        <View >
            <View style={{marginTop:60, marginLeft:30}}>
                <Text>Nome: João Silva</Text>
                <Text onPress={() => navigation.navigate('Information',
                {
                    nome:'Joao Siva',
                    telefone:"(11) 96589-6969",
                    endereço:" Rua das flores",
                    numero:" 765",
                    profissao:"Carpinteiro",
                    email:"joaosilav@gmail.com"
                }
                )} 
                >Clique aqui para mais Informações </Text>
            </View>
         
            <View style={{marginTop:60, marginLeft:30}}>
                <Text>Nome: Bruno Souza</Text>
                <Text onPress={() => navigation.navigate('Information',
                                 {
                                    nome:'Bruno Souza',
                                    telefone:"(79) 99961-6325",
                                    endereço:" Rua Leopoldo",
                                    numero:" 563",
                                    profissao:"Progamador",
                                    email:"brunosouz4@gmail.com"
                                }
                )} 
                >Clique aqui para mais Informações </Text>
            </View>
         
        </View>
    )
}