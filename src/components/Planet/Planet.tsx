import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Planet.module.scss";
import PlanetT from "../../types/Planet";
import SectionName from "../../types/SectionName";

interface PlanetProps {
  findPlanetByName: (planetName?: string) => PlanetT | undefined;
}

function Planet({ findPlanetByName }: PlanetProps) {
  const { planet } = useParams();
  const planetName = planet || "mercury";

  const planetDetails = findPlanetByName(planetName);
  const [activeSection, setActiveSection] = useState<SectionName>("overview");

  //reset section when planet changes
  useEffect(() => {
    setActiveSection("overview");
  }, [planet]);

  //if there are no planet details then display an error message
  if (!planetDetails)
    return <div className={styles.planet__error}>Sorry, we don't have any information on that planet 😞</div>;

  //chose the image based on the active section
  const planetImage = activeSection === "structure" ? planetDetails.images.internal : planetDetails.images.planet;

  return (
    <main className={`${styles.planet} ${styles[`planet--${planet}`]}`}>
      <div className={styles.planet__head}>
        <div className={styles.planet__graphic}>
          <img className={styles.planet__img} src={planetImage} alt={`${planet}`} />
          {activeSection === "geology" && (
            <img
              className={styles.planet__internal}
              src={planetDetails.images.geology}
              alt={`${planet}'s geological surface`}
            />
          )}
        </div>
        <div className={styles.planet__details}>
          <h1 className={styles.planet__name}>{planetDetails.name}</h1>
          <p className={styles.planet__body}>{planetDetails[activeSection].content}</p>
          <span className={styles.planet__source}>
            Source :
            <a target="_blank" href={planetDetails[activeSection].source}>
              Wikipedia
            </a>
          </span>
        </div>
        <div className={styles.planet__buttons}>
          <button
            className={`${styles.planet__button} ${activeSection === "overview" && styles["planet__button--active"]}`}
            onClick={() => {
              setActiveSection("overview");
            }}
          >
            <span className={styles["planet__button-number"]}>01</span>
            Overview
          </button>
          <button
            className={`${styles.planet__button} ${activeSection === "structure" && styles["planet__button--active"]}`}
            onClick={() => {
              setActiveSection("structure");
            }}
          >
            <span className={styles["planet__button-number"]}>02</span>
            <span className={styles["planet__button-desktop"]}>Internal</span> Structure
          </button>
          <button
            className={`${styles.planet__button} ${activeSection === "geology" && styles["planet__button--active"]}`}
            onClick={() => {
              setActiveSection("geology");
            }}
          >
            <span className={styles["planet__button-number"]}>03</span>
            Surface <span className={styles["planet__button-desktop"]}>Geology</span>
          </button>
        </div>
      </div>
      <div className={styles.planet__stats}>
        <div className={styles.planet__stat}>
          <h2>Rotation Time</h2>
          <p>{planetDetails.rotation}</p>
        </div>
        <div className={styles.planet__stat}>
          <h2>Revolution Time</h2>
          <p>{planetDetails.revolution}</p>
        </div>
        <div className={styles.planet__stat}>
          <h2>Radius</h2>
          <p>{planetDetails.radius}</p>
        </div>
        <div className={styles.planet__stat}>
          <h2>Average Temp.</h2>
          <p>{planetDetails.temperature}</p>
        </div>
      </div>
    </main>
  );
}

export default Planet;
