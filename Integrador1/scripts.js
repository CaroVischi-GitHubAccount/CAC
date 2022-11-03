
/*var onlyFirst = document.querySelector(".laClase:first-child");


  Registramos para ese elemento un evento que escucha los clicks
  implementando dentro la acción que queremos,
  en este caso ocultarlo

onlyFirst.addEventListener("click", function(e) {
  e.target.style.display = 'none';
});*/



var btn_tickets = document.getElementById('btn_tickets');
var form_comprar= document.getElementById('comprar_tickets');


var cant= document.getElementById('cant');
var categ= document.getElementById('categ');

var resumen= document.getElementById('btn_resumen');
var precio = 200;

var total= document.get



btn_tickets.addEventListener("click",()=> {
    form_comprar.removeAttribute('hidden');
});


resumen.addEventListener("click",()=> {
    //console.log (cant.value);
    //console.log (categ.value);

    q=cant.value;
    categ=categ.value
    total(q,categ);
});

function total(q, categ){
    console.log('desde funcion total');
    console.log (q);
    console.log (categ);
    /*if (Q==0){
        alert('Debe seleccionar la cantidad de tickets que desea comprar')
    };
    if (Categ==0){
        alert('Dee seleccionar la cantidad de tickets que desea comprar')
    };*/

}


/*switch (dscuentos){
        Categ == 1:
                pcio x cant * 50/100

        
        computerImg.src="img/hand-back-fist-regular.svg";
            optionPC='piedra';
        case 2:
            computerImg.src="img/hand-regular.svg";
            optionPC='papel';
    
        case 3:
            computerImg.src="img/hand-scissors-regular.svg";
            optionPC='tijera';
    };



*/






//btnPiedra.addEventListener('click', ()=>{
 //   player1Img.src="img/hand-back-fist-regular.svg";
//});

//removeAttribute('href')