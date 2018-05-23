window.onload = function(){
    var btnEmail=document.getElementById("confirm");
    var btnDatos=document.getElementById("datos");
    

    btnEmail.addEventListener('click',function(){
        var email=document.getElementById("correo").value;
        document.getElementById("e-mail").innerHTML="<p>Tu correo Electronico es: </p>"+email;
    })

    btnDatos.addEventListener('click',function(){
        document.getElementById("dts").innerHTML="<h3>Variedad de personajes</h3>"+
        "<p>La serie de Aggretsuko tiene tambien una amplia gama de personalidades en los diferentes amigos de Retsuko, en los que destacan la gata libre que disfruta de la vida, el zorro tímido pero sarcastico, la gorila exitosa con problemas para entablar nuevas relaciones, etc</p>"+
        "<h3>El Pasado de Aggretsuko</h3>"+
        "<p>Antes de la serie de Netflix, Aggretsuko aparecio en 100 capitulos de 1 minuto que se moostraron en la televisión japonesa.Mientras que muchos de ellos se pueden encontrar en linea, los cortos tambien han sido compilados y lanzados en DVD por Pony Canyon</p>"+
        "<h3>¿Aggretsuko es un nombre?</h3>"+
        "<p>La primera parte del nombre de Retsuko significa 'rabia' o 'feroz'. La segunda parte 'ko' se traduce en niño. 'Rage-child' o 'Fierce-child' parece una descripción precisa del personaje</p>"+
        "<img src='ag.jpg'>";
    })

    
}