

var btn_tickets = document.getElementById('btn_tickets');
var form_comprar= document.getElementById('comprar_tickets');

var cant= document.getElementById('cant');
var categ= document.getElementById('categ');

var resumen= document.getElementById('btn_resumen');
var borrar= document.getElementById('btn_borrar');

const input_nombre=document.getElementById('nombre');
var input_apellido=document.getElementById('apellido');
var input_mail=document.getElementById('mail');

var input_total= document.getElementById('total');

var exp_regular = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;



btn_tickets.addEventListener("click",()=> {
    form_comprar.removeAttribute('hidden');
});

borrar.addEventListener("click",()=> {
    input_total.innerText='';
    cant.value=0;
    categ.value="0";
});


resumen.addEventListener("click",validar_datos);


function validar_datos(){
    
    if(input_nombre.value.length > 4 ){
        if(input_apellido.value.length > 4){
            if(input_mail.value.match(exp_regular)){
                //console.log('datos completos');
                    calc_total(cant.value, categ.value);

                return true;
            }else{
                alert('El campo MAIL no es valido');
                return false;
            }; 
        }else{
            alert('El campo APELLIDO requiere mínimo 4 caracteres');
            return false;
        }; 
    }else{
        alert('El campo NOMBRE requiere mínimo 4 caracteres');
        return false;
    }
}



function calc_total(q, cat){
    var precio = 200;
    var subtotal= precio*q

    if (q==0){
        alert('Debe seleccionar la cantidad de tickets que desea comprar')
        cant.focus();
    }
    else{
    
        switch (true){
            case (cat == 1):
                    descuento=subtotal* 0.8
                    total=subtotal-descuento;
                    input_total.innerText=total;

            break; 
            case (cat == 2):
                    descuento=subtotal* 0.5
                    total=subtotal-descuento;
                    input_total.innerText=total;

            break;  
            case (cat ==3):
                    descuento=subtotal* 0.15
                    total=subtotal-descuento;
                    input_total.innerText=total;
            break;      
        };
    };

};




