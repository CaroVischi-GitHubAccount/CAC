

var btn_tickets = document.getElementById('btn_tickets');
var form_comprar= document.getElementById('comprar_tickets');


var cant= document.getElementById('cant');
var categ= document.getElementById('categ');

var resumen= document.getElementById('btn_resumen');
var borrar= document.getElementById('btn_borrar');
//var option= document.getElementsById('select');
//console.log(categ);
//categ[0].innerText='Seleccione una opcion';

var input_nombre=document.getElementById('nombre');
var input_apellido=document.getElementById('apellido');
var input_mail=document.getElementById('mail');


var opciones= document.getElementsByTagName('option');
var input_total= document.getElementById('total');
//console.log(opciones[0]);



btn_tickets.addEventListener("click",()=> {
    form_comprar.removeAttribute('hidden');
});

borrar.addEventListener("click",()=> {
    input_total.innerText='';
    cant.value=0;
    console.log(categ[opciones])=categ[opciones[0]];
    //categ.options[0].attr('selected', true);
    //categ.option=defautSelected;
    //categ.value="0";
    //console.log(categ.selected());
    //categ.selectedIndex=0;
    //categ.option=categ[0];
    //console.log(categ.options);
    //item(1).selected = 'selected';

    //categ.prepend('<option value="0" selected>Seleccione una opción</option>');
});

resumen.addEventListener("submit",()=> {
    //console.log (cant.value);
    //console.log (categ.value);

    q=cant.value;
    categ=categ.value;
    calc_total(q, categ);
});
//console.log(pcio);
function calc_total(q, cat){
    var precio = 200;
    console.log (q);
    console.log (categ);




    if (q==0){
        alert('Debe seleccionar la cantidad de tickets que desea comprar')
        cant.focus();
    }
    else{
        /*total=precio*q*cat;
        console.log(total);
        input_total.innerText=total;
    };*/
        switch (true){
            case (categ == 1):
                    total=precio*q *(80/100);
                    input_total.innerText=total;

            break; 
            case (categ == 2):
                    total=precio*q * (50/100);
                    input_total.innerText=total;

            break;  
            case (categ ==3):
                    total=precio*q *(15/100);
                    input_total.innerText=total;
            break;      
        };
    };/*
    /*
    if (Categ==0){
        alert('Dee seleccionar la cantidad de tickets que desea comprar')
    };*/

};


//.addEventListener('click', ()=>{
 //   player1Img.src="img/hand-back-fist-regular.svg";
//});

//removeAttribute('href')