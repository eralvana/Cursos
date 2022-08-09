import Context from "../../context.js"
import { useContext } from 'react';

import "./styles.css"

function Methodology() {
  const value = useContext(Context);
  return (
    <section id="Methodology" className="background-1">
      <div>
        <h1>Metodología del curso</h1>
      </div>
      <div className="methodology">
      <div className="center">
        El curso se desarrollará completamente en la modalidad presencial en el horario y salón de clase indicado por la {value.institution} y publicado en la <b><a href={value.courselinkpageweb} target="_blank" rel="noreferrer">página</a></b> de la {value.institution}.
      </div>
      <div className="center">
        Utilizaremos la plataforma <b><i>Classroom</i></b> para el desarrollo del curso (el código de la clase es <b>{value.classroom.code}</b> y <b><a href={value.classroom.invitation} target="_blank" rel="noreferrer">aquí</a></b> está la invitación)
      </div>
      <div className="center">
        <b>Nota:</b> Es recomendable inscribirse al curso con una cuenta con dominio <b>@ciencias.unam.mx</b>. De no lograr inscribirse al curso, ponerse en contacto por correo electrónico para dar solución al problema.
      </div>
      <div className="center">
        No hay lista de asistencia a las clases. Asistirá quien desee participar y estar atento a la exposición.
      </div>
      <div className="center">
        No es requisito asistir a las clases para tener derecho a presentar evaluación (parcial y final).
      </div>
      </div>
    </section>
  );
}

export default Methodology;
