import { useState, useEffect, useCallback } from 'react';

const BASE_URL = "https://foody-zone-data.vercel.app";

/**
 * Custom hook to fetch and manage food data
 * @returns {Object} - { data, loading, error, refetch }
 */
export const useFoodData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchFoodData = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const res = await fetch(BASE_URL);
      
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      
      const json = await res.json();
      setData(json);
    } catch (err) {
      setError("Unable to fetch data from server. Please make sure the server is running.");
      console.error('Error fetching food data:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchFoodData();
  }, [fetchFoodData]);

  return { 
    data, 
    loading, 
    error, 
    refetch: fetchFoodData 
  };
};

export { BASE_URL };