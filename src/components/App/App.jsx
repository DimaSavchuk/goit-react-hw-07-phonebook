import React from 'react';

import { App as AppStyled } from './App.styled';
import ContactsForm from 'components/ContactsForm/ContactsForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
const App = () => {
  return (
    <AppStyled>
      <ContactsForm />
      <Filter />
      <ContactsList />
    </AppStyled>
  );
};

export default App;
