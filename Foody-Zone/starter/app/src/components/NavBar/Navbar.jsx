import { memo } from 'react';
import FilterButtons from '../FilterButtons/FilterButtons';
import {
  NavbarContainer,
  NavbarContent,
  LogoContainer,
  LogoGlow,
  LogoText,
  SearchContainer,
  SearchWrapper,
  SearchIcon,
  SearchInput,
} from './Navbar.styles';

const Navbar = memo(({ 
  searchQuery, 
  onSearchChange, 
  selectedFilter, 
  onFilterChange 
}) => {
  return (
    <NavbarContainer>
      <NavbarContent>
        <LogoContainer>
          <LogoGlow />
          <LogoText>
            <span className="foody">Foody</span>
            <span className="zone">Zone</span>
          </LogoText>
        </LogoContainer>

        <SearchContainer>
          <SearchWrapper>
            <SearchIcon>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
            </SearchIcon>
            <SearchInput 
              value={searchQuery}
              onChange={onSearchChange}
              type="text" 
              placeholder="Search your favorite food..." 
              aria-label="Search food items"
            />
          </SearchWrapper>
        </SearchContainer>
      </NavbarContent>

      <FilterButtons 
        selectedFilter={selectedFilter}
        onFilterChange={onFilterChange}
      />
    </NavbarContainer>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;