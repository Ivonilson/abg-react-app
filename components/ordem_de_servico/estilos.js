import {StyleSheet} from 'react-native';

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D3D3D3red',
        alignItems: 'center'
    },
    texto: {
        color: 'white',
        fontSize: 30
    },
    scrollView: {
        //borderWidth: 1,
        //borderColor: 'red',
        minWidth: 350
    },
    texto: {
        fontSize: 20,
        fontStyle: 'italic'
    },
    textoDescricao: {
        fontSize: 20,
        color: 'blue',
        fontWeight: 'bold'
    },
    dataReferencia: {
        fontSize: 20
    },
    view: {
        borderWidth: 1,
        borderColor: 'grey',
        padding: 5,
        marginBottom: 10,
        backgroundColor: '#D3D3D3'
    }
});

export default estilos;