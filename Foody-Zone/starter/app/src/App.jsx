import { useEffect, useState } from "react";
import styled from "styled-components";

const BASE_URL = "https://foody-zone-data.vercel.app";

const App = () => {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const res = await fetch(BASE_URL);
        const json = await res.json();
        setLoading(false);
        setData(json);
        setFilteredData(json);
      } catch (error) {
        setError("Unable to Fetch Data");
      }
    };
    fetchFoodData();
  }, []);

  const searchFood = (e) => {
    const searchValue = e.target.value;
    
    if (searchValue === "") {
      setFilteredData(data);
      return;
    }
    const filter = data?.filter((food) => 
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filter);
  };

  const filterFood = (type) => {
    if (type === "all") {
      setFilteredData(data);
      setSelectedBtn("all");
      return;
    }
    const filter = data?.filter((food) => 
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredData(filter);
    setSelectedBtn(type);
  };

  const filterBtns = [
    { name: "All", type: "all" },
    { name: "Breakfast", type: "breakfast" },
    { name: "Lunch", type: "lunch" },
    { name: "Dinner", type: "dinner" },
  ];

  if (error) return <ErrorMessage>{error}</ErrorMessage>;
  if (loading) return <LoadingScreen>Loading your delicious options...</LoadingScreen>;

  return (
    <AppContainer>
      <Navbar>
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
                onChange={searchFood} 
                type="text" 
                placeholder="Search your favorite food..." 
              />
            </SearchWrapper>
          </SearchContainer>
        </NavbarContent>

        <FilterContainer>
          <FilterWrapper>
            {filterBtns.map((value) => (
              <FilterButton
                key={value.name}
                $isSelected={selectedBtn === value.type}
                onClick={() => filterFood(value.type)}
              >
                <span>{value.name}</span>
                {selectedBtn === value.type && <ActiveIndicator />}
              </FilterButton>
            ))}
          </FilterWrapper>
        </FilterContainer>
      </Navbar>

      <FoodCardsSection>
        <FoodCardsGrid>
          {filteredData?.map(({ name, image, text, price }) => (
            <FoodCard key={name}>
              <CardGlow />
              <CardImage>
                <img src={BASE_URL + image} alt={name} />
              </CardImage>
              <CardContent>
                <CardInfo>
                  <FoodName>{name}</FoodName>
                  <FoodDescription>{text}</FoodDescription>
                </CardInfo>
                <PriceButton>
                  <PriceTag>${price.toFixed(2)}</PriceTag>
                </PriceButton>
              </CardContent>
            </FoodCard>
          ))}
        </FoodCardsGrid>
      </FoodCardsSection>
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  min-height: 100vh;
  background: #0a0a0f;
  color: white;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  overflow-x: hidden;
`;

const Navbar = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(10, 10, 15, 0.85);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 67, 67, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
`;

const NavbarContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1.5rem 1rem;
    gap: 1.5rem;
  }
`;

const LogoContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const LogoGlow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(255, 67, 67, 0.3) 0%, transparent 70%);
  filter: blur(20px);
  animation: pulse 2s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }
`;

const LogoText = styled.div`
  position: relative;
  font-size: 2rem;
  font-weight: 900;
  letter-spacing: -0.02em;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .foody {
    background: linear-gradient(135deg, #ff4343 0%, #ff6b6b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .zone {
    background: linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const SearchContainer = styled.div`
  flex: 1;
  max-width: 500px;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 1rem;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  pointer-events: none;
  z-index: 1;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.875rem 1rem 0.875rem 3rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 67, 67, 0.3);
  border-radius: 12px;
  color: white;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  &:focus {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 67, 67, 0.6);
    box-shadow: 0 0 0 3px rgba(255, 67, 67, 0.1);
  }

  &:hover {
    border-color: rgba(255, 67, 67, 0.5);
  }
`;

const FilterContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem 1.5rem;

  @media (max-width: 768px) {
    padding: 0 1rem 1.5rem;
  }
`;

const FilterWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  position: relative;
  padding: 0.75rem 1.75rem;
  background: ${({ $isSelected }) => 
    $isSelected 
      ? 'linear-gradient(135deg, #ff4343 0%, #ff6b6b 100%)' 
      : 'rgba(255, 255, 255, 0.05)'};
  border: 1px solid ${({ $isSelected }) => 
    $isSelected 
      ? 'rgba(255, 67, 67, 0.8)' 
      : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 10px;
  color: white;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;

  span {
    position: relative;
    z-index: 1;
  }

  &:hover {
    background: ${({ $isSelected }) => 
      $isSelected 
        ? 'linear-gradient(135deg, #ff6b6b 0%, #ff4343 100%)' 
        : 'rgba(255, 255, 255, 0.08)'};
    border-color: rgba(255, 67, 67, 0.6);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 67, 67, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 0.65rem 1.5rem;
    font-size: 0.875rem;
  }
`;

const ActiveIndicator = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: white;
  animation: slideIn 0.3s ease;

  @keyframes slideIn {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }
`;

const FoodCardsSection = styled.section`
  min-height: calc(100vh - 200px);
  background: 
    radial-gradient(circle at 20% 50%, rgba(255, 67, 67, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255, 107, 107, 0.05) 0%, transparent 50%),
    #0a0a0f;
  padding: 3rem 2rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const FoodCardsGrid = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;

const FoodCard = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  min-height: 167px;
  transition: all 0.3s ease;
  overflow: hidden;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 67, 67, 0.4);
    box-shadow: 0 8px 30px rgba(255, 67, 67, 0.2);
  }

  &:hover div:first-child {
    opacity: 1;
  }
`;

const CardGlow = styled.div`
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    rgba(255, 67, 67, 0.1) 0%,
    transparent 70%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
`;

const CardImage = styled.div`
  flex-shrink: 0;
  width: 140px;
  height: 140px;
  border-radius: 15px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${FoodCard}:hover & img {
    transform: scale(1.1);
  }
`;

const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 0;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FoodName = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  margin: 0;
  color: white;
  letter-spacing: -0.01em;
`;

const FoodDescription = styled.p`
  font-size: 0.875rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const PriceButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
`;

const PriceTag = styled.button`
  padding: 0.5rem 1.25rem;
  background: linear-gradient(135deg, #ff4343 0%, #ff6b6b 100%);
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(255, 67, 67, 0.3);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(255, 67, 67, 0.5);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-size: 1.25rem;
  color: #ff4343;
  background: #0a0a0f;
`;

const LoadingScreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.8);
  background: #0a0a0f;
`;