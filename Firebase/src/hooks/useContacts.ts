import { useState, useEffect } from 'react';
import { collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import { db } from '../config/firebase';
import { Contact } from '../types/contact';

export const useContacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'contacts'), (snapshot) => {
      const contactsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Contact[];
      setContacts(contactsData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const addContact = async (contact: Omit<Contact, 'id'>) => {
    try {
      await addDoc(collection(db, 'contacts'), contact);
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };

  const updateContact = async (id: string, contact: Partial<Contact>) => {
    try {
      await updateDoc(doc(db, 'contacts', id), contact);
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  };

  const deleteContact = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'contacts', id));
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  return { contacts, loading, addContact, updateContact, deleteContact };
};