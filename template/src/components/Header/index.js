import { useEffect, useContext } from 'react';

import Context from "../../context.js"

import Nav from "../Nav"

import "./styles.css"

function Header() {

  useEffect(() => {
  // Update the document title using the browser API
  document.title = value.coursename;
  });

  const value = useContext(Context);

  return (
    <header className="background-0">
      <h1>{value.coursename}</h1>
      <Nav/>
    </header>
  );
}

export default Header;
