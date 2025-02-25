import { createContext } from "react";

const AuthContext = createContext(null)
const AuthProvider = () => {
    const authInfo = {name: 'nodi sagor khal bill'}
    return (
        <AuthContext.Provider value={authInfo}>
            {chuldren}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


/***
 * 1. Create context
 * 2. set provider with value
 */