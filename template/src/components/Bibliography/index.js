import Context from "../../context.js"
import { useContext } from 'react';

import "./styles.css"

function Bibliography() {
  const value = useContext(Context);
  return (
    <section id="Bibliography" className="background-3">
      <div>
        <h1>Bibliografía</h1>
      </div>
      <div className="center">
        <ul className="bibliography">
        {
        value.bibliography.map(function(e,i){
        return (
        <li key={i}>{e.author} ({e.year}). <em>{e.title}</em>. {e.printer}.</li>
        )
        })
        }
        </ul>
      </div>
    </section>
  );
}

export default Bibliography;
