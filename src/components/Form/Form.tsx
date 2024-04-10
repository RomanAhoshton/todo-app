import styles from "./index.module.scss";
import { SIGN_UP } from "../../helpers";
import { useLocation } from "react-router-dom";
import { userValues } from "../../types";
import LoaderC from "../LoaderC";

interface FormProps {
  setUserValues: (arg: userValues) => void;
  userValues: userValues;
  userAction: () => void;
  isLoading: boolean;
}

const Form = ({
  userValues,
  userAction,
  setUserValues,
  isLoading,
}: FormProps) => {
  const location = useLocation();

  return (
    <form className={styles.form}>
      {location.pathname === SIGN_UP && (
        <input
          type="text"
          className={styles.password}
          placeholder="Full Name"
          onChange={(e) =>
            setUserValues({
              email: userValues.email,
              password: userValues.password,
              name: e.target.value,
            })
          }
          value={userValues.name}
        />
      )}
      <input
        type="text"
        className={styles.email}
        placeholder="Email Address"
        onChange={(e) =>
          setUserValues({
            email: e.target.value,
            password: userValues.password,
            name: userValues.name,
          })
        }
        value={userValues.email}
      />

      <input
        type="password"
        className={styles.password}
        placeholder="Password"
        onChange={(e) =>
          setUserValues({
            email: userValues.email,
            password: e.target.value,
            name: userValues.name,
          })
        }
        value={userValues.password}
      />

      <button
        type="button"
        className={styles.createAccount}
        onClick={userAction}
      >
        {" "}
        {location.pathname === SIGN_UP ? "Create Account" : "Login"}
      </button>
      {isLoading && <LoaderC />}
    </form>
  );
};

export default Form;
