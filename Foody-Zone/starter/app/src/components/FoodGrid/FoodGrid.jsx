import { memo } from 'react';
import FoodCard from '../FoodCard/FoodCard';
import { FoodGridSection, GridContainer, EmptyState } from './FoodGrid.styles';

const FoodGrid = memo(({ foods }) => {
  if (!foods || foods.length === 0) {
    return (
      <FoodGridSection>
        <GridContainer>
          <EmptyState>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M16 16s-1.5-2-4-2-4 2-4 2"/>
              <line x1="9" y1="9" x2="9.01" y2="9"/>
              <line x1="15" y1="9" x2="15.01" y2="9"/>
            </svg>
            <p>No food items found. Try a different search or filter!</p>
          </EmptyState>
        </GridContainer>
      </FoodGridSection>
    );
  }

  return (
    <FoodGridSection>
      <GridContainer>
        {foods.map((food) => (
          <FoodCard
            key={`${food.name}-${food.price}`}
            name={food.name}
            image={food.image}
            text={food.text}
            price={food.price}
          />
        ))}
      </GridContainer>
    </FoodGridSection>
  );
});

FoodGrid.displayName = 'FoodGrid';

export default FoodGrid;