import Context from "../../context.js"
import { useContext } from 'react';

import "./styles.css"

function Syllabus() {
  const value = useContext(Context);
  return (
    <section id="Syllabus" className="background-2">
      <div>
        <h1>Temario</h1>
      </div>
      <div className="syllabus">
        <ol>
        {
          value.syllabus.map((e,i) => <li key={i}>{e}.</li>)
        }
        </ol>
      </div>
    </section>
  );
}

export default Syllabus;
