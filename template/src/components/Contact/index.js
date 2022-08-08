import Context from "../../context.js"
import { useContext } from 'react';

import "./styles.css"

function Contact() {
  const value = useContext(Context);
  return (
    <section id="Contact" className="background-2">
      <div>
        <h1>Contacto</h1>
      </div>
      <div className="contact">
        <ul>
        <li>{value.teacher.name}
            <ul>
              <li>{value.teacher.place} - <a href={`mailto:${value.teacher.email}`}>{value.teacher.email}</a></li>
            </ul>
          </li>
          <li>{value.teacherassistant.name}
            <ul>
              <li>{value.teacherassistant.place} - <a href={`mailto:${value.teacherassistant.email}`}>{value.teacherassistant.email}</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
