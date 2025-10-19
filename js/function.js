//Lenguaje de programación Javascript
//Declaración de variables globales
var counter = 0;
function cellClick(cell)
{
    if(window.getComputedStyle(cell).backgroundImage == "none")
    {
        if (counter<8)
        {
        cell.style="background-image:url(img/queen.png);background-size:cover;";
        counter++;
        }else{
            alert("Las ocho reinas han sido colocadas");
             }
    }else{
        cell.style="background-image:none;";
        counter--;
        }           
}