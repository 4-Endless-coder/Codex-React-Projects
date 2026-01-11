import { useEffect, useState } from "react";
import styled from "styled-components";

export const BASE_URL = "https://foody-zone-data.vercel.app";

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
    
    if(searchValue === "") {
      setFilteredData(data);
      return;
    }
    const filter = data?.filter((food) => 
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filter);
  };

  const filterFood = (type) => {
    if(type === "all") {
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
  if (loading) return <LoadingSpinner><div className="spinner"></div></LoadingSpinner>;

  return (
    <AppWrapper>
      <Container>
        <TopContainer>
          <Logo>
            {/* <svg width="182" height="30" viewBox="0 0 182 30" fill="none">
              <path d="M2.21729e-05 23.2727V-2.28882e-05H15.4091V4.0568H4.92048V9.60225H14.3864V13.6591H4.92048V23.2727H2.21729e-05Z" fill="white"/>
              <path d="M26.5142 23.6136C24.7491 23.6136 23.2226 23.2386 21.9347 22.4886C20.6544 21.731 19.6657 20.678 18.9688 19.3295C18.2718 17.9735 17.9233 16.4015 17.9233 14.6136C17.9233 12.8106 18.2718 11.2348 18.9688 9.88634C19.6657 8.53028 20.6544 7.47725 21.9347 6.72725C23.2226 5.96967 24.7491 5.59089 26.5142 5.59089C28.2794 5.59089 29.8021 5.96967 31.0824 6.72725C32.3703 7.47725 33.3627 8.53028 34.0597 9.88634C34.7567 11.2348 35.1051 12.8106 35.1051 14.6136C35.1051 16.4015 34.7567 17.9735 34.0597 19.3295C33.3627 20.678 32.3703 21.731 31.0824 22.4886C29.8021 23.2386 28.2794 23.6136 26.5142 23.6136Z" fill="#FF6B6B"/>
              <path d="M46.1392 23.6136C44.3741 23.6136 42.8476 23.2386 41.5597 22.4886C40.2794 21.731 39.2907 20.678 38.5938 19.3295C37.8968 17.9735 37.5483 16.4015 37.5483 14.6136C37.5483 12.8106 37.8968 11.2348 38.5938 9.88634C39.2907 8.53028 40.2794 7.47725 41.5597 6.72725C42.8476 5.96967 44.3741 5.59089 46.1392 5.59089C47.9044 5.59089 49.4271 5.96967 50.7074 6.72725C51.9953 7.47725 52.9877 8.53028 53.6847 9.88634C54.3817 11.2348 54.7301 12.8106 54.7301 14.6136C54.7301 16.4015 54.3817 17.9735 53.6847 19.3295C52.9877 20.678 51.9953 21.731 50.7074 22.4886C49.4271 23.2386 47.9044 23.6136 46.1392 23.6136Z" fill="#FF6B6B"/>
              <path d="M64.3097 23.5568C62.9839 23.5568 61.7832 23.2159 60.7074 22.5341C59.6392 21.8447 58.7907 20.8333 58.162 19.5C57.5407 18.1591 57.2301 16.5151 57.2301 14.5682C57.2301 12.5682 57.5521 10.9053 58.196 9.57952C58.84 8.24619 59.696 7.24998 60.7642 6.59089C61.84 5.92422 63.018 5.59089 64.2983 5.59089Z" fill="white"/>
            </svg> */}
            <GradientText>Foody Zone</GradientText>
          </Logo>

          <SearchBar>
            <SearchIcon>🔍</SearchIcon>
            <input 
              onChange={searchFood} 
              type="text" 
              placeholder="Search your favorite food..." 
            />
          </SearchBar>
        </TopContainer>

        <FilterContainer>
          {filterBtns.map((value) => (
            <FilterButton
              $isSelected={selectedBtn === value.type}
              key={value.name}
              onClick={() => filterFood(value.type)}
            >
              {value.name}
            </FilterButton>
          ))}
        </FilterContainer>
      </Container>

      <FoodCardContainer>
        <BackgroundOverlay />
        <Container style={{ position: 'relative', zIndex: 1 }}>
          <FoodCards>
            {filteredData?.map(({name, image, text, price}) => (
              <FoodCard key={name}>
                <ImageWrapper>
                  <img src={BASE_URL + image} alt={name} />
                  <PriceTag>${price.toFixed(2)}</PriceTag>
                </ImageWrapper>
                <CardContent>
                  <FoodName>{name}</FoodName>
                  <FoodDescription>{text}</FoodDescription>
                  <OrderButton>
                    Order Now
                    <span>→</span>
                  </OrderButton>
                </CardContent>
              </FoodCard>
            ))}
          </FoodCards>
        </Container>
      </FoodCardContainer>
    </AppWrapper>
  );
};

export default App;

// Styled Components
const AppWrapper = styled.div`
  min-height: 100%;
  background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  color: white;
  overflow-x: hidden;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
`;

const TopContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0;
  gap: 24px;
  animation: fadeInDown 0.6s ease-out;
  flex-wrap: wrap;

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 24px 0;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 12px 24px;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  // svg {
  //   filter: drop-shadow(0 4px 12px rgba(255, 107, 107, 0.3));
  //   transition: transform 0.3s ease;
  // }

  &:hover svg {
    transform: scale(1.05) rotate(-2deg);
  }
`;

const GradientText = styled.span`
  font-size: 24px;
  font-weight: 700;
  background: linear-gradient(135deg, #FF6B6B 0%, #FFE66D 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SearchBar = styled.div`
  position: relative;
  flex: 1 1 auto;
  max-width: 500px;
  min-width: 200px;
  width: 100%;

  input {
    width: 100%;
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 50px;
    padding: 14px 24px 14px 52px;
    color: white;
    font-size: 16px;
    transition: all 0.3s ease;
    outline: none;
    box-sizing: border-box;

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }

    &:focus {
      background: rgba(255, 255, 255, 0.12);
      border-color: #FF6B6B;
      box-shadow: 0 8px 24px rgba(255, 107, 107, 0.2);
      transform: translateY(-2px);
    }
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const SearchIcon = styled.span`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
  opacity: 0.7;
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 16px;
  padding: 24px 0 40px;
  flex-wrap: wrap;
  animation: fadeInUp 0.6s ease-out 0.2s both;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const FilterButton = styled.button`
  background: ${({ $isSelected }) => 
    $isSelected 
      ? 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)' 
      : 'rgba(255, 255, 255, 0.08)'
  };
  backdrop-filter: blur(10px);
  border: 2px solid ${({ $isSelected }) => 
    $isSelected ? '#FF6B6B' : 'rgba(255, 255, 255, 0.1)'
  };
  border-radius: 50px;
  padding: 12px 32px;
  color: white;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(255, 107, 107, 0.3);
    border-color: #FF6B6B;

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
  }
