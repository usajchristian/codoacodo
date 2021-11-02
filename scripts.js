function validarFormulario (){
        var letras = /^[A-Za-z]+$/;
        let n=document.getElementById("nombre1").value;
        let e=document.getElementById("email").value;
        if (n=="" || e==""){
            alert("Debe escribir nombre y email");
            return;
        }
        if (!n.match(letras)){
            alert("El nombre solo puede contener letras");
            return;
        }
        if (!e.includes("@") && !e.includes(".")){
            alert("Debe escribir el email correctamente");
            return;
        }

        
}