function validarNombre(){
	var Fnombre = document.getElementById('name');
	var validaNombre = /^[A-Za-z\s]+$/;
	var errorNombre = document.getElementById('error_nombre');

	if( Fnombre.value == ""){
		errorNombre.innerHTML = "Rellene este campo";
		Fnombre.classList.add("invalido");
		Fnombre.classList.add("error");
		return false; }
	else if( validaNombre.test(Fnombre.value)){
		Fnombre.classList.remove("invalido");
		Fnombre.classList.remove("error");
		errorNombre.innerHTML = "";
		Fnombre.classList.add("valido");
		Fnombre.classList.add("correcto");
		return true; }
	else {
		errorNombre.innerHTML = "Nombre inválido";
		Fnombre.classList.add("invalido");
		Fnombre.classList.add("error");
		return false; }
	}

function validarCorreo(){
	var fcorreo = document.getElementById('email');
	var correoValido =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
	var errorCorreo = document.getElementById('error_correo');

	if( fcorreo.value == ""){
		errorCorreo.innerHTML = "Rellene este campo";
		fcorreo.classList.add("invalido");
		fcorreo.classList.add("error");
		return false; }
	else if( correoValido.test(fcorreo.value) ){
		fcorreo.classList.remove("invalido");
		fcorreo.classList.remove("error");
		errorCorreo.innerHTML = "";
		fcorreo.classList.add("valido");
		fcorreo.classList.add("correcto");
		return true; }
	else {
		errorCorreo.innerHTML = "Email inválido";
		fcorreo.classList.add("invalido");
		fcorreo.classList.add("error");
		return false; }
} 

function validarPass(){
	var passw = document.getElementById('pass');
	var passvalida = /^[\s\S]{1,8}$/;
	var errorpass = document.getElementById('error_pass');

	if( passw.value == ""){
		errorpass.innerHTML = "Rellene este campo";
		passw.classList.add("invalido");
		passw.classList.add("error");
		return false; }
	else if( passvalida.test(passw.value) ){
		passw.classList.remove("invalido");
		passw.classList.remove("error");
		errorpass.innerHTML = "";
		passw.classList.add("valido");
		passw.classList.add("correcto");
		return true; }
	else {	
		errorpass.innerHTML = "No debe tener más de 8 caracteres";
		passw.classList.add("invalido");
		return false; }
}

function validarConClave(){
	var passw = document.getElementById('pass');
	var confirmarPass = document.getElementById('conf');
	var errorConfirmar = document.getElementById('error_confclave');

	if( confirmarPass.value == ""){
		errorConfirmar.innerHTML = "Rellene este campo";
		confirmarPass.classList.add("invalido");
		confirmarPass.classList.add("error");
		return false; }
	else if (passw.value == confirmarPass.value ){
		confirmarPass.classList.remove("invalido");
		confirmarPass.classList.remove("error");
		errorConfirmar.innerHTML = "";
		confirmarPass.classList.add("valido");
		confirmarPass.classList.add("correcto");
		return true; }
	else {
		errorConfirmar.innerHTML = "Las contraseñas no coinciden";
		confirmarPass.classList.add("invalido");
		confirmarPass.classList.add("error");
		return false; }
}

function boton(){
	var borderButton = document.getElementById('boton');
	borderButton.onmouseover = () => {	borderButton.classList.add('borderColor'); 	}
	borderButton.onmouseout = () => {	borderButton.classList.remove('borderColor'); 	}
}

function validarFormulario(){

	if (validarNombre() == true && validarCorreo() == true &&  validarPass() == true && validarConClave() == true ){
		alert("La inscripción ha sido correcta");
		return true; }
	else {
		return false; }
}