"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ContactList() {
  const router = useRouter();
  
  const [contacts, setContacts] = useState([
    { id: 1, name: "Pratik", email: "and.test.21990@gmail.com", product: "All" },
    { id: 2, name: "raj mistry", email: "rajmistry123@gmail.com", product: "All" },
    { id: 3, name: "Raj mistry", email: "tenacioustechiestest@gmail.com", product: "All" },
    { id: 4, name: "Raj Mistry", email: "rajmistry0054@gmail.com", product: "All" },
    { id: 5, name: "Krunal Mendapara", email: "krunalmendapara88@gmail.com", product: "All" },
  ]);
  
  const [selectedContacts, setSelectedContacts] = useState([]);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedContacts(contacts.map(c => c.id));
    } else {
      setSelectedContacts([]);
    }
  };

  const handleSelectContact = (id) => {
    if (selectedContacts.includes(id)) {
      setSelectedContacts(selectedContacts.filter(cId => cId !== id));
    } else {
      setSelectedContacts([...selectedContacts, id]);
    }
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this contact?')) {
      setContacts(contacts.filter(c => c.id !== id));
    }
  };

  const handleBulkDelete = () => {
    if (selectedContacts.length === 0) {
      alert('Please select contacts to delete');
      return;
    }
    if (confirm(`Are you sure you want to delete ${selectedContacts.length} contact(s)?`)) {
      setContacts(contacts.filter(c => !selectedContacts.includes(c.id)));
      setSelectedContacts([]);
    }
  };

  const handleAddContacts = () => {
    router.push('/newsletter/ImportContacts');
  };

  return (
    <div className="w-full min-h-screen bg-gray-200 p-6">
      <div className="max-w-10xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm">
          {/* Header */}
          <div className="flex items-center justify-between px-8 py-5 border-b border-gray-300">
            <h1 className="text-2xl font-normal text-gray-600">
              Contact <span className="font-semibold text-gray-700">List</span>
            </h1>
            <button
              onClick={handleAddContacts}
              className="bg-[#2d3e50] text-white px-6 py-2.5 rounded text-sm hover:bg-[#1a252f] transition-colors"
            >
              Add Contacts
            </button>
          </div>

          {/* Note */}
          <div className="px-8 py-4 bg-white">
            <p className="text-sm">
              <span className="text-red-600 ml-7 font-semibold">Note :</span>{" "}
              <span className="text-red-600">Unsubscribe User(s) will not display in this List.</span>
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-350 ml-15 border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-4 px-6 text-left w-16 border-r border-gray-300">
                    <input
                      type="checkbox"
                      onChange={handleSelectAll}
                      checked={selectedContacts.length === contacts.length && contacts.length > 0}
                      className="w-4 h-4 cursor-pointer"
                    />
                  </th>
                  <th className="py-4 px-6 text-left text-sm font-bold text-gray-600 uppercase tracking-wide border-r border-gray-300">
                    SR NO.
                  </th>
                  <th className="py-4 px-6 text-left text-sm font-bold text-gray-600 uppercase tracking-wide border-r border-gray-300">
                    NAME
                  </th>
                  <th className="py-4 px-6 text-left text-sm font-bold text-gray-600 uppercase tracking-wide border-r border-gray-300">
                    EMAIL
                  </th>
                  <th className="py-4 px-6 text-left text-sm font-bold text-gray-600 uppercase tracking-wide border-r border-gray-300">
                    PRODUCT
                  </th>
                  <th className="py-4 px-6 text-center text-sm font-bold text-gray-600 uppercase tracking-wide">
                    DELETE
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {contacts.map((contact, index) => (
                  <tr key={contact.id} className="border-b border-gray-300">
                    <td className="py-4 px-6 border-r border-gray-300">
                      <input
                        type="checkbox"
                        checked={selectedContacts.includes(contact.id)}
                        onChange={() => handleSelectContact(contact.id)}
                        className="w-4 h-4 cursor-pointer"
                      />
                    </td>
                    
                    <td className="py-4 px-6 text-sm text-gray-600 border-r border-gray-200">{index + 1}</td>
                    <td className="py-4 px-6 text-sm text-gray-600 border-r border-gray-300">{contact.name}</td>
                    <td className="py-4 px-6 text-sm text-gray-600 border-r border-gray-300">{contact.email}</td>
                    <td className="py-4 px-6 text-sm text-gray-600 border-r border-gray-300">{contact.product}</td>
                    <td className="py-4 px-6 text-center">
                      <button
                        onClick={() => handleDelete(contact.id)}
                        className="text-gray-500 hover:text-red-600 transition-colors"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="inline-block"
                        >
                          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bulk Delete Button */}
          <div className="px-8 py-6">
            <button
              onClick={handleBulkDelete}
              className="bg-red-500 text-white ml-7 px-12 py-2.5 rounded text-sm hover:bg-red-600 transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}