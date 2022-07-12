import React, { useContext, useState } from 'react'

interface ThemeItemsProps {
  primary: string
  secondary?: string
  textPrimary: string
  textSecondary: string
  highLight: string
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
        secondary: 'white',
        textPrimary: 'white',
        textSecondary: 'black',
        highLight: '#219f97',
    },
    dark: {
        primary: '#000000',
        secondary: '#880707',
        textPrimary: 'red',
        textSecondary: 'white',
        highLight: '#3d0101' 
    },
}

const Context = React.createContext<ContextProps | null>(null);

const ThemeProvider = ({children}: {children: React.ReactNode}) => {
  /**
   * @description Providers theme functionality and control to the rest of the document
   */
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