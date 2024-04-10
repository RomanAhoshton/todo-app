import { useLogOut } from "../../hooks/useLogout";
import styles from "./index.module.scss";
import { getAuth } from "firebase/auth";

const Header = () => {
  const auth = getAuth();
  const { LogOut } = useLogOut();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>TODO</div>
        <div className={styles.currentUser}>
          <div className={styles.avatar}>
            {auth.currentUser?.displayName?.charAt(0).toUpperCase()}
          </div>
          <p className={styles.name}>{auth.currentUser?.displayName}</p>
        </div>
        <button className={styles.buttonLogOut} onClick={LogOut}>
          LOG OUT
        </button>
      </div>
    </header>
  );
};

export default Header;
