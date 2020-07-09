import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

const LembreteInput = (props) => {

  const [lembrete, setLembrete] = useState('');

  return (
      <View style={estilos.LembreteView}>
          <TextInput
            placeholder="Lembrar..."
            style={estilos.lembreteTextInput}
            onChangeText={(t) => setLembrete(t)}
            value={lembrete}
          />
          <View
            style={estilos.botao}>
            <Button
                title="Adicionar Lembrete"
                onPress={() => 
                    props.onAdicionarLembrete(
                        lembrete)}
            />
          </View>
          <View
            style={estilos.botao}>
              <Button
                title="Apagar tudo"
                onPress={() => {props.onApagarTudo()}}
              />
          </View>
      </View>
  );
}
const estilos = StyleSheet.create({
    lembreteTextInput:{
        width: '50%',
        borderBottomColor: 'grey',
        borderBottomWidth: 4,
        padding: 5
    },
    lembreteView: {
        marginBottom:8,
        alignItems: 'left'
    },
    botao:{
        width: '70%',
        marginTop: 8
    }
});

export default LembreteInput;