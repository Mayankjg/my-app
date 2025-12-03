"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ImportContacts() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState("import");
  const [selectedFile, setSelectedFile] = useState(null);

  const ImportContactsPage = () => {
    const handleFileChange = (e) => {
      if (e.target.files && e.target.files[0]) {
        setSelectedFile(e.target.files[0]);
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
      setCurrentPage("detail");
    };

    const handleCancel = () => {
      setSelectedFile(null);
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = '';
      router.push('/newsletter/ContactList');
    };

    return (
      <div className="w-full min-h-screen bg-gray-200 p-6">
        <div className="max-w-10xl mx-auto bg-white rounded-lg shadow-md">
          <div className="border-b border-gray-300 px-8 py-5">
            <h1 className="text-xl font-normal text-gray-700">
              Import <span className="font-semibold text-gray-800">Contacts</span>
            </h1>
          </div>

          <div className="px-8 py-8">
            <div className="flex gap-8 mb-8">
              <div className="w-24 flex-shrink-0">
                <span className="text-base font-semibold text-gray-600">STEP 01</span>
              </div>
              <div className="flex-1">
                <h2 className="text-base font-semibold text-gray-700 mb-3">
                  Ensure Your File is Formatted Properly
                </h2>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Please review the example file to be sure your file is formatted properly. You can also download the template directly.
                  <br />
                  Name, Email field must be fill.
                </p>
                <button
                  onClick={handleDownload}
                  className="bg-teal-500 text-white px-6 py-2 rounded text-sm font-medium hover:bg-teal-600 transition-colors cursor-pointer shadow-sm"
                >
                  Download sample
                </button>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="w-24 flex-shrink-0">
                <span className="text-base font-semibold text-gray-600">STEP 02</span>
              </div>
              <div className="flex-1">
                <div className="mb-6">
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Excel File <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    accept=".xlsx,.xls,.csv"
                    onChange={handleFileChange}
                    className="text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-medium file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200 file:cursor-pointer cursor-pointer"
                  />
                  {selectedFile && (
                    <p className="text-sm text-green-600 mt-2">
                      Selected: {selectedFile.name}
                    </p>
                  )}
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={handleNext}
                    className="bg-cyan-500 text-white px-12 py-2 rounded text-sm font-medium hover:bg-cyan-600 transition-colors shadow-sm"
                  >
                    Next
                  </button>
                  <button
                    onClick={handleCancel}
                    className="bg-white text-gray-700 px-12 py-2 rounded text-sm border border-gray-300 hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
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
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");

    const handleSave = () => {
      if (!selectedProduct) {
        alert('Please select a product');
        return;
      }
      if (!firstName) {
        alert('Please select First Name field');
        return;
      }
      if (!email) {
        alert('Please select Email field');
        return;
      }
      alert('Contacts imported successfully!');
      router.push('/newsletter/ContactList');
    };

    const handleCancel = () => {
      router.push('/newsletter/ContactList');
    };

    return (
      <div className="w-full min-h-screen bg-gray-200 p-6">
        <div className="max-w-10xl mx-auto">
          <h1 className="text-2xl font-normal text-gray-700 mb-6">Import Contact Detail</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-lg font-normal text-gray-700 mb-6">
              Contact <span className="font-semibold">Import</span>
            </h2>

            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-2">
                Adjust field names with the appropriate column names of the source file that you import.
              </p>
              <p className="text-sm text-gray-500 mb-6">
                First Name, Email field must be fill.
              </p>

              <div className="mb-6">
                <span className="text-base font-semibold text-gray-600 block mb-4">STEP 01</span>

                <div className="mb-4">
                  <label className="text-sm text-gray-600 mb-2 block">
                    Select Product <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={selectedProduct}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                    className="w-full max-w-md border border-gray-300 rounded px-4 py-2 text-sm text-gray-600 focus:outline-none focus:border-gray-400"
                  >
                    <option value="">Select Products</option>
                    <option value="product1">Bandhani</option>
                    <option value="product2">Galaxy S1</option>
                    <option value="product3">Galaxy S3</option>
                    <option value="product3">Realme Narzo 50</option>
                    <option value="product3">Realme Narzo 30</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="text-sm text-gray-600 mb-2 block">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full max-w-md border border-gray-300 rounded px-4 py-2 text-sm text-gray-600 focus:outline-none focus:border-gray-400"
                  >
                    <option value="">None</option>
                    <option value="firstName">First Name(col: A)</option>
                    <option value="Email">Email(col: B)</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="text-sm text-gray-600 mb-2 block">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full max-w-md border border-gray-300 rounded px-4 py-2 text-sm text-gray-600 focus:outline-none focus:border-gray-400"
                  >
                    <option value="">None</option>
                    <option value="firstname">First Name(col: A)</option>
                    <option value="Email">Email(col: B)</option>
                  </select>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={handleSave}
                    className="bg-cyan-500 text-white px-12 py-2 rounded text-sm font-medium hover:bg-cyan-600 transition-colors"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="bg-white text-gray-700 px-12 py-2 rounded text-sm border border-gray-300 hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return currentPage === "import" ? <ImportContactsPage /> : <ImportContactDetail />;
}