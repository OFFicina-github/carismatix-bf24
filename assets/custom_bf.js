$(document).ready(function() {
  console.log('-cust_bf-');
  
/*COUNTER BAR
    // Set the date we're counting down to
var countDownDate = new Date("Nov 24, 2023 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  var gg = 'gg';
  var hh = 'hh';
  var mm = 'mm';
  var ss = 'ss';
    
  // Output the result in an element with id="counter"
  var clockElement = document.getElementById("counter");
  if(clockElement){
    clockElement.innerHTML = `<div>
        <h2>` + days + `</h2>
        <h4>`+ gg + `</h4>
        </div>
        <div class="linea"></div>
        <div>
          <h2>` + hours + `</h2>
          <h4>`+ hh + `</h4>
        </div>
        <div class="linea"></div>
        <div>
          <h2>` + minutes + `</h2>
          <h4>`+ mm + `</h4>
        </div>
        <div class="linea"></div>
        <div>
          <h2>` + seconds + `</h2>
          <h4>`+ ss + `</h4>
        </div> `;
  }

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("counter").innerHTML = "HAKING COMPLETE";
  }
}, 1000);*/

/*COUNTER POPUP
// Set the date we're counting down to
var countDownDate2 = new Date("Nov 24, 2023 00:00:00").getTime();

// Update the count down every 1 second
var x2 = setInterval(function() {

  // Get today's date and time
  var now2 = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance2 = countDownDate2 - now2;
    
  // Time calculations for days, hours, minutes and seconds
  var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
  var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);

  var gg2 = 'gg';
  var hh2 = 'hh';
  var mm2 = 'mm';
  var ss2 = 'ss';
    
  // Output the result in an element with id="counter"
  var clockElement2 = document.getElementById("counter2");
  if(clockElement2){
    clockElement2.innerHTML = `<div>
        <h2>` + days2 + `</h2>
        <h4>`+ gg2 + `</h4>
        </div>
        <div class="linea"></div>
        <div>
          <h2>` + hours2 + `</h2>
          <h4>`+ hh2 + `</h4>
        </div>
        <div class="linea"></div>
        <div>
          <h2>` + minutes2 + `</h2>
          <h4>`+ mm2 + `</h4>
        </div>
        <div class="linea"></div>
        <div>
          <h2>` + seconds2 + `</h2>
          <h4>`+ ss2 + `</h4>
        </div> `;
  }

  // If the count down is over, write some text 
  if (distance2 < 0) {
    clearInterval(x2);
    document.getElementById("counter2").innerHTML = "HAKING COMPLETE";
  }
}, 1000);*/

// Ridimensionamento dimensione banner Collections Page
const contenitore = document.querySelector('#collection .boost-pfs-container-default-box');
const colGrande = document.querySelector('#collection .boost-pfs-filter-right-col .boost-pfs-filter-products');
const windowW = window.innerWidth;

if (contenitore && windowW > 900) {
    //console.log(contenitore.offsetWidth);
    //console.log(colGrande.offsetWidth);

    let misura = (windowW - contenitore.offsetWidth) / 2 + colGrande.offsetWidth + 9;
    document.querySelector('#counter_box').style.maxWidth = `${misura}px`;
}
/*POP CONTROL*/
  var popupBf = $('#popup_box_bf');
var popupBfClose = $('#popup_box_bf a');
popupBfClose.click(()=>{popupBf.removeClass('open')});
if(popupBf.length){
    //funzione set coockie
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    //funzione get coockie
    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    //funzione check coockie
    function checkCookie() {
        var cookieValue = getCookie("submit_confirm");
        if (cookieValue == "") {

            /*imposto Cookie*/
            setCookie("submit_confirm", "on", 30);

            setTimeout(function(){
                //console.log('submit');
                popupBf.addClass('open');
            }, 4000);

        } else {
            console.log("Cookie 'submit_confirm' attivo: " + cookieValue);
        }
    }
    checkCookie();
}

/*etichetta bf pagina prodotto*/
var hookEtichettaBf = $('.box_decor_gray .pagamento_rate_banner.fattura');
var etichettaBf = `<div class="sconto_speciale_bf">Stai usufruendo dello sconto esclusivo [black friday] <strong>>>> APPROFITTANE</strong></div>`;
if(hookEtichettaBf.length){
    hookEtichettaBf.after(etichettaBf);
}


     console.log('-cus');



   //trasformo stringa Scheda Tecnica in lista
const par_specifiche_tecniche = document.querySelector('.product-tabs .product-tabs__content div.product-tabs__tab-item-wrapper:nth-child(2) .product-tabs__tab-item-content p');
if (par_specifiche_tecniche) {
  
  const pezziStringa = par_specifiche_tecniche.textContent.split(', ');

  pezziStringa.forEach(function(pezzo) {
    const elementoI = document.createElement('i');
    elementoI.textContent = pezzo;
    par_specifiche_tecniche.parentNode.insertBefore(elementoI, par_specifiche_tecniche.nextSibling);
  });

  par_specifiche_tecniche.parentNode.removeChild(par_specifiche_tecniche);
}
  



  
});