import { useState, useMemo } from 'react';

/**
 * Custom hook to handle food filtering logic
 * @param {Array} foodData - Array of food items
 * @param {string} searchQuery - Search query string
 * @param {string} filterType - Filter type (all, breakfast, lunch, dinner)
 * @returns {Array} - Filtered food items
 */
export const useFoodFilter = (foodData, searchQuery, filterType) => {
  return useMemo(() => {
    if (!foodData) return null;

    let filtered = foodData;

    // Apply type filter
    if (filterType !== 'all') {
      filtered = filtered.filter((food) => 
        food.type.toLowerCase() === filterType.toLowerCase()
      );
    }

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter((food) =>
        food.name.toLowerCase().includes(query) ||
        food.text.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [foodData, searchQuery, filterType]);
};

/**
 * Custom hook to manage filter state
 * @returns {Object} - { selectedFilter, setSelectedFilter, handleFilterChange }
 */
export const useFilterState = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const handleFilterChange = (type) => {
    setSelectedFilter(type);
  };

  return {
    selectedFilter,
    setSelectedFilter,
    handleFilterChange,
  };
};