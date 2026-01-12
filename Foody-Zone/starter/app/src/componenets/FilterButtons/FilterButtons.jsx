import { memo } from 'react';
import {
  FilterContainer,
  FilterWrapper,
  FilterButton,
  ActiveIndicator,
} from './FilterButtons.styles';

const FILTER_OPTIONS = [
  { name: "All", type: "all" },
  { name: "Breakfast", type: "breakfast" },
  { name: "Lunch", type: "lunch" },
  { name: "Dinner", type: "dinner" },
];

const FilterButtons = memo(({ selectedFilter, onFilterChange }) => {
  return (
    <FilterContainer>
      <FilterWrapper>
        {FILTER_OPTIONS.map(({ name, type }) => (
          <FilterButton
            key={type}
            $isSelected={selectedFilter === type}
            onClick={() => onFilterChange(type)}
            aria-pressed={selectedFilter === type}
            aria-label={`Filter by ${name}`}
          >
            <span>{name}</span>
            {selectedFilter === type && <ActiveIndicator />}
          </FilterButton>
        ))}
      </FilterWrapper>
    </FilterContainer>
  );
});

FilterButtons.displayName = 'FilterButtons';

export default FilterButtons;