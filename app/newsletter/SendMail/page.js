"use client";

import React, { useState } from 'react';

export default function SendMail() {
  const [messageType, setMessageType] = useState('template');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [selectedEmail, setSelectedEmail] = useState('');
  const [subject, setSubject] = useState('');

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-8">
      <div className="w-full max-w-8xl mb-40">
        <div className="bg-white border-b border-gray-300 px-8 py-4 flex justify-between items-center rounded-t-lg">
          <h1 className="text-2xl font-normal text-gray-600">Send Mail</h1>
          <div className="flex items-center gap-4">
            <div className="bg-amber-800 text-white px-6 py-2.5 rounded-md flex items-center gap-3 cursor-pointer">
              <span className="text-sm">Remaining Emails:</span>
              <span className="bg-white text-amber-800 px-3 py-1 rounded font-semibold text-sm">455</span>
            </div>
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2.5 rounded-md text-sm font-medium cursor-pointer">
              Topup Now
            </button>
          </div>
        </div>

        <div className="bg-white p-10 rounded-b-lg shadow-lg">
          <div className="grid grid-cols-[200px_1fr] gap-6 items-start mb-8">
            <label className="text-gray-500 text-base font-medium pt-1">
              Choose Message Type
            </label>
            <div className="flex items-center gap-8">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="messageType"
                  value="template"
                  checked={messageType === 'template'}
                  onChange={(e) => setMessageType(e.target.value)}
                  className="w-5 h-5 accent-cyan-500 cursor-pointer"
                />
                <span className="text-gray-600 text-base">Template</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="messageType"
                  value="custom"
                  checked={messageType === 'custom'}
                  onChange={(e) => setMessageType(e.target.value)}
                  className="w-5 h-5 accent-cyan-500 cursor-pointer"
                />
                <span className="text-gray-600 text-base">Custom Message</span>
              </label>
            </div>
          </div>

          <div className="grid grid-cols-[200px_1fr] gap-6 items-center mb-8">
            <label className="text-gray-500 text-base font-medium">
              Select Product
            </label>
            <select
              value={selectedProduct}
              onChange={(e) => setSelectedProduct(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-600 bg-white cursor-pointer focus:outline-none focus:border-gray-400"
            >
              <option value="">Select Products</option>
              <option value="product1">Product 1</option>
              <option value="product2">Product 2</option>
              <option value="product3">Product 3</option>
            </select>
          </div>

          <div className="grid grid-cols-[200px_1fr_auto] gap-6 items-center mb-8">
            <label className="text-gray-500 text-base font-medium">
              From Email
            </label>
            <select
              value={selectedEmail}
              onChange={(e) => setSelectedEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-600 bg-white cursor-pointer focus:outline-none focus:border-gray-400"
            >
              <option value="">Select Email</option>
              <option value="email1@example.com">email1@example.com</option>
              <option value="email2@example.com">email2@example.com</option>
              <option value="email3@example.com">email3@example.com</option>
            </select>
            <div className="flex gap-2">
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 w-12 h-12 rounded-md flex items-center justify-center text-2xl font-light">
                +
              </button>
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 w-12 h-12 rounded-md flex items-center justify-center text-2xl font-light">
                −
              </button>
            </div>
          </div>

          <div className="grid grid-cols-[200px_1fr] gap-6 items-center mb-10">
            <label className="text-gray-500 text-base font-medium">
              Subject
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-600 placeholder-gray-400 focus:outline-none focus:border-gray-400"
            />
          </div>

          <div className="grid grid-cols-[200px_1fr] gap-6">
            <div></div>
            <div className="flex gap-4">
              <button 
                onClick={() => alert('Single mail sent!')}
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-md text-base font-normal cursor-pointer"
              >
                Send single Mail
              </button>
              <button 
                onClick={() => alert('Entire list contacted!')}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md text-base font-normal cursor-pointer"
              >
                Send Entire List
              </button>
              <button 
                onClick={() => alert('Group contact notified!')}
                className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-md text-base font-normal cursor-pointer"
              >
                Send Group Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}