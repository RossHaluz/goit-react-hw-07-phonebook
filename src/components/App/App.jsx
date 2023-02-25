import { Container, ContactsListTitle, PhonebookTitle } from './App.styled';
import ContactForm from 'components/AddContacts';
import ContactsList from 'components/ContactsList';
import FilterContacts from 'components/FilterContacts';

const App = () => {
  return (
    <Container>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm />
      <ContactsListTitle>Contacts</ContactsListTitle>
      <h3>Find contacts by name</h3>
      <FilterContacts />
      <ContactsList />
    </Container>
  );
};

export default App;
