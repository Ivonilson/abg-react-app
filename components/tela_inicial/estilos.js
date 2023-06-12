import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D3D3D3',
        alignItems: 'center',
    },
    scrollView: {
        backgroundColor: 'grey',
        borderRadius: 50
    },
    viewScroll: {
        marginBottom: 200,
    },
    texto: {
        color: 'white',
        fontSize: 30,
        marginTop: 50,
        marginBottom: 50
    },
    botao: {
        backgroundColor: '#363636',
        width: '100%',
        height: 100,
        borderRadius: 5,
        marginEnd: 10,
        marginBottom: 5

    },
    textoBotao: {
        color: 'white',
        fontSize: 35,
        textAlign: 'center',
        padding: 20
    }
});

export default estilos;