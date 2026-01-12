import { memo } from 'react';
import { BASE_URL } from '../../hooks/useFoodData';
import {
  Card,
  CardGlow,
  CardImage,
  CardContent,
  CardInfo,
  FoodName,
  FoodDescription,
  PriceButtonWrapper,
  PriceButton,
} from './FoodCard.styles';

const FoodCard = memo(({ name, image, text, price }) => {
  // Determine if image is external URL or local
  const imageUrl = image.startsWith('http') ? image : BASE_URL + image;

  return (
    <Card>
      <CardGlow />
      <CardImage>
        <img 
          src={imageUrl} 
          alt={name}
          loading="lazy"
          onError={(e) => {
            e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="140" height="140"%3E%3Crect fill="%23333" width="140" height="140"/%3E%3Ctext fill="%23666" font-family="sans-serif" font-size="14" dy="70" dx="35"%3ENo Image%3C/text%3E%3C/svg%3E';
          }}
        />
      </CardImage>
      <CardContent>
        <CardInfo>
          <FoodName>{name}</FoodName>
          <FoodDescription>{text}</FoodDescription>
        </CardInfo>
        <PriceButtonWrapper>
          <PriceButton>${price.toFixed(2)}</PriceButton>
        </PriceButtonWrapper>
      </CardContent>
    </Card>
  );
});

FoodCard.displayName = 'FoodCard';

export default FoodCard;