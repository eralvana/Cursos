import Presentation from "../Presentation"
import Description from "../Description"
import Syllabus from "../Syllabus"
import Methodology from "../Methodology"
import Evaluation from "../Evaluation"
import Bibliography from "../Bibliography"
import Contact from "../Contact"

import Context from "../../context.js"
import { useContext } from 'react';

import "./styles.css"

function Main() {
  const value = useContext(Context);

  return (
    <main>
      <Presentation/>
      <Description/>
      <Syllabus/>
      <Methodology/>
      <Evaluation/>
      <Bibliography/>
      <Contact/>
    </main>
  );
}

export default Main;
