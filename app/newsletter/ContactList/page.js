"use client";

import React, { useState, useEffect } from 'react';
import { Trash2 } from "lucide-react";
import * as XLSX from 'xlsx';

export default function ContactList() {
  const [currentPage, setCurrentPage] = useState("list");
  const [contacts, setContacts] = useState([]);
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileData, setFileData] = useState([]);
  const [columnHeaders, setColumnHeaders] = useState([]);

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    } else {
      const initialContacts = [
        { id: 1, name: "Pratik", email: "and.test.21990@gmail.com", product: "All" },
        { id: 2, name: "raj mistry", email: "rajmistry123@gmail.com", product: "All" },
      ];
      setContacts(initialContacts);
      localStorage.setItem('contacts', JSON.stringify(initialContacts));
    }
  }, []);

  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

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
    setCurrentPage("import");
  };

  const ContactListPage = () => (
    <div className="w-full h-screen bg-[#e5e7eb] overflow-y-auto">
      <div className="py-4 md:py-10">
        <div className="max-w-[1480px] mx-auto px-2 sm:px-4">
          <div className="bg-white rounded-lg shadow-md">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 bg-white border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4 rounded-t-lg">
              <h1 className="text-lg sm:text-xl font-normal text-gray-600">
                Contact <strong>List</strong>
              </h1>
              <button
                onClick={handleAddContacts}
                className="w-full sm:w-auto bg-[#2d3e50] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded text-xs sm:text-sm hover:bg-[#1a252f] transition-colors"
              >
                Add Contacts
              </button>
            </div>

            <div className="bg-white px-4 sm:px-6 py-4 sm:py-6">
              <p className="text-xs sm:text-sm mb-6">
                <span className="text-red-600 font-semibold">Note :</span>{" "}
                <span className="text-red-600">Unsubscribe User(s) will not display in this List.</span>
              </p>

              <div className="hidden md:block border border-gray-200 overflow-x-auto rounded">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#dee2e6]">
                      <th className="py-3 px-4 text-left w-12 border-r border-b border-gray-300">
                        <input
                          type="checkbox"
                          onChange={handleSelectAll}
                          checked={selectedContacts.length === contacts.length && contacts.length > 0}
                          className="w-4 h-4 cursor-pointer"
                        />
                      </th>
                      <th className="py-3 px-4 text-left text-xs font-semibold text-[#6c757d] uppercase tracking-wider w-24 border-r border-b border-gray-300">
                        SR. NO.
                      </th>
                      <th className="py-3 px-4 text-left text-xs font-semibold text-[#6c757d] uppercase tracking-wider border-r border-b border-gray-300">
                        NAME
                      </th>
                      <th className="py-3 px-4 text-left text-xs font-semibold text-[#6c757d] uppercase tracking-wider border-r border-b border-gray-300">
                        EMAIL
                      </th>
                      <th className="py-3 px-4 text-left text-xs font-semibold text-[#6c757d] uppercase tracking-wider border-r border-b border-gray-300">
                        PRODUCT
                      </th>
                      <th className="py-3 px-4 text-right text-xs font-semibold text-[#6c757d] uppercase tracking-wider border-b border-gray-300">
                        DELETE
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {contacts.map((contact, index) => (
                      <tr key={contact.id} className="hover:bg-gray-50">
                        <td className="py-3 px-4 border-r border-b border-gray-300">
                          <input
                            type="checkbox"
                            checked={selectedContacts.includes(contact.id)}
                            onChange={() => handleSelectContact(contact.id)}
                            className="w-4 h-4 cursor-pointer"
                          />
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-700 border-r border-b border-gray-300">
                          {index + 1}
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-700 border-r border-b border-gray-300">
                          {contact.name}
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-700 border-r border-b border-gray-300">
                          {contact.email}
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-700 border-r border-b border-gray-300">
                          {contact.product}
                        </td>
                        <td className="py-3 px-4 text-right border-b border-gray-300">
                          <button
                            onClick={() => handleDelete(contact.id)}
                            className="text-gray-700 hover:text-red-600"
                          >
                            <Trash2 size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="md:hidden space-y-4">
                <div className="bg-[#dee2e6] border border-gray-300 rounded-lg p-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-5 h-5 cursor-pointer"
                      checked={selectedContacts.length === contacts.length && contacts.length > 0}
                      onChange={handleSelectAll}
                    />
                    <span className="text-sm font-semibold text-[#6c757d] uppercase tracking-wider">
                      SELECT ALL
                    </span>
                  </label>
                </div>

                {contacts.map((contact, index) => (
                  <div 
                    key={contact.id} 
                    className="bg-white border border-gray-300 rounded-lg p-4 space-y-3"
                  >
                    <div className="flex items-start justify-between">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          className="w-5 h-5 cursor-pointer mt-1"
                          checked={selectedContacts.includes(contact.id)}
                          onChange={() => handleSelectContact(contact.id)}
                        />
                        <div>
                          <div className="text-xs text-gray-500 uppercase font-semibold">SR NO:</div>
                          <div className="text-sm text-gray-700 font-medium">{index + 1}</div>
                        </div>
                      </label>
                      <button 
                        className="text-gray-700 hover:text-red-600 p-2"
                        onClick={() => handleDelete(contact.id)}
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>

                    <div className="pl-8 space-y-2">
                      <div>
                        <div className="text-xs text-gray-500 uppercase font-semibold">Name:</div>
                        <div className="text-sm text-gray-700">{contact.name}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 uppercase font-semibold">Email:</div>
                        <div className="text-sm text-gray-700 break-all">{contact.email}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 uppercase font-semibold">Product:</div>
                        <div className="text-sm text-gray-700">{contact.product}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <button 
                  className="bg-[#dc3545] text-white px-6 py-2 rounded text-sm hover:bg-[#c82333] w-full sm:w-auto"
                  onClick={handleBulkDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ImportContactsPage = () => {
    const handleFileChange = async (e) => {
      if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];
        setSelectedFile(file);

        const reader = new FileReader();
        reader.onload = (event) => {
          try {
            const data = new Uint8Array(event.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
            const jsonData = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });

            if (jsonData.length > 0) {
              const headers = jsonData[0];
              const rows = jsonData.slice(1).filter(row => row.some(cell => cell));
              
              setColumnHeaders(headers);
              setFileData(rows);
            }
          } catch (error) {
            alert('Error reading file. Please make sure it is a valid Excel or CSV file.');
            console.error(error);
          }
        };
        reader.readAsArrayBuffer(file);
      }
    };

    const handleDownload = () => {
      const csvContent = "Name,Email\nJohn Doe,john@gmail.com\nJane Smith,jane@gmail.com";
      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'contacts_template.csv';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    };

    const handleNext = () => {
      if (!selectedFile) {
        alert('Please select a file first');
        return;
      }
      if (fileData.length === 0) {
        alert('The selected file is empty or could not be read');
        return;
      }
      setCurrentPage("detail");
    };

    const handleCancel = () => {
      setSelectedFile(null);
      setFileData([]);
      setColumnHeaders([]);
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = '';
      setCurrentPage("list");
    };

    return (
      <div className="w-full h-screen bg-[#e5e7eb] overflow-y-auto">
        <div className="py-4 md:py-10">
          <div className="max-w-[1480px] mx-auto px-2 sm:px-4">
            <div className="bg-white rounded-lg shadow-md">
              <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4 rounded-t-lg">
                <h1 className="text-lg sm:text-xl font-normal text-gray-600">
                  Import <strong>Contacts</strong>
                </h1>
              </div>

              <div className="bg-white px-4 sm:px-6 py-4 sm:py-6">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 mb-6 md:mb-8">
                  <div className="w-full sm:w-24 flex-shrink-0">
                    <span className="text-sm sm:text-base font-semibold text-gray-600">STEP 01</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-sm sm:text-base font-semibold text-gray-700 mb-2 md:mb-3">
                      Ensure Your File is Formatted Properly
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-600 mb-3 md:mb-4 leading-relaxed">
                      Please review the example file to be sure your file is formatted properly. You can also download the template directly.
                      <br className="hidden sm:block" />
                      <span className="block sm:inline mt-1 sm:mt-0">Name, Email field must be fill.</span>
                    </p>
                    <button
                      onClick={handleDownload}
                      className="w-full sm:w-auto bg-teal-500 text-white px-4 sm:px-6 py-2 rounded text-xs sm:text-sm font-medium hover:bg-teal-600 transition-colors cursor-pointer shadow-sm"
                    >
                      Download sample
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8">
                  <div className="w-full sm:w-24 flex-shrink-0">
                    <span className="text-sm sm:text-base font-semibold text-gray-600">STEP 02</span>
                  </div>
                  <div className="flex-1">
                    <div className="mb-4 md:mb-6">
                      <label className="text-xs sm:text-sm font-medium text-gray-700 mb-2 block">
                        Excel File <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="file"
                        accept=".xlsx,.xls,.csv"
                        onChange={handleFileChange}
                        className="w-full text-xs sm:text-sm text-gray-600 file:mr-2 sm:file:mr-4 file:py-1.5 sm:file:py-2 file:px-3 sm:file:px-4 file:rounded file:border-0 file:text-xs sm:file:text-sm file:font-medium file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200 file:cursor-pointer cursor-pointer"
                      />
                      {selectedFile && (
                        <div className="mt-2 space-y-1">
                          <p className="text-xs sm:text-sm text-green-600">
                            Selected: {selectedFile.name}
                          </p>
                          <p className="text-xs sm:text-sm text-gray-500">
                            {fileData.length} rows found
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <button
                        onClick={handleNext}
                        className="w-full sm:w-auto bg-cyan-500 text-white px-8 sm:px-12 py-2 rounded text-xs sm:text-sm font-medium hover:bg-cyan-600 transition-colors shadow-sm order-1"
                      >
                        Next
                      </button>
                      <button
                        onClick={handleCancel}
                        className="w-full sm:w-auto bg-white text-gray-700 px-8 sm:px-12 py-2 rounded text-xs sm:text-sm border border-gray-300 hover:bg-gray-50 transition-colors order-2"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ImportContactDetail = () => {
    const [selectedProduct, setSelectedProduct] = useState("");
    const [nameColumnIndex, setNameColumnIndex] = useState("");
    const [emailColumnIndex, setEmailColumnIndex] = useState("");

    const handleSave = () => {
      if (!selectedProduct) {
        alert('Please select a product');
        return;
      }
      if (!nameColumnIndex) {
        alert('Please select First Name field');
        return;
      }
      if (!emailColumnIndex) {
        alert('Please select Email field');
        return;
      }

      const newContacts = fileData.map((row, index) => {
        const name = row[parseInt(nameColumnIndex)] || '';
        const email = row[parseInt(emailColumnIndex)] || '';
        
        return {
          id: Date.now() + index,
          name: name.toString().trim(),
          email: email.toString().trim(),
          product: selectedProduct
        };
      }).filter(contact => contact.name && contact.email);

      if (newContacts.length === 0) {
        alert('No valid contacts found in the selected columns');
        return;
      }

      const allContacts = [...contacts, ...newContacts];
      setContacts(allContacts);
      localStorage.setItem('contacts', JSON.stringify(allContacts));

      alert(`${newContacts.length} contacts imported successfully!`);
      setCurrentPage("list");
    };

    const handleCancel = () => {
      setCurrentPage("list");
    };

    return (
      <div className="w-full h-screen bg-[#e5e7eb] overflow-y-auto">
        <div className="py-4 md:py-10">
          <div className="max-w-[1480px] mx-auto px-2 sm:px-4">
            <div className="bg-white rounded-lg shadow-md">
              <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4 rounded-t-lg">
                <h1 className="text-lg sm:text-xl font-normal text-gray-600">
                  Import Contact <strong>Detail</strong>
                </h1>
              </div>

              <div className="bg-white px-4 sm:px-6 py-4 sm:py-6">
                <h2 className="text-base sm:text-lg font-normal text-gray-700 mb-4 md:mb-6">
                  Contact <strong>Import</strong>
                </h2>

                <div className="mb-6">
                  <p className="text-xs sm:text-sm text-gray-600 mb-2">
                    Adjust field names with the appropriate column names of the source file that you import.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 mb-4 md:mb-6">
                    First Name, Email field must be fill.
                  </p>

                  <div className="mb-6">
                    <span className="text-sm sm:text-base font-semibold text-gray-600 block mb-3 md:mb-4">
                      STEP 01
                    </span>

                    <div className="space-y-4 md:space-y-6">
                      <div>
                        <label className="text-xs sm:text-sm text-gray-600 mb-2 block">
                          Select Product <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={selectedProduct}
                          onChange={(e) => setSelectedProduct(e.target.value)}
                          className="w-full border border-gray-300 rounded px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-600 focus:outline-none focus:border-gray-400"
                        >
                          <option value="">Select Products</option>
                          <option value="Bandhani">Bandhani</option>
                          <option value="Galaxy S1">Galaxy S1</option>
                          <option value="Galaxy S3">Galaxy S3</option>
                          <option value="Realme Narzo 50">Realme Narzo 50</option>
                          <option value="Realme Narzo 30">Realme Narzo 30</option>
                          <option value="All">All</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-xs sm:text-sm text-gray-600 mb-2 block">
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={nameColumnIndex}
                          onChange={(e) => setNameColumnIndex(e.target.value)}
                          className="w-full border border-gray-300 rounded px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-600 focus:outline-none focus:border-gray-400"
                        >
                          <option value="">None</option>
                          {columnHeaders.map((header, index) => (
                            <option key={index} value={index}>
                              {header} (col: {String.fromCharCode(65 + index)})
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="text-xs sm:text-sm text-gray-600 mb-2 block">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={emailColumnIndex}
                          onChange={(e) => setEmailColumnIndex(e.target.value)}
                          className="w-full border border-gray-300 rounded px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-600 focus:outline-none focus:border-gray-400"
                        >
                          <option value="">None</option>
                          {columnHeaders.map((header, index) => (
                            <option key={index} value={index}>
                              {header} (col: {String.fromCharCode(65 + index)})
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <button
                          onClick={handleSave}
                          className="w-full sm:w-auto bg-cyan-500 text-white px-8 sm:px-12 py-2 rounded text-xs sm:text-sm font-medium hover:bg-cyan-600 transition-colors order-1"
                        >
                          Save
                        </button>
                        <button
                          onClick={handleCancel}
                          className="w-full sm:w-auto bg-white text-gray-700 px-8 sm:px-12 py-2 rounded text-xs sm:text-sm border border-gray-300 hover:bg-gray-50 transition-colors order-2"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (currentPage === "list") return <ContactListPage />;
  if (currentPage === "import") return <ImportContactsPage />;
  if (currentPage === "detail") return <ImportContactDetail />;
}