"use client";

import React, { useState } from 'react';

export default function AdminProfile() {
    const [formData, setFormData] = useState({
        userName: '',
        firstName: '',
        lastName: '',
        designation: '',
        country: '',
        countryCode: '',
        contactNo: '',
        gender: '',
        profileImage: null
    });

    const [imagePreview, setImagePreview] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setFormData(prev => ({ ...prev, profileImage: file }));

        const reader = new FileReader();
        reader.onloadend = () => setImagePreview(reader.result);
        reader.readAsDataURL(file);
    };

    const handleSave = () => {
        console.log('Form saved:', formData);
        alert('Profile updated successfully!');
    };

    const handleCancel = () => {
        if (confirm('Unsaved changes will be lost. Continue?')) {
            console.log('Form cancelled');
        }
    };

    const handleChangePassword = () => {
        console.log('Change password clicked');
    };

    return (
        <div className="w-full h-screen bg-gray-50 overflow-y-auto">
            <div className="py-2 md:py-4">
                <div className="max-w-7xl mx-auto px-2 sm:px-4">
                    <div className="bg-white rounded-lg shadow-sm">
                        
                        <div className="border-b border-gray-200 px-4 sm:px-6 py-2 sm:py-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                            <h1 className="text-lg sm:text-xl font-normal text-gray-700">
                                Admin <span className="font-semibold">Profile</span>
                            </h1>
                            <button
                                onClick={handleChangePassword}
                                className="w-full sm:w-auto px-6 py-2 text-white bg-gray-700 rounded hover:bg-gray-800"
                            >
                                Change Password
                            </button>
                        </div>

                        <div className="p-3 sm:p-4 md:p-6">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-10 mb-3 sm:mb-4">
                                <div className="flex gap-3 sm:gap-100">
                                    <div className="w-32">
                                        <label className="block text-sm text-gray-600 mb-2">User Name</label>
                                        <input
                                            type="text"
                                            name="userName"
                                            value={formData.userName}
                                            onChange={handleInputChange}
                                            placeholder="User Name"
                                            className="w-100 text-black px-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:border-gray-400"
                                        />
                                    </div>

                                    <div className="flex-1">
                                        <label className="block text-sm text-gray-600 mb-2 flex items-center gap-2">
                                            Email
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </label>
                                        <div className="text-gray-600 py-2.5">and.test.21990@gmail.com</div>
                                    </div>
                                </div>

                                <div className="flex gap-47 items-start">
                                    <div className="flex gap-3 sm:gap-2"></div>
                                    <div className="flex flex-col items-center gap-2">
                                        <label className="block text-sm text-gray-600">Profile Image</label>
                                        <div className="w-16 h-16 border border-gray-300 rounded overflow-hidden flex items-center justify-center flex-shrink-0">
                                            {imagePreview ? (
                                                <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                                            ) : (
                                                <span className="text-gray-300 text-xs">No image</span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="relative mt-13">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                            className="hidden"
                                            id="profileImageInput"
                                        />
                                        <label
                                            htmlFor="profileImageInput"
                                            className="cursor-pointer inline-block px-4 py-2 border border-gray-300 rounded text-xs bg-white text-gray-700 hover:bg-gray-50"
                                        >
                                            Choose Image
                                        </label>
                                        {formData.profileImage && (
                                            <span className="ml-2 text-xs text-gray-600">
                                                {formData.profileImage.name}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* First Name & Last Name with Gender */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                                <div>
                                    <label className="block text-sm text-gray-600 mb-2">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        placeholder="First Name"
                                        className="w-100 text-black px-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:border-gray-400"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm text-gray-600 mb-2">Last Name</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            placeholder="Last Name"
                                            className="w-full text-black px-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:border-gray-400"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm text-gray-600 mb-2">Gender</label>
                                        <div className="flex gap-4 pt-2">
                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="gender"
                                                    value="male"
                                                    checked={formData.gender === 'male'}
                                                    onChange={handleInputChange}
                                                    className="w-4 h-4 text-cyan-500"
                                                />
                                                <span className="text-gray-700 text-sm">Male</span>
                                            </label>
                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="gender"
                                                    value="female"
                                                    checked={formData.gender === 'female'}
                                                    onChange={handleInputChange}
                                                    className="w-4 h-4 text-cyan-500"
                                                />
                                                <span className="text-gray-700 text-sm">Female</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Designation & Country */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                                <div>
                                    <label className="block text-sm text-gray-600 mb-2">Designation</label>
                                    <input
                                        type="text"
                                        name="designation"
                                        value={formData.designation}
                                        onChange={handleInputChange}
                                        placeholder="Designation"
                                        className="w-100 text-black px-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:border-gray-400"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-600 mb-2">Country</label>
                                    <select
                                        name="country"
                                        value={formData.country}
                                        onChange={handleInputChange}
                                        className="w-50 text-black px-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:border-gray-400"
                                    >
                                        <option value="">Select Country</option>
                                        <option value="India">India</option>
                                        <option value="United States">United States</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="Canada">Canada</option>
                                        <option value="Australia">Australia</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                                <div className="flex gap-3 sm:gap-23">
                                    <div className="w-32">
                                        <label className="block text-sm text-gray-600 mb-2">Country Code</label>
                                        <input
                                            type="text"
                                            name="countryCode"
                                            value={formData.countryCode}
                                            onChange={handleInputChange}
                                            placeholder="+91"
                                            className="w-45 text-black px-4 py-2.5 border border-gray-300 rounded bg-gray-100 focus:outline-none"
                                            readOnly
                                        />
                                    </div>

                                    <div className="flex-1">
                                        <label className="block text-sm text-gray-600 mb-2">Contact No</label>
                                        <input
                                            type="tel"
                                            name="contactNo"
                                            value={formData.contactNo}
                                            onChange={handleInputChange}
                                            placeholder="Contact No"
                                            className="w-45 text-black px-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:border-gray-400"
                                        />
                                    </div>
                                </div>

                                <div></div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="border-t bg-[#e5e9ec] border-gray-200 px-4 sm:px-6 py-2 sm:py-3 flex flex-col-reverse sm:flex-row justify-end gap-3">
                            <button
                                onClick={handleCancel}
                                className="w-full sm:w-auto px-6 py-2 text-gray-600 bg-white border border-gray-300 rounded hover:bg-gray-50"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                className="w-full sm:w-auto px-8 py-2 text-white bg-cyan-500 rounded hover:bg-cyan-600"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}