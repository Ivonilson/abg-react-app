import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image, ImageBackground } from "react-native";
import estilos from './estilos';

import Logo from '../../assets/logo_.png';
import fundoApp from '../../assets/fundoApp.png';

export default function TelaInicial(props) {
    return (
        <View style={estilos.container}>
             <ImageBackground source={fundoApp} style = {estilos.imgFundoApp}>
            <View style={estilos.viewScroll}>
                    <Image
                        source={Logo}
                        resizeMode="stretch"
                    />
                    <ScrollView style={estilos.scrollView}>
                        <TouchableOpacity
                            title="Ordem de Serviço"
                            onPress={() => { props.navigation.navigate('Ordem de Servico') }}
                            style={estilos.botao}
                        >
                            <Text style={estilos.textoBotao}>Ordem de Serviço</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            title="Ordem de Serviço"
                            onPress={() => { props.navigation.navigate('Ordem_de_Servico') }}
                            style={estilos.botao}
                        >
                            <Text style={estilos.textoBotao}>Pesquisa</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            title="Ordem de Serviço"
                            onPress={() => { props.navigation.navigate('Ordem_de_Servico') }}
                            style={estilos.botao}
                        >
                            <Text style={estilos.textoBotao}>Inclusão</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            title="Ordem de Serviço"
                            onPress={() => { props.navigation.navigate('Ordem_de_Servico') }}
                            style={estilos.botao}
                        >
                            <Text style={estilos.textoBotao}>Relatório</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            title="Ordem de Serviço"
                            onPress={() => { props.navigation.navigate('Ordem_de_Servico') }}
                            style={estilos.botao}
                        >
                            <Text style={estilos.textoBotao}>Ferramentas</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            title="Ordem de Serviço"
                            onPress={() => { props.navigation.navigate('Ordem_de_Servico') }}
                            style={estilos.botao}
                        >
                            <Text style={estilos.textoBotao}>LIVRE</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            title="Ordem de Serviço"
                            onPress={() => { props.navigation.navigate('Ordem_de_Servico') }}
                            style={estilos.botao}
                        >
                            <Text style={estilos.textoBotao}>LIVRE</Text>
                        </TouchableOpacity>

                    </ScrollView>
            </View>

            </ImageBackground>
        </View>

    )
}