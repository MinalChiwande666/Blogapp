import React, { createContext,useContext } from 'react'
// import { createContext } from 'vm'

interface loaderContextProp {
    loader: Boolean | any,
    setLoader: (action:Boolean) => void
}

const loaderContext = createContext<loaderContextProp | undefined>(undefined);

export const LoaderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [loader,setloader] = React.useState<Boolean | any>(null)

    const setLoader = (action:Boolean)=>{
        setloader(action)
    }
    return (
      <>
      <loaderContext.Provider value={{loader,setLoader}}>
        {children}
      </loaderContext.Provider>
      </>
    )
}

export const useLoader = () =>{
    const context = useContext(loaderContext);
    if (context === undefined) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}