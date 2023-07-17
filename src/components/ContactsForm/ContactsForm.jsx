import React from 'react';
import * as Yup from 'yup';

import { StyledForm, Label, Input, Button } from './ContactsForm.styled';
import { ErrorMessage, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/operations';
import { selectFilteredContacts } from 'redux/selectors';
import Notiflix from 'notiflix';

const userSchema = Yup.object().shape({
  name: Yup.string().required('Is required'),
  phone: Yup.string()
    .required('Is required')
    .matches(
      /^[\d()+-]+$/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .min(13, '+38-XXX-XX-XX-XXX, The minimum length is 13 characters'),
});

const ContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  const handleSubmit = (values, { resetForm }) => {
    const inContactList = contacts.some(
      ({ name }) => name.toLowerCase() === values.name.toLowerCase()
    );

    if (inContactList) {
      Notiflix.Notify.warning(`${values.name} already in your contacts`);
      return;
    }
    dispatch(addContacts(values));

    resetForm();
  };

  const initialValues = {
    name: '',
    phone: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      <StyledForm>
        <Label htmlFor="name">
          Name
          <Input placeholder="First and Last name" type="text" name="name" />
          <ErrorMessage name="name" />
        </Label>

        <Label htmlFor="phone">
          Number
          <Input type="tel" name="phone" placeholder="Phone number" />
          <ErrorMessage name="phone" />
        </Label>
        <Button type="submit">Add to contacts</Button>
      </StyledForm>
    </Formik>
  );
};

export default ContactsForm;
