import { useState } from "react";
import { userValues } from "../types";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { SIGN_IN } from "../helpers";

export const useCreateUser = () => {
  const [userValues, setUserValues] = useState<userValues>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigate();
  const auth = getAuth();

  const createUser = async () => {
    setIsLoading(true);

    if (
      userValues.confirmPassword &&
      userValues.email &&
      userValues.password !== ""
    ) {
      try {
        const result = await createUserWithEmailAndPassword(
          auth,
          userValues.email,
          userValues.password
        );
        const user = result.user;
        if (user.uid) {
          setUserValues({
            email: "",
            password: "",
            confirmPassword: "",
          });
          setIsLoading(false);
          navigation(SIGN_IN);
        }
      } catch (error) {
        setIsLoading(false);
        setUserValues({
          email: "",
          password: "",
          confirmPassword: "",
        });

        alert(error);
      }
    }
  };
  return {
    userValues,
    createUser,
    setUserValues,
    isLoading,
  };
};
