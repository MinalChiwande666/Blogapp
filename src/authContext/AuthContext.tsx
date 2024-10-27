import React, {useContext, useState, ReactNode, createContext} from 'react'


interface AuthContextProp{
    user:string | null,
    login: (username:string)=> void,
    logout: ()=>void
}

const  AuthContext = createContext<AuthContextProp | undefined>(undefined);

export const AuthProvider : React.FC<{children : ReactNode}> = ({children}) =>{
    const [user,setUser] = useState<string | null>(null);


    const login = (username:any)=>{
        setUser(username)
    }

    const logout = () =>{
        setUser(null)
    }

    return(
        <AuthContext.Provider value={{user,login,logout}}>
          {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  };