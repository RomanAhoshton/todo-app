import { useState } from "react";
import { userValues } from "../types";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { SIGN_IN } from "../helpers";

export const useCreateUser = () => {
  const [userValues, setUserValues] = useState<userValues>({
    email: "",
    password: "",
    name: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigate();
  const auth = getAuth();

  const createUser = async () => {
    setIsLoading(true);

    try {
      if (userValues?.name?.trim() === "") {
        alert("Please enter the name");
        throw new Error("Please enter the name");
      }
      if (userValues.email.trim() === "") {
        alert("Please enter the email");
        throw new Error("Please enter the email");
      }
      if (userValues.password.trim() === "") {
        alert("Please enter the password");
        throw new Error("Please enter the password");
      }

      const result = await createUserWithEmailAndPassword(
        auth,
        userValues.email,
        userValues.password
      );
      const user = result.user;
      if (user) {
        await updateProfile(user, {
          displayName: userValues.name,
        });

        setIsLoading(false);
        navigation(SIGN_IN);
      }
    } catch (error) {
      setIsLoading(false);
      setUserValues({
        email: "",
        password: "",
        name: "",
      });

      alert(error);
    }
  };
  return {
    userValues,
    createUser,
    setUserValues,
    isLoading,
  };
};
