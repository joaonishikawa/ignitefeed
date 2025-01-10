import styles from "./Header.module.css";

import igniteLogo from "../images/Ignite Simbol.svg";

export function Header() {
  return (
    <header className={styles.header}>
        <img src={igniteLogo} alt="Logotipo Ignite"/>
    </header>
  );
}