`;

const FoodCardContainer = styled.section`
  min-height: 400px;
  padding: 40px 0 80px;
  background-image: url("/bg.png");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(15, 12, 41, 0.85);
  backdrop-filter: blur(3px);
`;

const FoodCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(380px, 100%), 1fr));
  gap: 32px;
  animation: fadeIn 0.6s ease-out 0.4s both;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;

const FoodCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;

  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 0 20px 60px rgba(255, 107, 107, 0.3);
    border-color: rgba(255, 107, 107, 0.5);

    img {
      transform: scale(1.15) rotate(2deg);
    }

    button {
      transform: translateX(4px);

      span {
        transform: translateX(4px);
      }
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 240px;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(255, 107, 107, 0.1) 0%, rgba(78, 84, 200, 0.1) 100%);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }
`;

const PriceTag = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  background: linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%);
  color: white;
  padding: 8px 20px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 18px;
  box-shadow: 0 4px 16px rgba(255, 107, 107, 0.4);
  animation: pulse 2s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
`;

const CardContent = styled.div`
  padding: 24px;
`;

const FoodName = styled.h3`
  font-size: 22px;
  font-weight: 700;
  margin: 0 0 12px 0;
  color: white;
  letter-spacing: 0.5px;
`;

const FoodDescription = styled.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin: 0 0 20px 0;
`;

const OrderButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 12px;
  padding: 14px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s ease;

  span {
    transition: transform 0.3s ease;
    display: inline-block;
  }

  &:hover {
    box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
  }
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);

  .spinner {
    width: 60px;
    height: 60px;
    border: 4px solid rgba(255, 255, 255, 0.1);
    border-top-color: #FF6B6B;
    border-radius: 50%;
    animation: spin 1s linear infinite;

    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  }
`;

const ErrorMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  height: 100vh;
  font-size: 24px;
  color: #FF6B6B;
  background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
`;