import React from 'react';
import { ScrollView, Button } from 'react-native';
import {NoteItem} from './NoteItem';

const ListaNotas = ({ notes, onNotePress }) => {
  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };
  
  return (
    <ScrollView>
      {notes.map((note, index) => (
        <NoteItem key={index} note={note} onPress={onNotePress} />
        <Button title='Borrar' onPress={() => deleteNote(index)} />
      ))}
    </ScrollView>
  );
};

export { ListaNotas };