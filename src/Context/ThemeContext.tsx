import React, { useContext, useState } from 'react'

interface ThemeItemsProps {
  primary: string
  secondary?: string
  textPrimary: string
}

interface ThemeProps { 
  light: ThemeItemsProps
  dark: ThemeItemsProps
}

interface ContextProps {
  theme: ThemeItemsProps
  toggleTheme: () => void 
  isLightTheme: () => boolean
}

export const themes: ThemeProps = {
    light: {
        primary: '#267cb5',
        textPrimary: 'white'
    },
    dark: {
        primary: '#000000',
        textPrimary: 'red'
    },
}

const Context = React.createContext<ContextProps | null>(null);

const ThemeProvider = ({children}: {children: React.ReactNode}) => {
  const [lightTheme, setLightTheme] = useState(true)

  const toggleTheme = () => {
    setLightTheme(!lightTheme)
  }

  const isLightTheme = () => {
    return lightTheme
  }

  const theme = lightTheme? themes.light: themes.dark

  return (
    <Context.Provider value = {{
      theme,
      toggleTheme,
      isLightTheme,
    }}>
        {children}
    </Context.Provider>
  )
}

const useTheme = () => {
  const theme = useContext(Context)
    if (theme == null) {
      throw new Error("useTheme used outside of Provider");
    }
  return theme
}

export { ThemeProvider, useTheme }