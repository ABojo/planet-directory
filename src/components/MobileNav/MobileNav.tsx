import { useState } from "react";
import styles from "./MobileNav.module.scss";
import Planet from "../../types/Planet";
import { useNavigate } from "react-router-dom";

interface MobileNavProps {
  planets: Planet[];
}

function MobileNav({ planets }: MobileNavProps) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  function toggleNav() {
    setIsOpen((prev) => !prev);
  }

  function navigateToPlanet(planetName: string) {
    toggleNav();
    navigate(`/planet/${planetName}`);
  }

  return (
    <div className={styles["mobile-nav"]}>
      <button
        onClick={toggleNav}
        className={`${styles["mobile-nav__toggle"]} ${isOpen && styles["mobile-nav__toggle--open"]}`}
        aria-label="Toggle mobile navigation"
      >
        <img src="/images/icon-hamburger.svg" alt="" />
      </button>
      {isOpen && (
        <nav>
          <ul className={styles["mobile-nav__list"]}>
            {planets.map((planet) => {
              const lowerCaseName = planet.name.toLowerCase();

              return (
                <li className={styles["mobile-nav__item"]} key={planet.name}>
                  <a
                    className={styles["mobile-nav__link"]}
                    href={`/planet/${lowerCaseName}`}
                    aria-label={`${planet.name} facts`}
                    onClick={(e) => {
                      e.preventDefault();
                      navigateToPlanet(lowerCaseName);
                    }}
                  >
                    <span
                      className={`${styles["mobile-nav__icon"]} ${styles[`mobile-nav__icon--${lowerCaseName}`]}`}
                    ></span>
                    {planet.name}
                    <img className="mobile-nav__arrow" src="/images/icon-chevron.svg" alt="" />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </div>
  );
}

export default MobileNav;
