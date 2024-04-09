import { useState } from "react";
import { userValues } from "../types";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { TODO } from "../helpers";

export const useLogin = () => {
  const [userValues, setUserValues] = useState<userValues>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const auth = getAuth();

  const navigate = useNavigate();

  const Login = async () => {
    setIsLoading(true);

    if (userValues.email && userValues.password !== "") {
      try {
        const result = await signInWithEmailAndPassword(
          auth,
          userValues.email,
          userValues.password
        );

        const user = result.user;

        if (user.uid) {
          setIsLoading(false);
          setUserValues({
            email: "",
            password: "",
          });
          navigate(TODO);
        }
      } catch (error) {
        console.log(error, "error Login");
      }
    }
  };
  return {
    userValues,
    Login,
    setUserValues,
    isLoading,
    isAuthenticated,
    setIsAuthenticated,
  };
};
