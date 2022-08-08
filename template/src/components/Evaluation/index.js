import "./styles.css"

function Evaluation() {
  return (
    <section id="Evaluation" className="background-0">
      <div>
        <h1>Evaluación del curso</h1>
      </div>
      <div className="evaluation">
        <ul>
          <li>
            Se realizarán al menos cuatro evaluaciones (exámenes parciales, exposición, tarea examen, etcétera). La fecha se establecerá una vez concluidos los temas que engloben la respectiva evaluación (con al menos 5 días de anticipación).
          </li>
          <li>
            La fecha límite para la revisión y aclaraciones de cada parcial será una semana posterior a la entrega de resultados.
          </li>
          <li>
            Habrá la posibilidad de presentar exámenes de reposición: <b>a lo más</b> el mayor entero menor o igual que la mitad del total de evaluaciones parciales bajo la condición de haber aprobado <b>al menos</b> el menor entero mayor o igual que la mitad de las evaluaciones parciales y renunciando a la calificación que se obtuvo en los exámenes que se reponen.
          </li>
          <li>
            De no cumplir con la condición anterior se podrá presentar examen final en <b>una sola vuelta</b>.
          </li>
          <li>
            La calificación final será:
              <ul>
                <li>
                  El promedio aritmético (redondeado) de las calificaciones obtenidas en las evaluaciones parciales.
                </li>
                <li>
                  Al presentar examen final se considera la calificación de éste (redondeada) como la definitiva.
                </li>
                <li>
                  El redondeo se obtiene con el mayor entero menor o igual que la calificación considerada.
                </li>
              </ul>
            </li>
            <li>
              La calificación mínima aprobatoria es <b>6.0 (seis punto cero)</b>.
            </li>
            <li>
              La única posibilidad de obtener <b>NP</b> es precisamente cuando no se haya presentado algún trabajo al curso.
            </li>
          </ul>
      </div>
    </section>
  );
}

export default Evaluation;
