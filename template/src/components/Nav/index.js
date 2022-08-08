import { Link } from "react-scroll";
import useWindowSize from '../../useWindowSize';

import "./styles.css"

function Nav() {
  const [width] = useWindowSize();
  let offset = -210;
  if (width <= 950) {
    offset = -134;
  }
  return (
    <nav>
      <ul className="background-0">
        <li><Link to="Presentation" smooth activeClass="active-0" spy offset={offset}>Inicio</Link></li>
        <li><Link to="Description" smooth activeClass="active-0" spy offset={offset}>Descripción</Link></li>
        <li><Link to="Syllabus" smooth activeClass="active-0" spy offset={offset}>Temario</Link></li>
        <li><Link to="Methodology" smooth activeClass="active-0" spy offset={offset}>Metodología</Link></li>
        <li><Link to="Evaluation" smooth activeClass="active-0" spy offset={offset}>Evaluación</Link></li>
        <li><Link to="Bibliography" smooth activeClass="active-0" spy offset={offset}>Bibliografía</Link></li>
        <li><Link to="Contact" smooth activeClass="active-0" spy offset={offset}>Contacto</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
