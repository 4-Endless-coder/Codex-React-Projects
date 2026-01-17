import { useState } from 'react';
import { User } from 'lucide-react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import ContactCard from './components/ContactCard';
import ContactModal from './components/ContactModal';
import { useContacts } from './hooks/useContacts';
import { Contact } from './types/contact';

const App = () => {
  const { contacts, loading, addContact, updateContact, deleteContact } = useContacts();
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [currentContact, setCurrentContact] = useState<Contact | null>(null);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddContact = () => {
    setCurrentContact(null);
    setShowModal(true);
  };

  const handleEditContact = (contact: Contact) => {
    setCurrentContact(contact);
    setShowModal(true);
  };

  const handleSaveContact = async (contactData: Omit<Contact, 'id'>) => {
    if (currentContact) {
      await updateContact(currentContact.id, contactData);
    } else {
      await addContact(contactData);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="mx-auto max-w-4xl px-4 py-6">
        <Navbar />
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onAddClick={handleAddContact}
        />

        {loading ? (
          <div className="text-center text-white">Loading...</div>
        ) : (
          <div className="space-y-3">
            {filteredContacts.length === 0 ? (
              <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-8 text-center text-gray-400 backdrop-blur-sm">
                <User className="mx-auto mb-3 h-12 w-12 text-gray-600" />
                <p className="text-lg">No contacts found</p>
                <p className="text-sm">Add your first contact to get started</p>
              </div>
            ) : (
              filteredContacts.map((contact) => (
                <ContactCard
                  key={contact.id}
                  contact={contact}
                  onEdit={() => handleEditContact(contact)}
                  onDelete={() => deleteContact(contact.id)}
                />
              ))
            )}
          </div>
        )}

        <ContactModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onSave={handleSaveContact}
          contact={currentContact}
        />
      </div>
    </div>
  );
};

export default App;