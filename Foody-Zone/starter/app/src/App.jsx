import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { useFoodData } from './hooks/useFoodData';
import { useDebounce } from './hooks/useDebounce';
import { useFoodFilter, useFilterState } from './hooks/useFoodFilter';
import Navbar from './components/Navbar/Navbar';
import FoodGrid from './components/FoodGrid/FoodGrid';
import { AppContainer, ErrorMessage, LoadingScreen } from './styles/common.styles';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { data, loading, error } = useFoodData();
  const { selectedFilter, handleFilterChange } = useFilterState();
  
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  
  // Filter food data based on search and filter type
  const filteredData = useFoodFilter(data, debouncedSearchQuery, selectedFilter);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  if (error) {
    return (
      <ThemeProvider theme={theme}>
        <ErrorMessage>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <h2>Oops! Something went wrong</h2>
          <p>{error}</p>
        </ErrorMessage>
      </ThemeProvider>
    );
  }

  if (loading) {
    return (
      <ThemeProvider theme={theme}>
        <LoadingScreen>
          <div className="spinner" />
          <p>Loading your delicious options...</p>
        </LoadingScreen>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Navbar 
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          selectedFilter={selectedFilter}
          onFilterChange={handleFilterChange}
        />
        <FoodGrid foods={filteredData} />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;