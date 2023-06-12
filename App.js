
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicial from './components/tela_inicial/Tela_Inicial';
import Os from './components/ordem_de_servico/Ordem_de_Servico';

import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name="Inicio" component = { TelaInicial } />
        <Stack.Screen name="Ordem de Servico" component = { Os } />
      </Stack.Navigator>

    </NavigationContainer >

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: 'white'
  }
});
