import styles from "./index.module.scss";
import Form from "../../components/Form";
import { Link } from "react-router-dom";
import { SIGN_IN } from "../../helpers";
import { useCreateUser } from "../../hooks/useCreateUser";
import { getAuth } from "firebase/auth";

const Signup = () => {
  console.log(getAuth().currentUser, "current user from Signup");
  const { userValues, setUserValues, createUser, isLoading } = useCreateUser();

  return (
    <div className={styles.signup}>
      <div className={styles.signContainer}>
        <h1 className={styles.welcome}>Welcome to TODO APP</h1>
        <p className={styles.createTitle}>Create your account</p>
        <Form
          userAction={createUser}
          setUserValues={setUserValues}
          userValues={userValues}
          isLoading={isLoading}
        />

        <p className={styles.hasAccount}>
          {" "}
          Have already account? <Link to={SIGN_IN}> Sign in </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
