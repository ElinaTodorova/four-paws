import { useAuthContext } from "../components/context/AuthContext";
import * as authServices from "../services/authServices";

export default function useLogout() {
  const { dispatch } = useAuthContext();

  const logout = () => {
    authServices.logout();
    localStorage.removeItem("user");

    dispatch({ type: "LOGOUT" });
  };

  return { logout };
}
