import React, { useState, useEffect } from "react";
import { Input } from "@heroui/input";
import { getAddressFromSearch } from "../api";
import { AddressItem } from "../types";
import {PlaceIcon, SearchIcon} from "@/features/ui";


interface AddressSearchProps {
  onSelect: (address: AddressItem) => void;
}

export const AddressSearch: React.FC<AddressSearchProps> = ({ onSelect }) => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<AddressItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (!search) {
      setResults([]);
      setLoading(false);
      setShowDropdown(false);

      return;
    }
    setLoading(true);
    getAddressFromSearch(search)
      .then((data) => {
        setResults(data.Items || []);
        setShowDropdown((data.Items || []).length > 0);
        setLoading(false);
      })
      .catch((_err) => {
        setError("Failed to fetch addresses");
        setLoading(false);
        setShowDropdown(false);
      });
  }, [search]);

  const handleSelect = (item: AddressItem) => {
    setSearch(item.Text);
    setShowDropdown(false);
    onSelect(item);
  };

  return (
    <div className="relative w-full">
      <Input
        aria-autocomplete="list"
        aria-controls="address-dropdown"
        aria-expanded={showDropdown}
        className="w-full rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all shadow-sm"
        onChange={(e) => {
          const value = e.target.value;

          setSearch(value);
          // Immediately hide dropdown if search is cleared
          if (!value) {
            setResults([]);
            setShowDropdown(false);
          }
          setError("");
        }}
        onFocus={() => {
          // Only show dropdown on focus if we have results AND search is not empty
          if (results.length > 0 && search) setShowDropdown(true);
        }}
        placeholder="Start typing your delivery postcode or address..."
        startContent={
          <SearchIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
        }
        type="text"
        value={search}
      />
      {loading && (
        <div className="absolute left-0 right-0 mt-1 border border-blue-200 rounded-lg shadow-lg p-3 z-20 flex items-center justify-center text-blue-600 animate-pulse bg-content1">
          Loading...
        </div>
      )}
      {!loading && showDropdown && results.length > 0 && (
        <ul
          id="address-dropdown"
          className="absolute left-0 right-0 mt-1 bg-content1 border border-gray-200 rounded-lg shadow-lg z-20 max-h-60 overflow-auto divide-y divide-gray-100"
          role="listbox"
        >
          {results.map((item, idx) => (
            <li
              key={item.Id || idx}
              className="p-3 hover:bg-content2 cursor-pointer transition-colors"
              onClick={() => handleSelect(item)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") handleSelect(item);
              }}
              role="option"
              tabIndex={0}
            >
              <div className="flex items-start gap-3">
                <PlaceIcon
                  className="text-primary flex-shrink-0 mt-1"
                  size={18}
                />
                <div className="flex flex-col">
                  <span className="text-foreground font-medium">
                    {item.Text}
                  </span>
                  <span className="text-foreground-500 text-sm mt-1">
                    {item.Description || (item.Type ? `${item.Type}` : "")}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      {error && <div className="text-danger mt-2 text-sm">{error}</div>}
    </div>
  );
};
