import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import Form from "../../components/Form";
import { SIGN_UP } from "../../helpers";
import { useLogin } from "../../hooks/useLogin";
import { getAuth } from "firebase/auth";

const Signin = () => {
  const { setUserValues, userValues, Login, isLoading } = useLogin();
  const auth = getAuth();
  console.log(auth.currentUser, "current user");
  console.log(userValues, "values");

  return (
    <div className={styles.signin}>
      <div className={styles.signContainer}>
        <h1 className={styles.welcome}> TODO APP</h1>
        <p className={styles.createTitle}>Login</p>
        <Form
          setUserValues={setUserValues}
          userValues={userValues}
          userAction={Login}
          isLoading={isLoading}
        />

        <p className={styles.hasAccount}>
          {" "}
          Back to Sign up? <Link to={SIGN_UP}> Sign up </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
