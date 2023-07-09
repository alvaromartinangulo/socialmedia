import { useState } from "react";
import "./Filter.css";

const filterParams = [
  "All Categories",
  "Outerwear",
  "Sweatshirts",
  "T-Shirts & Polos",
  "Bottoms",
  "Sunglasses",
  "Footwear",
  "Headwear",
  "Bags",
  "Accessories"
];

const Filter = () => {
  const [selectedFilters, setSelectedFilters] = useState(new Set(["All Categories"]));
  const [isAllSelected, setIsAllSelected] = useState(true);

  const handleSelect = (filterParam) => {
    switch (filterParam) {
      case "All Categories":
        if (!isAllSelected) {
          setIsAllSelected(true);
          setSelectedFilters(new Set(["All Categories"]));
        }
        break; // Add a break statement here

      default:
        if (selectedFilters.has(filterParam)) {
          const updatedFilters = new Set(selectedFilters);
          updatedFilters.delete(filterParam);
          setSelectedFilters(updatedFilters);

          if (updatedFilters.size === 0) {
            setIsAllSelected(true);
            setSelectedFilters(new Set(["All Categories"]));
          }
        } else {
          const updatedFilters = new Set(selectedFilters);
          updatedFilters.add(filterParam);
          setSelectedFilters(updatedFilters);

          if (isAllSelected) {
            setIsAllSelected(false);
            updatedFilters.delete("All Categories");
            setSelectedFilters(updatedFilters);
          }
        }
    }
  };

  return (
    <div className="Filter">
        <ul> {/* Wrap the list items in a ul element */}
          {filterParams.map((filterParam, id) => {
            const isSelected = selectedFilters.has(filterParam);
            return (
              <li key={id}>
                <button
                  className={isSelected ? "button selected" : "button not-selected"}
                  onClick={() => handleSelect(filterParam)}
                >
                  {filterParam}
                </button>
              </li>
            );
          })}
        </ul>
        </div>
  );
};

export default Filter;
