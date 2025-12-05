"use client";

import React, { useState } from "react";
import { Trash2 } from "lucide-react";

export default function FromEmailList() {
    const [search, setSearch] = useState("");
    const [selectedRows, setSelectedRows] = useState([]);
    const [selectAll, setSelectAll] = useState(false);

    const emailData = [
        { id: 1, name: "Pratik", email: "radhu.pratik2118@gmail.com" },
        { id: 2, name: "meghavi", email: "kshatriya0meghavi@gmail.com" },
        { id: 3, name: "Pratik", email: "and.test.21990@gmail.com" }
    ];

    const handleSelectAll = () => {
        if (selectAll) {
            setSelectedRows([]);
        } else {
            setSelectedRows(emailData.map(item => item.id));
        }
        setSelectAll(!selectAll);
    };

    const handleSelectRow = (id) => {
        if (selectedRows.includes(id)) {
            setSelectedRows(selectedRows.filter(rowId => rowId !== id));
        } else {
            setSelectedRows([...selectedRows, id]);
        }
    };

    return (
        <div className="w-full h-screen bg-[#e5e7eb] py-10 overflow-hidden">
            <div className="max-w-[1480px] mx-auto h-full px-4 flex flex-col">
                
                <div className="bg-white rounded-lg shadow-md flex flex-col h-full">
                    
                    {/* Header */}
                    <div className="bg-white border-b border-gray-200 px-6 py-4 rounded-t-lg">
                        <h1 className="text-xl font-normal text-gray-600">
                            From Email <strong>List</strong>
                        </h1>
                    </div>

                    {/* Scrollable Content */}
                    <div className="bg-white px-6 py-6 overflow-y-auto flex-1">

                        <div className="flex justify-end gap-3 mb-6">
                            <input
                                type="text"
                                placeholder="Display Name/Email"
                                className="border border-gray-300 rounded px-4 py-2 w-64 text-sm text-gray-500 focus:outline-none focus:border-gray-400"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <button className="bg-[#0ea5e9] text-white px-8 py-2 rounded text-sm hover:bg-[#0284c7]">
                                Search
                            </button>
                        </div>

                        <div className="border border-gray-200 overflow-hidden rounded">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-[#dee2e6]">
                                        <th className="py-3 px-4 text-left w-12 border-r border-b border-gray-300">
                                            <input
                                                type="checkbox"
                                                className="w-4 h-4 cursor-pointer"
                                                checked={selectAll}
                                                onChange={handleSelectAll}
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
                                        <th className="py-3 px-4 text-right text-xs font-semibold text-[#6c757d] uppercase tracking-wider border-b border-gray-300">
                                            DELETE
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="bg-white">
                                    {emailData.map((item) => (
                                        <tr key={item.id} className="hover:bg-gray-50">
                                            <td className="py-3 px-4 border-r border-b border-gray-300">
                                                <input
                                                    type="checkbox"
                                                    className="w-4 h-4 cursor-pointer"
                                                    checked={selectedRows.includes(item.id)}
                                                    onChange={() => handleSelectRow(item.id)}
                                                />
                                            </td>
                                            <td className="py-3 px-4 text-sm text-gray-700 border-r border-b border-gray-300">
                                                {item.id}
                                            </td>
                                            <td className="py-3 px-4 text-sm text-gray-700 border-r border-b border-gray-300">
                                                {item.name}
                                            </td>
                                            <td className="py-3 px-4 text-sm text-gray-700 border-r border-b border-gray-300">
                                                {item.email}
                                            </td>
                                            <td className="py-3 px-4 text-right border-b border-gray-300">
                                                <button className="text-gray-700 hover:text-red-600">
                                                    <Trash2 size={18} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-4">
                            <button className="bg-[#dc3545] text-white px-6 py-2 rounded text-sm hover:bg-[#c82333]">
                                Delete
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
