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

  const auth = getAuth();

  const navigate = useNavigate();

  const Login = async () => {
    setIsLoading(true);

    try {
      if (userValues.email.trim() === "") {
        alert("Please enter the email");
        throw new Error("Please enter the email");
      }
      if (userValues.password.trim() === "") {
        alert("Please enter the password");
        throw new Error("Please enter the password");
      }

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
      if (error) {
        setIsLoading(false);
        alert(error);
      }
    }
  };
  return {
    userValues,
    Login,
    setUserValues,
    isLoading,
  };
};
