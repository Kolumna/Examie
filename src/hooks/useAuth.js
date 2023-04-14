import { useContext, useDebugValue } from "react";
import AuthContext from "../context/authContext";

export default function useAuth() {
  const authContext = useContext(AuthContext);

  const auth = authContext.user;

  useDebugValue(auth ? "zalogowany" : "wylogowany");

  const setAuth = (user) => {
    if (user) {
      authContext.login(user);
    } else {
      authContext.logout();
    }
  };

  return [auth, setAuth];
}
