import PropTypes from "prop-types";
import { createContext } from "react";

export const AuthContext = createContext (null);

const AuthProvider = () => {
  return;
  <div>

  </div>;
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};

/***
 * 1. Create context and expirt it
 * 2. set provider with value
 * 3. use the Auth Provider in the main.jsx file
 * 4. access children in the AuthProvider component as children use it in the middle of the Provider
 *
 */
