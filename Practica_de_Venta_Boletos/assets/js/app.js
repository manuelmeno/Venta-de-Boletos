
/*function ball() {
    var a;
    a = document.getElementById("div1");
    a.innerHTML = "&#xf1e3;";
    setTimeout(function () {
        a.innerHTML = "&#xf1e3;";
      }, 1000);
    setTimeout(function () {
        a.innerHTML = "&#xf242;";
      }, 2000);
    setTimeout(function () {
        a.innerHTML = "&#xf241;";
      }, 3000);
    setTimeout(function () {
        a.innerHTML = "&#xf240;";
      }, 4000);
  }
  ball();
  setInterval(ball, 5000);
  */

 function ball()
 {
  $("i").removeClass("fa-rotate-270");
  setTimeout(function () {
    $("i").addClass("fas fa-futbol fa-rotate-45");
  }, 10);
  setTimeout(function () {
    $("i").removeClass("fa-rotate-45");
    $("i").addClass("fas fa-futbol fa-rotate-90");
    }, 200);
    setTimeout(function () {
      $("i").removeClass("fa-rotate-90");
      $("i").addClass("fas fa-futbol fa-rotate-180");
      }, 300);
      setTimeout(function () {
        $("i").removeClass("fa-rotate-180");
        $("i").addClass("fas fa-futbol fa-rotate-270");
        }, 400);
   /*
  $("i").removeClass("fas fa-futbol fa-rotate-270");

  setTimeout(function () {
    $("i").addClass("fas fa-futbol ");
  }, 1000);
  setTimeout(function () {
  $("i").addClass("fas fa-futbol fa-rotate-90");
  }, 2000);
  setTimeout(function () {
  $("i").addClass("fas fa-futbol fa-rotate-180");
  }, 3000);
  setTimeout(function () {
  $("i").addClass("fas fa-futbol fa-rotate-270");
  }, 4000);
 */
 }
 ball();
 setInterval(ball,500);