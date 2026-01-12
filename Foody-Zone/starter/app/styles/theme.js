export const theme = {
  colors: {
    primary: '#ff4343',
    primaryLight: '#ff6b6b',
    background: '#0a0a0f',
    backgroundLight: 'rgba(255, 255, 255, 0.05)',
    backgroundLighter: 'rgba(255, 255, 255, 0.08)',
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.8)',
      tertiary: 'rgba(255, 255, 255, 0.6)',
      placeholder: 'rgba(255, 255, 255, 0.4)',
    },
    border: {
      default: 'rgba(255, 255, 255, 0.1)',
      primary: 'rgba(255, 67, 67, 0.3)',
      primaryHover: 'rgba(255, 67, 67, 0.6)',
      primaryActive: 'rgba(255, 67, 67, 0.8)',
    },
    shadow: {
      default: 'rgba(0, 0, 0, 0.3)',
      primary: 'rgba(255, 67, 67, 0.2)',
      primaryHover: 'rgba(255, 67, 67, 0.3)',
      primaryStrong: 'rgba(255, 67, 67, 0.5)',
    },
    glow: {
      primary: 'rgba(255, 67, 67, 0.3)',
      primaryLight: 'rgba(255, 67, 67, 0.15)',
      primaryHover: 'rgba(255, 67, 67, 0.05)',
    },
  },
  
  gradients: {
    primary: 'linear-gradient(135deg, #ff4343 0%, #ff6b6b 100%)',
    primaryReverse: 'linear-gradient(135deg, #ff6b6b 0%, #ff4343 100%)',
    logo: {
      foody: 'linear-gradient(135deg, #ff4343 0%, #ff6b6b 100%)',
      zone: 'linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%)',
    },
    glow: 'radial-gradient(circle, rgba(255, 67, 67, 0.15) 0%, transparent 60%)',
    background: 'radial-gradient(circle at 20% 50%, rgba(255, 67, 67, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 107, 107, 0.05) 0%, transparent 50%)',
  },

  spacing: {
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },

  borderRadius: {
    sm: '8px',
    md: '10px',
    lg: '12px',
    xl: '15px',
    xxl: '20px',
  },

  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '0.95rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    xxl: '1.75rem',
    xxxl: '2rem',
  },

  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  },

  transitions: {
    default: 'all 0.3s ease',
    fast: 'all 0.2s ease',
    slow: 'all 0.4s ease',
  },

  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1400px',
  },

  zIndex: {
    base: 1,
    dropdown: 10,
    sticky: 100,
    modal: 1000,
  },
};