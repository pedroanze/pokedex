import React, { useState, useEffect, useRef } from "react";
import { typeColors } from "../utils/typeColors";

const Filter = ({ onTypeFilter, onRangeFilter }) => {
  const [attackRange, setAttackRange] = useState({ from: "", to: "" });
  const [defenseRange, setDefenseRange] = useState({ from: "", to: "" });
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);
  const [showAttackDropdown, setShowAttackDropdown] = useState(false);
  const [showDefenseDropdown, setShowDefenseDropdown] = useState(false);
  const [selectedType, setSelectedType] = useState("Todos");

  const typeDropdownRef = useRef(null);
  const attackDropdownRef = useRef(null);
  const defenseDropdownRef = useRef(null);

  const pokemonTypes = ["Todos", ...Object.keys(typeColors)];

  // Manejar clics fuera del dropdown para cerrarlos
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        typeDropdownRef.current &&
        !typeDropdownRef.current.contains(event.target)
      ) {
        setShowTypeDropdown(false);
      }
      if (
        attackDropdownRef.current &&
        !attackDropdownRef.current.contains(event.target)
      ) {
        setShowAttackDropdown(false);
      }
      if (
        defenseDropdownRef.current &&
        !defenseDropdownRef.current.contains(event.target)
      ) {
        setShowDefenseDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleTypeSelection = (type) => {
    setSelectedType(type);
    onTypeFilter(type === "Todos" ? "" : type);
    setShowTypeDropdown(false);
  };

  const handleApplyRangeFilter = () => {
    onRangeFilter(attackRange, defenseRange);
    setShowAttackDropdown(false);
    setShowDefenseDropdown(false);
  };

  return (
    <div className="flex flex-row gap-4 mt-4">
      {/* Filtro por Tipo */}
      <div ref={typeDropdownRef} className="relative">
        <button
          onClick={() => setShowTypeDropdown((prev) => !prev)}
          className="text-black bg-[#f5db13] hover:bg-[#f5db13b2] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center"
        >
          {selectedType}
          <svg
            className="w-2.5 h-2.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        {showTypeDropdown && (
          <div className="absolute z-10 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow mt-2">
            <ul className="p-3 space-y-1 text-sm text-gray-700">
              {pokemonTypes.map((type) => (
                <li key={type}>
                  <button
                    onClick={() => handleTypeSelection(type)}
                    className="flex items-center p-2 rounded hover:bg-gray-100 w-full"
                  >
                    {type !== "Todos" && (
                      <span
                        className="w-4 h-4 rounded-full inline-block me-2"
                        style={{ backgroundColor: typeColors[type] }}
                      ></span>
                    )}
                    <span className="capitalize">{type}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Filtro por Rango de Ataque */}
      <div ref={attackDropdownRef} className="relative">
        <button
          onClick={() => setShowAttackDropdown((prev) => !prev)}
          className="text-black bg-[#f5db13] hover:bg-[#f5db13b2] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center"
        >
          Ataque
          <svg
            className="w-2.5 h-2.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        {showAttackDropdown && (
          <div className="absolute z-10 w-64 bg-white divide-y divide-gray-100 rounded-lg shadow mt-2 p-4">
            <div className="flex gap-4">
              <label className="text-sm font-medium text-gray-700">Desde:</label>
              <input
                type="number"
                className="w-full px-2 py-1 border rounded"
                value={attackRange.from}
                onChange={(e) =>
                  setAttackRange({ ...attackRange, from: e.target.value })
                }
              />
            </div>
            <div className="flex gap-4 mt-4">
              <label className="text-sm font-medium text-gray-700">Hasta:</label>
              <input
                type="number"
                className="w-full px-2 py-1 border rounded"
                value={attackRange.to}
                onChange={(e) =>
                  setAttackRange({ ...attackRange, to: e.target.value })
                }
              />
            </div>
            <button
              className="w-full mt-4 px-4 py-2 bg-[#72d576] text-white font-bold rounded hover:bg-[#5baf5e]"
              onClick={handleApplyRangeFilter}
            >
              Aplicar
            </button>
          </div>
        )}
      </div>

      {/* Filtro por Rango de Defensa */}
      <div ref={defenseDropdownRef} className="relative">
        <button
          onClick={() => setShowDefenseDropdown((prev) => !prev)}
          className="text-black bg-[#f5db13] hover:bg-[#f5db13b2] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center"
        >
          Defensa
          <svg
            className="w-2.5 h-2.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        {showDefenseDropdown && (
          <div className="absolute z-10 w-64 bg-white divide-y divide-gray-100 rounded-lg shadow mt-2 p-4">
            <div className="flex gap-4">
              <label className="text-sm font-medium text-gray-700">Desde:</label>
              <input
                type="number"
                className="w-full px-2 py-1 border rounded"
                value={defenseRange.from}
                onChange={(e) =>
                  setDefenseRange({ ...defenseRange, from: e.target.value })
                }
              />
            </div>
            <div className="flex gap-4 mt-4">
              <label className="text-sm font-medium text-gray-700">Hasta:</label>
              <input
                type="number"
                className="w-full px-2 py-1 border rounded"
                value={defenseRange.to}
                onChange={(e) =>
                  setDefenseRange({ ...defenseRange, to: e.target.value })
                }
              />
            </div>
            <button
              className="w-full mt-4 px-4 py-2 bg-[#72d576] text-white font-bold rounded hover:bg-[#5baf5e]"
              onClick={handleApplyRangeFilter}
            >
              Aplicar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
