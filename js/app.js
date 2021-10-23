window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("navbar").style.bottom = "560px";
    document.getElementById("navbar").style.padding = "1em";
    document.getElementById("navbar").style.paddingTop = "5px";
    document.getElementById("navbar").style.boxShadow = "0 .1rem 1rem rgba(0,0,0,.15)";
    document.getElementById("navbar").style.height = "75px";
    document.getElementById("navbar").style.transition = "all .5s";
    document.getElementById("navbar").style.backgroundColor = "white";
  } else {
    document.getElementById("navbar").style.bottom = "533px";
    document.getElementById("navbar").style.paddingTop = "0px";
    document.getElementById("navbar").style.height = "65px";
    document.getElementById("navbar").style.backgroundColor = "#D9E4EC";
    document.getElementById("navbar").style.boxShadow = "";
  }
}

//====================================================================//

function myFunction(x) {
  x.classList.toggle("change");
}

//====================================================================//

var menu_aberto_aberto = 0;

$("#menu-responsivo").on("click", function(e){

	if(menu_aberto_aberto == 0){
		abrirMenu();
	}else{
		fecharMenu();
	}
	
});

function abrirMenu(){
	$("#row-responsivo").show(4500);
  $('#row-responsivo').animate({left: '70px'});
  $("#bars").css("margin-top", "15px");
	menu_aberto_aberto = 1;
}

function fecharMenu(){
	$("#row-responsivo").hide(4500);
  $("#bars").css("margin-top", "-5px");
	menu_aberto_aberto = 0;
}

//====================================================================//