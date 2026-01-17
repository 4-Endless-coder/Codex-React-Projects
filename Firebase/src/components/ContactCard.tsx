import { Mail, Phone, Edit2, Trash2 } from 'lucide-react';
import { Contact } from '../types/contact';

interface ContactCardProps {
  contact: Contact;
  onEdit: () => void;
  onDelete: () => void;
}

const ContactCard = ({ contact, onEdit, onDelete }: ContactCardProps) => {
  return (
    <div className="group flex items-center justify-between rounded-lg border border-gray-700 bg-gray-800/50 p-4 backdrop-blur-sm transition-all hover:border-orange-500/50 hover:bg-gray-800">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white font-bold">
          {contact.name.charAt(0).toUpperCase()}
        </div>
        <div>
          <h3 className="font-semibold text-white">{contact.name}</h3>
          <div className="flex items-center gap-4 text-sm text-gray-400">
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
          onClick={onEdit}
          className="rounded-lg bg-blue-500 p-2 text-white transition-all hover:bg-blue-600 active:scale-95"
        >
          <Edit2 className="h-4 w-4" />
        </button>
        <button
          onClick={onDelete}
          className="rounded-lg bg-red-500 p-2 text-white transition-all hover:bg-red-600 active:scale-95"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default ContactCard;