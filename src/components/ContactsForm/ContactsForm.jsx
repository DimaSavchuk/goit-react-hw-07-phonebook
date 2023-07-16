import React from 'react';

import { StyledForm, Label, Input, Button } from './ContactsForm.styled';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addContacts } from 'redux/operations';

const ContactsForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = values => {
    dispatch(addContacts(values));
  };

  const defaultValue = {
    name: '',
    phone: '',
  };

  return (
    <Formik initialValues={defaultValue} onSubmit={handleSubmit}>
      <StyledForm>
        <Label htmlFor="name">
          Name
          <Input placeholder="First and Last name" type="text" name="name" />
        </Label>

        <Label htmlFor="phone">
          Number
          <Input
            type="tel"
            name="phone"
            placeholder="Phone number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            required
            minLength={13}
          />
        </Label>
        <Button type="submit">Add to contacts</Button>
      </StyledForm>
    </Formik>
  );
};

export default ContactsForm;
