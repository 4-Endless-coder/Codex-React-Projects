import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Contact } from '../types/contact';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (contact: Omit<Contact, 'id'>) => void;
  contact?: Contact | null;
}

const ContactModal = ({ isOpen, onClose, onSave, contact }: ContactModalProps) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    if (contact) {
      setFormData({ name: contact.name, email: contact.email, phone: contact.phone });
    } else {
      setFormData({ name: '', email: '', phone: '' });
    }
  }, [contact]);

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.phone) return;
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-xl bg-gray-800 p-6 shadow-2xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">
            {contact ? 'Edit Contact' : 'Add Contact'}
          </h2>
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-300">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-300">Phone</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
              placeholder="+1234567890"
            />
          </div>
          <div className="flex gap-3 pt-2">
            <button
              onClick={onClose}
              className="flex-1 rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-white transition-colors hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="flex-1 rounded-lg bg-orange-500 px-4 py-2 text-white transition-all hover:bg-orange-600 active:scale-95"
            >
              {contact ? 'Update' : 'Add'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;