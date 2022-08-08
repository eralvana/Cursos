import Context from "../../context.js"
import { useContext } from 'react';

import "./styles.css"

function Description() {
  const value = useContext(Context);
  return (
    <section id="Description" className="background-3">
      <div className="description">
        <h1>Descripción del curso</h1>
      </div>
      <div className="center">
          Es un curso formal de {value.name} que busca desarrollar en el estudiante el gusto por las matemáticas.
      </div>
      <div className="center">
        Se intenta desarrollar en el estudiante la abstracción, la intuición y la buena escritura de las matemáticas; se busca enfatizar en la comprensión de conceptos y definiciones, en la demostración de proposiciones y teoremas, así como en sus diversas aplicaciones.
      </div>
    </section>
  );
}

export default Description;
