function Nombrar() {
    Ingresar = document.getElementById("Nombre").value;
    
}
window.onload = function () {
    var btn = document.getElementById("shower");
    var txt = document.getElementById("paragraph");
    var txt2 = document.getElementById("paragraph2");
    var txt3 = document.getElementById("paragraph3");
    var   img = document.getElementById("imagen");
    
    btn.addEventListener ("click" , function (){
      
    txt.innerHTML = "<h2>Chibi Chibi es Usagi</h2><p>Chibi chibi es sailor cosmos que es sailor moon en su transformacion definitiva</p>";
    txt2.innerHTML = "<h2>Sailor venus tiene su propio manga</h2><p>Sailor venus o Sailor V, tiene su propio manga y serie de tv donde ella es la protagonista</p>";
    txt3.innerHTML = "<h2>Mamoru Chiba</h2><p>Mamoru o Darien es Tuxedo mask y a su vez el principe endimion, el cual seria como el Sailor earth";
     
     img.innerHTML = '<img src="https://www.sbs.com.au/popasia/sites/sbs.com.au.popasia/files/styles/full/public/sailor_moon_giphy.gif?itok=TaLFpGUH&mtime=1479688234" />';
         
    })
}
