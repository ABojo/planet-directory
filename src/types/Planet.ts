import Images from "./Images";
import Section from "./Section";

interface Planet {
  name: string;
  overview: Section;
  structure: Section;
  geology: Section;
  rotation: string;
  radius: string;
  temperature: string;
  images: Images;
}

export default Planet;
