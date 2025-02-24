import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        <span>React + TS Todo app</span> &copy; Luccas Fialho, 2025
      </p>
    </footer>
  );
};

export default Footer;
