"use client";

import React, { useState } from 'react';

export default function SendMail() {
  const [messageType, setMessageType] = useState('template'); 
  const [selectedProduct, setSelectedProduct] = useState('');
  const [selectedEmail, setSelectedEmail] = useState('');
  const [subject, setSubject] = useState('');

  const handleProductChange = (event) => {
    setSelectedProduct(event.target.value);
  };

  const handleEmailChange = (event) => {
    setSelectedEmail(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleSendSingleMail = () => {
    console.log('Sending single mail...');
    alert('Single mail sent!');
  };

  const handleSendEntireList = () => {
    console.log('Sending to entire list...');
    alert('Entire list contacted!');
  };

  const handleSendGroupContact = () => {
    console.log('Sending to group contact...');
    alert('Group contact notified!');
  };

  return (
    <div className="bg-gray-200 min-h-screen p-4 sm:p-6 md:p-8 flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white shadow-sm rounded-t-lg border-b border-gray-300 px-4 sm:px-6 md:px-8 py-3 flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-normal text-gray-700">Send Mail</h1>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Remaining Emails:</span>
          <span className="text-sm font-semibold text-gray-800 bg-gray-100 px-3 py-1 rounded border border-gray-300 shadow-inner">455</span>
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded text-xs sm:text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75">
            Topup Now
          </button>
        </div>
      </div>

      <div className="w-full max-w-4xl bg-white rounded-b-lg shadow-md px-4 sm:px-6 md:px-8 py-6">
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Choose Message Type
          </label>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <input
                type="radio"
                id="template"
                name="messageType"
                value="template"
                checked={messageType === 'template'}
                onChange={() => setMessageType('template')}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <label htmlFor="template" className="ml-2 text-sm text-gray-700">Template</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="custom"
                name="messageType"
                value="custom"
                checked={messageType === 'custom'}
                onChange={() => setMessageType('custom')}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <label htmlFor="custom" className="ml-2 text-sm text-gray-700">Custom Message</label>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="product-select" className="block text-sm font-semibold text-gray-700 mb-2">
            Select Product
          </label>
          <div className="relative">
            <select
              id="product-select"
              value={selectedProduct}
              onChange={handleProductChange}
              className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-700"
            >
              <option value="">Select Products</option>
              <option value="product1">Product 1</option>
              <option value="product2">Product 2</option>
              <option value="product3">Product 3</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.646 7.354a.75.75 0 011.06 1.06l-6.177 6.177a.75.75 0 01-1.06 0L3.354 8.414a.75.75 0 011.06-1.06l4.878 4.879z"/></svg>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="email-select" className="block text-sm font-semibold text-gray-700 mb-2">
            From Email
          </label>
          <div className="flex items-center space-x-2"> 
            <div className="relative flex-grow"> 
              <select
                id="email-select"
                value={selectedEmail}
                onChange={handleEmailChange}
                className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-700"
              >
                <option value="">Select Email</option>
                <option value="email1@example.com">email1@example.com</option>
                <option value="email2@example.com">email2@example.com</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.646 7.354a.75.75 0 011.06 1.06l-6.177 6.177a.75.75 0 01-1.06 0L3.354 8.414a.75.75 0 011.06-1.06l4.878 4.879z"/></svg>
              </div>
            </div>
            <button className="text-gray-600 border border-gray-300 rounded p-1 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 3a1 1 0 011 1 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd"></path></svg>
            </button>
            <button className="text-gray-600 border border-gray-300 rounded p-1 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 10a1 1 0 011-1-1h10a1 1 0 110 2H3a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="subject-input" className="block text-sm font-semibold text-gray-700 mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject-input"
            value={subject}
            onChange={handleSubjectChange}
            placeholder="Subject" 
            className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
          />
        </div>

        <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
          <button
            onClick={handleSendSingleMail}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded text-xs flex items-center space-x-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            <span>Send single Mail</span>
          </button>
          <button
            onClick={handleSendEntireList}
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded text-xs flex items-center space-x-2 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
          >
            <span>Send Entire List</span>
          </button>
          <button
            onClick={handleSendGroupContact}
            className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded text-xs flex items-center space-x-2 shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
          >
            <span>Send Group Contact</span>
          </button>
        </div>
      </div>
    </div>
  );
}
