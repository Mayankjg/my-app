"use client";

import React, { useState } from 'react';
import * as XLSX from 'xlsx';

export default function ImportContacts() {
  const [currentPage, setCurrentPage] = useState("import");
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileData, setFileData] = useState([]);
  const [columnHeaders, setColumnHeaders] = useState([]);

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

      alert(`${newContacts.length} contacts imported successfully!`);
      setCurrentPage("import");
    };

    const handleCancel = () => {
      setCurrentPage("import");
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

  return currentPage === "import" ? <ImportContactsPage /> : <ImportContactDetail />;
}