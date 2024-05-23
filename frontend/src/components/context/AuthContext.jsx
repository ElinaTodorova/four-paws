import { createContext, useContext, useMemo, useReducer } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  return (
    <AuthContext.Provider
      value={useMemo(() => {
        return { ...state, dispatch };
      }, [state, dispatch])}
    >
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
