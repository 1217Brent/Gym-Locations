"use client";

import React from "react";

type SearchBarProps = {
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <div className="w-full max-w-md mx-auto mb-6">
      <input
        type="text"
        placeholder="Search for a restaurant..."
        onChange={onSearch}
        className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366] shadow-sm"
      />
    </div>
  );
}
