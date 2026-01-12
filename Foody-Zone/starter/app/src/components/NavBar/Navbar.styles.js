// src/components/Navbar/Navbar.styles.js
import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.sticky};
  background: rgba(10, 10, 15, 0.85);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.primary};
  box-shadow: 0 4px 30px ${({ theme }) => theme.colors.shadow.default};
`;

export const NavbarContent = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md};
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

export const LogoContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const LogoGlow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, ${({ theme }) => theme.colors.glow.primary} 0%, transparent 70%);
  filter: blur(20px);
  animation: pulse 2s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }
`;

export const LogoText = styled.div`
  position: relative;
  font-size: ${({ theme }) => theme.fontSize.xxxl};
  font-weight: ${({ theme }) => theme.fontWeight.black};
  letter-spacing: -0.02em;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};

  .foody {
    background: ${({ theme }) => theme.gradients.logo.foody};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .zone {
    background: ${({ theme }) => theme.gradients.logo.zone};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;

export const SearchContainer = styled.div`
  flex: 1;
  max-width: 500px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 100%;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.tertiary};
  display: flex;
  align-items: center;
  pointer-events: none;
  z-index: ${({ theme }) => theme.zIndex.base};
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.875rem ${({ theme }) => theme.spacing.md} 0.875rem 3rem;
  background: ${({ theme }) => theme.colors.backgroundLight};
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fontSize.md};
  transition: ${({ theme }) => theme.transitions.default};
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.placeholder};
  }

  &:focus {
    background: ${({ theme }) => theme.colors.backgroundLighter};
    border-color: ${({ theme }) => theme.colors.border.primaryHover};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.glow.primaryHover};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.border.primaryHover};
  }
`;