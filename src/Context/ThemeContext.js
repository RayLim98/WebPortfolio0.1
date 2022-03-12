import React, { useContext, useState } from 'react'

export const themes = {
    light: {
        primary: '#267cb5',
        textprimary: 'white'
    },
    dark: {
        primary: '#000000',
        textprimary: 'red'
    },
}

const Context = React.createContext(null);

const ThemeProvider = ({children}) => {
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