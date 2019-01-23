function buscar() {
  var IDCurso = document.getElementById("IDCurso").value;
  var requestURL;
  switch (IDCurso){
    case "UPALG160":
      requestURL = 'https://sheets.googleapis.com/v4/spreadsheets/1-hnVf2g-xyG-6digsmcZr-NmCiQpfSjFDJBfv3LWiL4/values/JSON160!A1:U48?key=AIzaSyBBbDSfQ7u7JFUL3AiNd0ZraNC6Bly2LMI';
      break;
    case "UPCD962":
      requestURL = 'https://sheets.googleapis.com/v4/spreadsheets/1CL90sYh45s7nmDU3uTYR-J57QMShknFYb903vE8Bcvc/values/JSON962!A1:U48?key=AIzaSyBBbDSfQ7u7JFUL3AiNd0ZraNC6Bly2LMI';
      break;
    case "UPCD1777":
      requestURL = 'https://sheets.googleapis.com/v4/spreadsheets/1xSwByRL6BOXxso-TmwnNi7R-3v--K8q_u1_QxMA5-Z4/values/JSON1777!A1:U48?key=AIzaSyBBbDSfQ7u7JFUL3AiNd0ZraNC6Bly2LMI';
      break;
    case "UPED1748":
      requestURL = 'https://sheets.googleapis.com/v4/spreadsheets/19N2bHBFGM4AQoNKWrVlPbkC7BuvV1ZSgdLr8Vz87idw/values/JSON1748!A1:U16?key=AIzaSyBBbDSfQ7u7JFUL3AiNd0ZraNC6Bly2LMI';      break;
  }
  fetch(requestURL)
  .then(response => response.json())
  .then(pintarInformacion)
  .catch(console.error)
}

function pintarInformacion(response) {
  var IDX = document.getElementById("IDABuscar").value;
  IDX = IDX.trim();
  var IDalumno = response;
  for (var i = 0; i < IDalumno.values.length; i++) {
    if (IDalumno.values[i][0] == IDX) {
      document.getElementById("NOID").style.display = "none";
      document.getElementById("cuadroinfo").style.display = "grid";
      document.getElementById("IDAlumno").innerHTML = IDalumno.values[i][0];
      document.getElementById("IDNombre").innerHTML = IDalumno.values[i][3] + " " + IDalumno.values[i][1] + " " + IDalumno.values[i][2];
      document.getElementById("IDCalFin").innerHTML = IDalumno.values[i][20];
      document.getElementById("IDCalP01").innerHTML = IDalumno.values[i][8];
      document.getElementById("IDTareasP01").innerHTML = IDalumno.values[i][4];
      document.getElementById("IDTareasP0120").innerHTML = IDalumno.values[i][5];
      document.getElementById("IDExamenP01").innerHTML = IDalumno.values[i][6];
      document.getElementById("IDExamenP0180").innerHTML = IDalumno.values[i][7];
      document.getElementById("IDCalP02").innerHTML = IDalumno.values[i][13];
      document.getElementById("IDTareasP02").innerHTML = IDalumno.values[i][9];
      document.getElementById("IDTareasP0220").innerHTML = IDalumno.values[i][10];
      document.getElementById("IDExamenP02").innerHTML = IDalumno.values[i][11];
      document.getElementById("IDExamenP0280").innerHTML = IDalumno.values[i][12];
      document.getElementById("IDCalP03").innerHTML = IDalumno.values[i][15];
      document.getElementById("IDPromCalPar").innerHTML = IDalumno.values[i][16];
      document.getElementById("IDCalPar").innerHTML = IDalumno.values[i][17];
      document.getElementById("IDExFin").innerHTML = IDalumno.values[i][18];
      document.getElementById("IDExFin40").innerHTML = IDalumno.values[i][19];
      break;
    } else {
      if (i== IDalumno.values.length - 1) {
        document.getElementById("cuadroinfo").style.display = "none";
        document.getElementById("NOID").style.display = "inline";
        document.getElementById("NOID").style = "text-align: center";
      }
    }
  }
}
