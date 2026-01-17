import { useState, useEffect } from 'react';
import { Search, Plus, User, Mail, Phone, Edit2, Trash2, X, AlertCircle } from 'lucide-react';
import { initializeApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  onSnapshot,
  query,
  orderBy,
  Timestamp
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
}

const App = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [currentContact, setCurrentContact] = useState<Contact | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const q = query(collection(db, 'contacts'), orderBy('name', 'asc'));
    
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const contactsData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Contact[];
        setContacts(contactsData);
        setLoading(false);
        setError('');
      },
      (err) => {
        console.error('Firestore error:', err);
        setError('Failed to load contacts. Please check your Firebase configuration.');
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.phone.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;

    if (!formData.name.trim()) {
      alert('Name is required');
      return false;
    }
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      alert('Valid email is required');
      return false;
    }
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone)) {
      alert('Valid phone number is required');
      return false;
    }
    return true;
  };

  const handleAddContact = () => {
    setCurrentContact(null);
    setFormData({ name: '', email: '', phone: '' });
    setShowModal(true);
  };

  const handleEditContact = (contact: Contact) => {
    setCurrentContact(contact);
    setFormData({ name: contact.name, email: contact.email, phone: contact.phone });
    setShowModal(true);
  };

  const handleDeleteContact = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this contact?')) {
      return;
    }

    try {
      await deleteDoc(doc(db, 'contacts', id));
    } catch (error) {
      console.error('Delete error:', error);
      alert('Failed to delete contact. Please try again.');
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setSaving(true);
    try {
      if (currentContact) {
        await updateDoc(doc(db, 'contacts', currentContact.id), {
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          updatedAt: Timestamp.now()
        });
      } else {
        await addDoc(collection(db, 'contacts'), {
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          createdAt: Timestamp.now()
        });
      }
      setShowModal(false);
      setFormData({ name: '', email: '', phone: '' });
    } catch (error) {
      console.error('Save error:', error);
      alert('Failed to save contact. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    setFormData({ name: '', email: '', phone: '' });
    setCurrentContact(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="mx-auto max-w-4xl px-4 py-6">
        
        <div className="mb-6 flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 p-4 shadow-lg">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
            <svg width="24" height="30" viewBox="0 0 22 30" fill="none">
              <path d="M0 24.1878L8.76299 7.65059L4.99829 0.372466C4.6812 -0.222748 3.78889 -0.0722348 3.68496 0.59409L0 24.1878Z" fill="#FFC24A"/>
              <path d="M11.5388 12.853L14.3555 9.96834L11.538 4.58971C11.2705 4.08057 10.5238 4.07903 10.2592 4.58971L8.75378 7.4604L11.5387 12.853Z" fill="#F4BD62"/>
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white">Firebase Contact App</h1>
        </div>

        {error && (
          <div className="mb-4 flex items-center gap-2 rounded-lg bg-red-500/10 border border-red-500/50 p-4 text-red-400">
            <AlertCircle className="h-5 w-5" />
            <p>{error}</p>
          </div>
        )}

        <div className="mb-6 flex items-center gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search contacts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-12 w-full rounded-lg border border-gray-700 bg-gray-800/50 pl-10 pr-4 text-white placeholder-gray-400 backdrop-blur-sm transition-all focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
            />
          </div>
          <button
            onClick={handleAddContact}
            className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500 text-white transition-all hover:bg-orange-600 hover:scale-105 active:scale-95"
          >
            <Plus className="h-6 w-6" />
          </button>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-orange-500 border-t-transparent"></div>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredContacts.length === 0 ? (
              <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-8 text-center text-gray-400 backdrop-blur-sm">
                <User className="mx-auto mb-3 h-12 w-12 text-gray-600" />
                <p className="text-lg">No contacts found</p>
                <p className="text-sm mt-1">
                  {searchTerm ? 'Try a different search term' : 'Add your first contact to get started'}
                </p>
              </div>
            ) : (
              filteredContacts.map((contact) => (
                <div
                  key={contact.id}
                  className="group flex items-center justify-between rounded-lg border border-gray-700 bg-gray-800/50 p-4 backdrop-blur-sm transition-all hover:border-orange-500/50 hover:bg-gray-800"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white font-bold text-lg">
                      {contact.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg">{contact.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-400 mt-1">
                        <span className="flex items-center gap-1">
                          <Mail className="h-4 w-4" />
                          {contact.email}
                        </span>
                        <span className="flex items-center gap-1">
                          <Phone className="h-4 w-4" />
                          {contact.phone}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                    <button
                      onClick={() => handleEditContact(contact)}
                      className="rounded-lg bg-blue-500 p-2 text-white transition-all hover:bg-blue-600 active:scale-95"
                    >
                      <Edit2 className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteContact(contact.id)}
                      className="rounded-lg bg-red-500 p-2 text-white transition-all hover:bg-red-600 active:scale-95"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-xl bg-gray-800 p-6 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">
                {currentContact ? 'Edit Contact' : 'Add New Contact'}
              </h2>
              <button
                onClick={handleModalClose}
                className="rounded-lg p-1 text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-300">
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-300">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-300">
                  Phone <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  onClick={handleModalClose}
                  disabled={saving}
                  className="flex-1 rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-white transition-colors hover:bg-gray-700 disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={saving}
                  className="flex-1 rounded-lg bg-orange-500 px-4 py-2 text-white transition-all hover:bg-orange-600 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {saving ? 'Saving...' : currentContact ? 'Update Contact' : 'Add Contact'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;