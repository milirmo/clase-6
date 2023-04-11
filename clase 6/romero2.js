let nota;
let materia;
let max=0;
let min=11;
let mayor;
let menor;
for (i=1; i<=5; i++) {
    nota=(parseInt(prompt("ingrese "+i+" nota")));
    materia=(prompt("ingrese materia"));
    if (nota<=10 || nota>=1) {
        if (nota>max) {
            max=nota;
            mayor=materia;
        } else {
            if (nota<min);
            menor=materia;
        }
    } else {
        document.write("la nota no es valida. intente nuevamente.")
    }
}
document.write("la nota maxima es "+max+", en "+mayor+"<br>");
document.write("la nota minima es "+min+", en "+menor);
