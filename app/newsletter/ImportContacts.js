"use client";

import React, { useState } from 'react';

export default function ImportContacts() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleDownload = () => {
    alert('Downloading sample file...');
  };

  const handleNext = () => {
    if (!selectedFile) {
      alert('Please select a file first');
      return;
    }
    alert('Processing file...');
  };

  const handleCancel = () => {
    setSelectedFile(null);
  };

  return (
    <div className="w-full min-h-screen bg-gray-200">
      <div className="max-w-5xl mx-auto bg-white">
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
                className="bg-teal-500 text-white px-6 py-2 rounded text-sm font-medium hover:bg-teal-600 transition-colors"
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
              <div className="mb-4">
                <label className="text-sm text-gray-700 mb-2 block">
                  Excel File <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  accept=".xlsx,.xls"
                  onChange={handleFileChange}
                  className="text-sm text-gray-600"
                />
              </div>
              <div className="flex gap-4">
                <button
                  onClick={handleNext}
                  className="bg-cyan-500 text-white px-12 py-2 rounded text-sm font-medium hover:bg-cyan-600 transition-colors"
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
}