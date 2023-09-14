import React, { useState } from 'react';
import { TextInput, Button } from 'react-native-paper';

const CrearNota = ({ onSaveNote }) => {
  const [note, setNote] = useState('');

  const handleSaveNote = () => {
    if (note.trim() !== '') {
      onSaveNote(note);
      setNote('');
    }
  };

  return (
    <>
      <TextInput
        label="Nueva nota"
        value={note}
        onChangeText={(text) => setNote(text)}
      />
      <Button mode="contained" onPress={handleSaveNote}>
        Guardar
      </Button>
    </>
  );
};

export { CrearNota };