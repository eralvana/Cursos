function reloj(){
	momentoActual = new Date()
	H = momentoActual.getHours()
	if (H <= 9) H = "0" + H
   	M = momentoActual.getMinutes()
   	if (M <= 9) M = "0" + M
   	S = momentoActual.getSeconds()
   	if (S <= 9) S = "0" + S
	horaImprimible = H + ":" + M + ":" + S
	var rel = document.getElementById("reloj")
	rel.innerHTML = horaImprimible
	setTimeout("reloj()",1000) 
}