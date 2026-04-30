const theme = {
  colors: {
    base: '#111111', // Black
    secondary: '#e9e9e9', // Medium Gray
    tertiary: '#fbfbfb', // Light Gray
    highlight: '#1e4ca8', // Accessible Blue
    white: '#ffffff',
    success: '#4caf50', // Green for availability indicator
    text: '#222222', // Dark gray for body text
    textMuted: '#666666', // Secondary text on white, ~4.54:1 contrast
    lightBlue: '#7eb8f7', // Light blue for text/icons on dark backgrounds
  },
  sizes: {
    maxWidth: '1050px',
    maxWidthCentered: '650px',
  },
  responsive: {
    small: '35em',
    medium: '50em',
    large: '70em',
  },
  spacing: {
    xs: '0.5em',
    sm: '1em',
    md: '1.5em',
    lg: '2em',
    xl: '3em',
    xxl: '4em',
  },
  transitions: {
    default: '0.2s',
  },
}

export default theme
