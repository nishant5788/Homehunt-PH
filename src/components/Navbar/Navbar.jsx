import { useProperties } from "../../contexts/PropertiesContext";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

function Navbar() {

const {favorites} = useProperties();
  return (
    <header className={styles.header}>
       <NavLink className={styles.logo} to="/"> HomeHunt PH</NavLink>
      <nav>
        <ul className={styles.navLinks}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/properties">Properties</NavLink>
          </li>

          <li>
            <NavLink to="/favorites">Favorites {favorites.length < 1 ? "" : `(${favorites.length})`} </NavLink>
          </li>

          <li>
            <NavLink to="/about">About</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;