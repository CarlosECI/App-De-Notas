import React from 'react';
import { ListItem } from 'react-native-paper';

const NoteItem = ({ note, onPress }) => {
  return (
    <ListItem
      title={note}
      onPress={() => onPress(note)}
    />
  );
};

export { NoteItem };