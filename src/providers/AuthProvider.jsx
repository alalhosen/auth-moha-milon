import { createContext } from "react";
import PropTypes from 'prop-types'; 

const AuthContext = createContext(null);

const AuthProvider = () => {
  return (
    <div>
      
    </div>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node
}

/***
 * 1. Create context and export it
 * 2. set provider with value
 * 3. use the Auth Provider in the main.jsx file
 * 4. access children in the AuthProvider component as children use it in the middle of the Provider
 *
 */
