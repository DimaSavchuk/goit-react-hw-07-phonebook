import React, { useEffect } from 'react';
import { List } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import Contact from 'components/Contact/Contact';
import { Item } from 'components/Contact/Contact.styled';

const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (!contacts?.length && !error & !isLoading) {
    return <div>Contact list is empty</div>;
  }
  return (
    <List>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {contacts.map(contact => (
        <Item key={contact.id}>
          <Contact contact={contact} />
        </Item>
      ))}
    </List>
  );
};

export default ContactsList;
