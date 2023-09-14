import React, { useState } from 'react';
import { SafeAreaView, View, Text, Alert } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import {CrearNota} from './src/components/CreateNote';
import {ListaNotas} from './src/components/NoteList';

const App = () => {
  const [notes, setNotes] = useState([]);

  const handleSaveNote = (note) => {
    setNotes([...notes, note]);
  };

  const handleNotePress = (note) => {
    Alert.alert('Contenido de la nota', note);
  };

  return (
    <PaperProvider>
      <SafeAreaView>
        <View>
          <Text>Notas</Text>
        </View>
        <CrearNota onSaveNote={handleSaveNote} />
        <ListaNotas notes={notes} onNotePress={handleNotePress} />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;