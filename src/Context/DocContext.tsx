import React, { useContext } from 'react'

interface ContextProps {

}

const Context = React.createContext<ContextProps | null>(null);

const DocProvider = ({children}: {children: any}) => {
  return (
    <Context.Provider value ={{
    }}>
        {children}
    </Context.Provider>
  )
}

const useDoc = () => {
  const doc = useContext(Context)
    if (doc == null) {
      throw new Error("useTheme used outside of Provider");
    }
  return doc
}

export {DocProvider, useDoc}