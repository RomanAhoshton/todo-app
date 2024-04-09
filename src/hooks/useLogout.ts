import { SIGN_UP } from "../helpers";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

export const useLogOut = () => {
  const auth = getAuth();
  const navigation = useNavigate();

  const LogOut = () => {
    auth.signOut();
    navigation(SIGN_UP);
  };

  return { LogOut };
};
