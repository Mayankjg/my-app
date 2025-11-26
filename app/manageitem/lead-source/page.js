"use client";

import { useState } from "react";
import { FaTrash, FaPen } from "react-icons/fa";

export default function LeadSource() {
  const [leadSources, setLeadSources] = useState([
    { id: 1, name: "Facebook" },
    { id: 2, name: "Google" },
    { id: 3, name: "Instagram" },
    { id: 4, name: "Internet" },
  ]);

  const [editingId, setEditingId] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [search, setSearch] = useState("");

  const [showAddForm, setShowAddForm] = useState(false);
  const [newLeadSource, setNewLeadSource] = useState("");

  const handleAddLeadSource = () => {
    if (!newLeadSource.trim()) {
      alert("Please enter lead source");
      return;
    }

    const newItem = {
      id:
        leadSources.length > 0
          ? leadSources[leadSources.length - 1].id + 1
          : 1,
      name: newLeadSource.trim(),
    };

    setLeadSources([...leadSources, newItem]);
    setNewLeadSource("");
    setShowAddForm(false);
  };

  const handleUpdate = (id) => {
    setLeadSources((prev) =>
      prev.map((item) => (item.id === id ? { ...item, name: editedName } : item))
    );
    setEditingId(null);
  };

  const handleDelete = (id) => {
    setLeadSources((prev) => prev.filter((l) => l.id !== id));
  };

  return (
    <div className="bg-[#f9f9f9] min-h-screen flex justify-center py-8">
      <div className="bg-white border border-[#d9d9d9] w-[95%] md:w-[90%] p-6 rounded-lg shadow-sm">

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-700">Lead Source</h2>

          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded"
          >
            {showAddForm ? "Close" : "Add Lead Source"}
          </button>
        </div>

        {showAddForm && (
          <div className="border border-gray-300 p-5 rounded mb-6 bg-[#f7f9fb]">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">
              Add New Lead Source
            </h3>

            <label className="block mb-2 text-sm text-gray-700">
              Lead Source Name
            </label>
            <input
              type="text"
              value={newLeadSource}
              onChange={(e) => setNewLeadSource(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded text-black mb-2"
              placeholder="Enter lead source name"
            />

            <div className="flex justify-end gap-3">
              <button
                className="bg-gray-300 hover:bg-gray-400 px-5 py-2 rounded"
                onClick={() => setShowAddForm(false)}
              >
                Cancel
              </button>

              <button
                className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded"
                onClick={handleAddLeadSource}
              >
                Save
              </button>
            </div>
          </div>
        )}

        <div className="flex justify-end mb-4 space-x-2">
          <input
            type="text"
            placeholder="Lead Source"
            className="border border-gray-300 px-3 py-2 rounded w-60 text-gray-700 placeholder-gray-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded">
            Search
          </button>
        </div>

        <table className="w-full border-collapse text-gray-700">
          <thead>
            <tr className="bg-gray-200 text-gray-800 font-medium">
              <th className="border px-3 py-2">
                <input type="checkbox" />
              </th>
              <th className="border px-3 py-2">SR. NO.</th>
              <th className="border px-3 py-2">LEAD SOURCE</th>
              <th className="border px-3 py-2">EDIT</th>
              <th className="border px-3 py-2">DELETE</th>
              <th className="border px-3 py-2">VIEW LEADS</th>
            </tr>
          </thead>

          <tbody>
            {leadSources
              .filter((l) =>
                l.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((lead, index) => (
                <tr
                  key={lead.id}
                  className="text-center hover:bg-gray-50 transition-colors"
                >
                  <td className="border px-3 py-2">
                    <input type="checkbox" />
                  </td>

                  <td className="border px-3 py-2">{index + 1}</td>

                  <td className="border px-3 py-2">
                    {editingId === lead.id ? (
                      <input
                        value={editedName}
                        onChange={(e) => setEditedName(e.target.value)}
                        className="border px-2 py-1 w-full rounded text-gray-700"
                      />
                    ) : (
                      <span>{lead.name}</span>
                    )}
                  </td>

                  <td className="border px-3 py-2">
                    {editingId === lead.id ? (
                      <>
                        <button
                          className="text-blue-600 font-semibold mr-2"
                          onClick={() => handleUpdate(lead.id)}
                        >
                          Update
                        </button>
                        <button
                          className="text-red-600 font-semibold"
                          onClick={() => setEditingId(null)}
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <button
                        className="text-gray-600 hover:text-blue-600"
                        onClick={() => {
                          setEditingId(lead.id);
                          setEditedName(lead.name);
                        }}
                      >
                        <FaPen />
                      </button>
                    )}
                  </td>

                  <td className="border px-3 py-2">
                    <button
                      className="text-red-600 hover:text-red-700"
                      onClick={() => handleDelete(lead.id)}
                    >
                      <FaTrash />
                    </button>
                  </td>

                  <td className="border px-3 py-2">
                    <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded">
                      View Leads
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        <div className="mt-4">
          <button className="bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
