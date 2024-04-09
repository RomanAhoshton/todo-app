import { FC, memo, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { SIGN_UP, SIGN_IN, TODO } from "./helpers";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Todo from "./pages/Todo";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

const AppRoutes: FC = () => {
  const auth = getAuth();
  const [user, setUser] = useState<User | null>(auth.currentUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [user]);

  return (
    <Routes>
      <Route path={SIGN_UP} element={<Signup />} />
      <Route path={SIGN_IN} element={<Signin />} />
      {user ? <Route path={TODO} element={<Todo />} /> : null}
    </Routes>
  );
};

export default memo(AppRoutes);
