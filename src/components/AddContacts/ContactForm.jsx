import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import {
  FormContact,
  FormLable,
  FormInput,
  FormButton,
  Error,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import * as contactsOperation from 'redux/contactsOperation';

let schema = yup.object().shape({
  name: yup.string().required(),
  phone: yup.number().required(),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const initialValues = {
    name: '',
    phone: '',
  };

  const onSubmitForm = (values, { resetForm }) => {
    const findName = contacts.find(
      contact => contact.name === values.name && contact.phone === values.phone
    );

    if (findName) {
      alert(`${values.name} is already in contacts!`);
      resetForm();
      return;
    } else {
      alert(`${values.name} successfully added!`);
    }
    dispatch(contactsOperation.addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmitForm}
    >
      <FormContact>
        <FormLable>Name</FormLable>
        <FormInput type="text" name="name" />
        <Error name="name" />

        <FormLable>Number</FormLable>
        <FormInput type="tel" name="phone" />
        <Error name="phone" />

        <FormButton type="submit">Add contact</FormButton>
      </FormContact>
    </Formik>
  );
};

export default ContactForm;
