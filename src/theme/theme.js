const lightTheme = {
    colors: {
      primary: '#0E6883',
      secondary: '#7F8C9F',
      background: '#FFFFFF',
      text: '#29292A',
      buttonBackground: '#0E6883',
      buttonText: '#FFFFFF',
      borderColor: '#E0E0E0',
      brand: '#FC5C99',
      brandLight: '#FFF7FA',
      secondaryLight: '#F5F7FA',
      errorColor: "#F34141"
    },
    spacing: {
      small: 8,
      medium: 16,
      large: 24,
    },
    fonts: {
      regular: 'CustomFont-Regular',
      bold: 'CustomFont-Bold',
    },
  };
  
  const darkTheme = {
    colors: {
      primary: '#1F1F1F',
      background: '#121212',
      text: '#FFFFFF',
      buttonBackground: '#BB86FC',
      buttonText: '#000000',
      borderColor: '#303030',
      brand: '#FC5C99',
      error: "#F34141"
    },
    spacing: {
      small: 8,
      medium: 16,
      large: 24,
    },
    fonts: {
      regular: 'CustomFont-Regular',
      bold: 'CustomFont-Bold',
    },
  };
  
  export const themes = {
    light: lightTheme,
    dark: darkTheme,
  };
  