import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as contactsOperation from 'redux/contactsOperation';
import { RotatingLines } from 'react-loader-spinner';
import {
  Contacts,
  ContactsItem,
  ContactsItemName,
  ContactsItemNumber,
  ContactBtnDelete,
} from './ContactsList.styled';

const ContactsList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const loading = useSelector(state => state.contacts.isLoading);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperation.fetchContacts());
  }, [dispatch]);

  return (
    <>
      {loading && (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="50"
          visible={true}
        />
      )}
      {contacts.length > 0 && !loading && (
        <Contacts>
          {contacts
            .filter(({ name }) =>
              name.toLowerCase().includes(filter.toLowerCase())
            )
            .map(({ id, name, phone }) => {
              return (
                <ContactsItem key={id}>
                  <ContactsItemName>{name}:</ContactsItemName>
                  <ContactsItemNumber> {phone}</ContactsItemNumber>
                  <ContactBtnDelete
                    type="button"
                    onClick={() =>
                      dispatch(contactsOperation.deleteContact(id))
                    }
                  >
                    Delete
                  </ContactBtnDelete>
                </ContactsItem>
              );
            })}
        </Contacts>
      )}
    </>
  );
};

export default ContactsList;
