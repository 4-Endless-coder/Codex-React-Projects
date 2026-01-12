import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.backgroundLight};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.xxl};
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  min-height: 167px;
  transition: ${({ theme }) => theme.transitions.default};
  overflow: hidden;
  backdrop-filter: blur(10px);
  isolation: isolate;
  z-index: ${({ theme }) => theme.zIndex.base};

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.colors.border.primaryHover};
    box-shadow: 0 8px 30px ${({ theme }) => theme.colors.shadow.primary};
    z-index: ${({ theme }) => theme.zIndex.dropdown};
  }

  &:hover div:first-child {
    opacity: 1;
  }
`;

export const CardGlow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.gradients.glow};
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  z-index: 0;
`;

export const CardImage = styled.div`
  flex-shrink: 0;
  width: 140px;
  height: 140px;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.backgroundLight};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${Card}:hover & img {
    transform: scale(1.1);
  }
`;

export const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 0;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const FoodName = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin: 0;
  color: ${({ theme }) => theme.colors.text.primary};
  letter-spacing: -0.01em;
`;

export const FoodDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text.tertiary};
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const PriceButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
`;

export const PriceButton = styled.button`
  padding: ${({ theme }) => theme.spacing.xs} 1.25rem;
  background: ${({ theme }) => theme.gradients.primary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  box-shadow: 0 2px 8px ${({ theme }) => theme.colors.shadow.primary};

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px ${({ theme }) => theme.colors.shadow.primaryStrong};
  }

  &:active {
    transform: scale(0.98);
  }
`;