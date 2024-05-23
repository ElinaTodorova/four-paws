import { useAuthContext } from "../components/context/AuthContext";
import * as authServices from "../services/authServices";

export default function useLogin() {
  const { dispatch } = useAuthContext();

  const loginFunc = async (userData) => {
    const userObj = await authServices.login(userData);

    localStorage.setItem("user", JSON.stringify(userObj.user));

    dispatch({ type: "LOGIN", payload: { ...userObj.user } });
  };

  return { loginFunc };
}
