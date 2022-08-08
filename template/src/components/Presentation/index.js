import Context from "../../context.js"
import { useContext } from 'react';
import imgGP from "../../img/GP.gif"
import imgTG from "../../img/TG.gif"

import "./styles.css"

function Presentation() {
  const value = useContext(Context);
  let img;
  if (value.index === "GP"){
    img = imgGP
  } else {
    img = imgTG
  }
  return (
    <section id="Presentation" className="background-1">
      <img src={img} width="45%" height="45%" className="descriptionimage" alt=""/>
      <div className="descriptionpresentation">
        El sitio oficial del curso de {value.coursename} (Grupo {value.group}) de la {value.institution} de la UNAM en el ciclo 2023-1.
      </div>
    </section>
  );
}

export default Presentation;
