import { useEffect, useState } from "react";
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
export const categoriesMap = new Map([
  ["hoodie", "Sweatshirts"],
  ["crewneck", "Sweatshirts"],
  ["swimwear", "Accessories"],
  ["t-shirt", "T-Shirts & Polos"],
  ["jewelry", "Accessories"],
  ["headwear", "Headwear"],
  ["hoodie", "Sweatshirts"],
  ["accessories", "Accessories"],
  ["bottoms", "Bottoms"],
  ["shirts & polo", "T-shirts & Polos"],
  ["objects", "Accessories"],
  ["knitwear", "Sweatshirts"],
  ["pantalones", "Bottoms"],
  ["accesorios para la cabeza", "Headwear"],
])

const Filter = ({currentFilter}) => {
  const [selectedFilters, setSelectedFilters] = useState(new Set(["All Categories"]));
  const [isAllSelected, setIsAllSelected] = useState(true);
  const handleSelect = (filterParam) => {
    switch (filterParam) {
      case "All Categories":
        if (!isAllSelected) {
          const updatedFilters = new Set(["All Categories"]);
          setIsAllSelected(true);
          setSelectedFilters(updatedFilters);
          currentFilter(updatedFilters)
        }
        break; // Add a break statement here

      default:
        if (selectedFilters.has(filterParam)) {
          const updatedFilters = new Set(selectedFilters);
          updatedFilters.delete(filterParam);
          if (updatedFilters.size === 0) {
            setIsAllSelected(true);
            updatedFilters.add("All Categories")
          }
          setSelectedFilters(updatedFilters);
          currentFilter(updatedFilters)

        } else {
          const updatedFilters = new Set(selectedFilters);
          updatedFilters.add(filterParam);

          if (isAllSelected) {
            setIsAllSelected(false);
            updatedFilters.delete("All Categories");
          }
          setSelectedFilters(updatedFilters);
          currentFilter(updatedFilters)
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
