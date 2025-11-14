"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddSalespersonForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    designation: '',
    country: '',
    countryCode: '',
    contactNo: '',
    profileImage: null
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        profileImage: file
      }));
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.userName.trim()) {
      newErrors.userName = 'User Name is required';
    }

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First Name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.designation.trim()) {
      newErrors.designation = 'Designation is required';
    }

    if (!formData.country) {
      newErrors.country = 'Please select a country';
    }

    if (!formData.contactNo.trim()) {
      newErrors.contactNo = 'Contact Number is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!validateForm()) {
      alert('Please fill in all required fields correctly.');
      return;
    }

    const newSalesperson = {
      id: Date.now(),
      username: formData.userName,
      firstname: formData.firstName,
      lastname: formData.lastName,
      email: formData.email,
      designation: formData.designation,
      country: formData.country,
      contact: `${formData.countryCode ? formData.countryCode + ' ' : ''}${formData.contactNo}`,
      profileImage: imagePreview || '/default-avatar.png'
    };

    const existingSalespersons = JSON.parse(localStorage.getItem('salespersons') || '[]');
    existingSalespersons.push(newSalesperson);
    localStorage.setItem('salespersons', JSON.stringify(existingSalespersons));

    alert('Salesperson saved successfully!');
    router.push('/managesalesperson');
  };

  const handleCancel = () => {
    if (confirm('Are you sure you want to cancel? All unsaved changes will be lost.')) {
      router.push('/managesalesperson');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm">
        {/* Header */}
        <div className="border-b border-gray-200 px-6 py-4">
          <h1 className="text-xl font-normal text-gray-700">
            Add <span className="font-semibold">Salesperson</span>
          </h1>
        </div>

        {/* Form Content */}
        <div className="p-6 md:p-8">
          {/* Row 1: User Name and Profile Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-6">
            <div>
              <label className="block text-sm text-gray-600 mb-2">
                User Name*
              </label>
              <input
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleInputChange}
                placeholder="User Name"
                className={`w-full px-4 py-2.5 border ${errors.userName ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-700`}
              />
              {errors.userName && <p className="text-red-500 text-xs mt-1">{errors.userName}</p>}
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Profile Image
              </label>
              <div className="flex items-start gap-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border file:border-gray-300 file:text-sm file:bg-white file:text-gray-700 hover:file:bg-gray-50 cursor-pointer"
                />
                <div className="w-28 h-28 border border-gray-300 rounded bg-white flex items-center justify-center overflow-hidden flex-shrink-0">
                  {imagePreview ? (
                    <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-gray-300 text-xs">No image</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: First Name and Last Name */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-6">
            <div>
              <label className="block text-sm text-gray-600 mb-2">
                First Name*
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name"
                className={`w-full px-4 py-2.5 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-700`}
              />
              {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Last Name*
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name"
                className={`w-full px-4 py-2.5 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-700`}
              />
              {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
            </div>
          </div>

          {/* Row 3: Email and Designation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-6">
            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Email*
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className={`w-full px-4 py-2.5 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-700`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Designation*
              </label>
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleInputChange}
                placeholder="Designation"
                className={`w-full px-4 py-2.5 border ${errors.designation ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-700`}
              />
              {errors.designation && <p className="text-red-500 text-xs mt-1">{errors.designation}</p>}
            </div>
          </div>

          {/* Row 4: Country, Country Code and Contact No */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Country*
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className={`w-full px-4 py-2.5 border ${errors.country ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-500 bg-white`}
              >
                <option value="">Select Country</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Canada">Canada</option>
                <option value="India">India</option>
                <option value="Australia">Australia</option>
              </select>
              {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Country Code
                </label>
                <input
                  type="text"
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleInputChange}
                  placeholder="Code"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Contact No*
                </label>
                <input
                  type="tel"
                  name="contactNo"
                  value={formData.contactNo}
                  onChange={handleInputChange}
                  placeholder="Contact No"
                  className={`w-full px-4 py-2.5 border ${errors.contactNo ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-700`}
                />
                {errors.contactNo && <p className="text-red-500 text-xs mt-1">{errors.contactNo}</p>}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="border-t bg-[#e5e9ec] border-gray-200 px-6 py-4 flex justify-end gap-3">
          <button
            onClick={handleSave}
            className="px-8 py-2 text-white bg-cyan-500 rounded hover:bg-cyan-600 transition-colors"
          >
            Save
          </button>
          <button
            onClick={handleCancel}
            className="px-6 py-2 text-gray-600 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}