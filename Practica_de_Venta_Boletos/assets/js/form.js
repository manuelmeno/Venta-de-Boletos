
/*
var onDateSelect = function(selectedDate, input) {
    if (input.id === 'Start') {
     //getting start date
      var start = $('#Start').datepicker("getDate");
      console.log("start - "+start);
      //setting it has mindate
      $("#End").datepicker('option', 'minDate', start);
    } else if(input.id === 'End'){ 
     //getting end date
      var end = $('#End').datepicker("getDate");
      console.log("end - "+end);
      //passing it max date in start
      $("#Start").datepicker('option', 'maxDate', end);
    }
  };
  var onDocumentReady = function() {
    var datepickerConfiguration = {
      onSelect: onDateSelect,
      dateFormat: "mm/yy",
    };
    ///--- Component Binding ---///
    $('#Start').datepicker(datepickerConfiguration);
    
  };
  $(onDocumentReady); 
*/
$("#buttonpagar").click((event)=>{
  swal("Exito!", "Pago Realizado", "success");
});
$('#date').datepicker({ changeMonth: true,changeYear: true,onSelect: function(){checkdate();validarformulario();},dateFormat: 'mm/yy'}).blur(()=>{checkdate();validarformulario();});



/*
$('#date').blur(()=>{checkdate();}).datepicker({dateFormat: 'mm/yy'});
  //Funciones de Validacion
  $("#titular").blur(()=>{
    checkName();
    
  });*/
  $("#titular").blur(()=>{
    checkName();
    validarformulario();
  })
  $("#card").blur(()=>{
    checkcard();
    validarformulario();
    
  });
  $("#cvv").blur(()=>{
    checkcvv();
    validarformulario()
    
  });
  /*
  $("#date").blur(()=>{
    checkdate();
    
  });
  */
 var checkinputtitular=false;
 var checkinputtarjeta=false;
 var checkinputfecha=false;
 var checkinputcvv=false;
  const button1 = document.querySelector('#buttonpagar');
  const inputname=document.querySelector('#titular');
  const inputcard=document.querySelector('#card');
  const inputcvv=document.querySelector('#cvv');
  const inputdate=document.querySelector('#date');
  button1.disabled = true;
  function validarformulario()
  {
    if (checkinputtitular==true && checkinputtarjeta==true && checkinputfecha==true && checkinputcvv==true) {
     
      button1.disabled = false;
      
    }else{
      button1.disabled = true;
  
    }
  }
  /*
  expresion regular
  var s = "09/2021";
  console.log(/^(0[1-9]|1[0-2])\/\d{4}$/.test(s));
  */

  function checkdate(){
      var pattern=/^(0[1-9]|1[0-2])\/\d{4}$/;//Expresione regulares
      
     
    var fecha=$("#date").val();
    if (pattern.test(fecha) &&fecha !=='') {
      console.log("lleno");
      checkinputfecha=true;
      inputdate.classList.remove("focus");
      inputdate.classList.add("focussucess");
    }else{
    
      console.log("vacio");
      inputdate.classList.remove("focussucess");
      inputdate.classList.add("focus");
      checkinputfecha=false;
      
    }
  }
  /*
  function checkdate(){
    var cvv=$("#Start").val();
    console.log(cvv);
    if (cvv !=='') {
      console.log("Fecha Valido");
      
      inputdate.classList.remove("focus");
      inputdate.classList.add("focussucess");
    }else{
      console.log("Fecha Invalido");
      inputdate.classList.remove("focussucess");
      inputdate.classList.add("focus");
     
      
    }


  }*/

  function checkcvv(){
    var pattern=/^(\d\s?){3,4}$/;//Expresione regulares
    var cvv=$("#cvv").val();
  if (pattern.test(cvv) && cvv !=='') {
    console.log("cvv Valido");
    checkinputcvv=true;
    inputcvv.classList.remove("focus");
    inputcvv.classList.add("focussucess");
  }else{
    console.log("cvv Invalido");
    inputcvv.classList.remove("focussucess");
    inputcvv.classList.add("focus");
    checkinputcvv=false;
    
  }
  }
 function checkcard(){
  var pattern=/^(\d\s?){16}$/;//Expresione regulares
  var credit=$("#card").val();
  if (pattern.test(credit) && credit !=='') {
    console.log("Card Valido");
    checkinputtarjeta=true;
    inputcard.classList.remove("focus");
    inputcard.classList.add("focussucess");
  }else{
    console.log("Card Invalido");
    inputcard.classList.remove("focussucess");
    inputcard.classList.add("focus");
    checkinputtarjeta=false;
   
    
  }
 }


  function checkName(){
    var pattern=/^[a-zA-Z ]*$/;//Expresione regulares
    var titular=$("#titular").val();
    
    
    if (pattern.test(titular) && titular !=='') {
      console.log("Nombre Valido");
      checkinputtitular=true;
      inputname.classList.remove("focus");
      inputname.classList.add("focussucess");
    }else{
      console.log("Nombre Invalido");
      inputname.classList.remove("focussucess");
      inputname.classList.add("focus");
      checkinputtitular=false;
      
    }
  
  }