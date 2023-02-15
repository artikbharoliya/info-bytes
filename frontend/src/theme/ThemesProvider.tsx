import React, { Dispatch, SetStateAction } from 'react';

interface Theme {
  '--primary': Color;
  '--secondary': Color;
  '--background': Color;
}

enum Color {
  SKY_BLUE = '#fff1eb',
  LITE_ORANGE = '#ace0f9',
  DARK_BLUE = '#37ecba',
  GREEN = '#72afd3',
  LAVENDER = '#ebbba7',
  PEACH = '#cfc7f8',
  BLACK = '#434343',
  WHITE = '#fff'
}

type ThemeType = 'newYork' | 'happyAcid' | 'awesomePine' | 'dark';

const THEMES: Record<ThemeType, Theme> = {
  newYork: {
    '--primary': Color.SKY_BLUE,
    '--secondary': Color.LITE_ORANGE,
    '--background': Color.WHITE,
  },
  happyAcid: {
    '--primary': Color.DARK_BLUE,
    '--secondary': Color.GREEN,
    '--background': Color.WHITE,
  },
  awesomePine: {
    '--primary': Color.LAVENDER,
    '--secondary': Color.PEACH,
    '--background': Color.WHITE,
  },
  dark: {
    '--primary': Color.BLACK,
    '--secondary': Color.BLACK,
    '--background': Color.WHITE,
  }
};

interface ThemeContextProps {
  themeType: ThemeType;
  theme: Theme,
  setCurrentTheme: Dispatch<SetStateAction<ThemeType>>
}

export const ThemeContext = React.createContext<ThemeContextProps>({
  themeType: 'newYork',
  theme: THEMES['newYork'],
  setCurrentTheme: () => { }
});

interface Props {
  children: React.ReactNode;
}

export const ThemesProvider: React.FC<Props> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = React.useState<ThemeType>('newYork');

  return (
    <ThemeContext.Provider value={{
      themeType: currentTheme,
      theme: THEMES[currentTheme],
      setCurrentTheme,
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => React.useContext(ThemeContext);