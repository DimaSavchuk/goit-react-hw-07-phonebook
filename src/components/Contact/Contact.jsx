import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/operations';

import { Data, Button } from './Contact.styled';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <Data>{contact.name}</Data>
        <Data>{contact.phone}</Data>
      </div>
      <Button onClick={() => dispatch(deleteContacts(contact.id))}>
        Remove
      </Button>
    </>
  );
};

export default Contact;
