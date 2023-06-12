import React, { Fragment } from "react";
import { View, Text, Image, ScrollView } from 'react-native';

import Logo from '../../assets/logo_.png';

import estilos from './estilos';

//const [width] = Dimensions.get('window');

export default function Os(props) {
    return (
        <View style={estilos.container}>
            <Image source={Logo} />
            <View >
                <ScrollView style={estilos.scrollView}>
                    <Text style={estilos.dataReferencia}>O.S.(S) vencendo em: 12/06/2023</Text>
                    <View style = {estilos.view}> 
                        <Text style = {estilos.texto} > <Text style = {estilos.textoDescricao} >O.S:</Text> 1850/2023</Text>
                        <Text style = {estilos.texto} > <Text style = {estilos.textoDescricao} >EMPRESA:</Text> MAMCK</Text>
                        <Text style = {estilos.texto} > <Text style = {estilos.textoDescricao} >BANCO:</Text> CEF</Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}