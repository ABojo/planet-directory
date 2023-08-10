import Planet from "../../types/Planet";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

interface HeaderProps {
  planets: Planet[];
}

function Header({ planets }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link className={styles.header__logo} to="/">
          The Planets
        </Link>
        <nav className={styles.header__nav}>
          <ul className={styles.header__list}>
            {planets.map((planet) => {
              const lowerCasePlanetName = planet.name.toLowerCase();
              const linkClass = `${styles.header__link} ${styles[`header__link--${lowerCasePlanetName}`]}`;

              return (
                <li key={planet.name} className={styles.header__item}>
                  <Link className={linkClass} to={`/planet/${lowerCasePlanetName}`}>
                    {planet.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
