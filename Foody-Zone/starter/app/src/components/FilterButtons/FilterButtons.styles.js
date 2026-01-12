import styled from 'styled-components';

export const FilterContainer = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  }
`;

export const FilterWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  justify-content: center;
  flex-wrap: wrap;
`;

export const FilterButton = styled.button`
  position: relative;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  background: ${({ $isSelected, theme }) => 
    $isSelected 
      ? theme.gradients.primary
      : theme.colors.backgroundLight};
  border: 1px solid ${({ $isSelected, theme }) => 
    $isSelected 
      ? theme.colors.border.primaryActive
      : theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  overflow: hidden;

  span {
    position: relative;
    z-index: ${({ theme }) => theme.zIndex.base};
  }

  &:hover {
    background: ${({ $isSelected, theme }) => 
      $isSelected 
        ? theme.gradients.primaryReverse
        : theme.colors.backgroundLighter};
    border-color: ${({ theme }) => theme.colors.border.primaryHover};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${({ theme }) => theme.colors.shadow.primary};
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0.65rem ${({ theme }) => theme.spacing.lg};
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;

export const ActiveIndicator = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: ${({ theme }) => theme.colors.text.primary};
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