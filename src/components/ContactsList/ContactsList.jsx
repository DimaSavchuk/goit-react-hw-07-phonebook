import React, { useEffect } from 'react';
import { Button, Data, Item, List, Wrapper } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/selectors';
import { deleteContacts, fetchContacts } from 'redux/operations';
import Loading from 'components/Loader/Loading';

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
      {error && <div>{error}</div>}
      {isLoading ? (
        <Loading>Loading...</Loading>
      ) : (
        <>
          {contacts.map(contact => (
            <Item key={contact.id}>
              <Wrapper>
                <Data>{contact.name}: </Data>
                <Data>{contact.phone}</Data>
              </Wrapper>
              <Button onClick={() => dispatch(deleteContacts(contact.id))}>
                Remove
              </Button>
            </Item>
          ))}
        </>
      )}
    </List>
  );
};

export default ContactsList;
