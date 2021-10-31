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

$("#div-box-shadow").on("mouseover", function(e) {
  $("#div-box-shadow").css("box-shadow", "0 .1rem 1rem rgba(0,0,0,.15)");
  $("#div-box-shadow").css("transition", "all .4s");
  $("#div-color-blue").css("background-color", "blue");
  $("#div-color-blue").css("transition", "all .6s");
  $("#icone-color").css("color", "white");
  $("#texto-color").css("color", "blue");
  $("#texto-color").css("transition", "all .6s");
});

$("#div-box-shadow").on("mouseleave", function(e) {
  $("#div-box-shadow").css("box-shadow", "");
  $("#icone-color").css("color", "blue");
  $("#div-color-blue").css("background-color", "#d9e4ec");
  $("#texto-color").css("color", "#000000");
});

//====================================================================//

$("#div-box-shadow-2").on("mouseover", function(e) {
  $("#div-box-shadow-2").css("box-shadow", "0 .1rem 1rem rgba(0,0,0,.15)");
  $("#div-box-shadow-2").css("transition", "all .4s");
  $("#div-color-blue-2").css("background-color", "blue");
  $("#div-color-blue-2").css("transition", "all .6s");
  $("#icone-color-2").css("color", "white");
  $("#texto-color-2").css("color", "blue");
  $("#texto-color-2").css("transition", "all .6s");
});

$("#div-box-shadow-2").on("mouseleave", function(e) {
  $("#div-box-shadow-2").css("box-shadow", "");
  $("#icone-color-2").css("color", "blue");
  $("#div-color-blue-2").css("background-color", "#d9e4ec");
  $("#texto-color-2").css("color", "#000000");
});

//====================================================================//

$("#div-box-shadow-3").on("mouseover", function(e) {
  $("#div-box-shadow-3").css("box-shadow", "0 .1rem 1rem rgba(0,0,0,.15)");
  $("#div-box-shadow-3").css("transition", "all .4s");
  $("#div-color-blue-3").css("background-color", "blue");
  $("#div-color-blue-3").css("transition", "all .6s");
  $("#icone-color-3").css("color", "white");
  $("#texto-color-3").css("color", "blue");
  $("#texto-color-3").css("transition", "all .6s");
});

$("#div-box-shadow-3").on("mouseleave", function(e) {
  $("#div-box-shadow-3").css("box-shadow", "");
  $("#icone-color-3").css("color", "blue");
  $("#div-color-blue-3").css("background-color", "#d9e4ec");
  $("#texto-color-3").css("color", "#000000");
});

//====================================================================//

$("#div-box-shadow-4").on("mouseover", function(e) {
  $("#div-box-shadow-4").css("box-shadow", "0 .1rem 1rem rgba(0,0,0,.15)");
  $("#div-box-shadow-4").css("transition", "all .4s");
  $("#div-color-blue-4").css("background-color", "blue");
  $("#div-color-blue-4").css("transition", "all .6s");
  $("#icone-color-4").css("color", "white");
  $("#texto-color-4").css("color", "blue");
  $("#texto-color-4").css("transition", "all .6s");
});

$("#div-box-shadow-4").on("mouseleave", function(e) {
  $("#div-box-shadow-4").css("box-shadow", "");
  $("#icone-color-4").css("color", "blue");
  $("#div-color-blue-4").css("background-color", "#d9e4ec");
  $("#texto-color-4").css("color", "#000000");
});

//====================================================================//

$("#div-box-shadow-5").on("mouseover", function(e) {
  $("#div-box-shadow-5").css("box-shadow", "0 .1rem 1rem rgba(0,0,0,.15)");
  $("#div-box-shadow-5").css("transition", "all .4s");
  $("#div-color-blue-5").css("background-color", "blue");
  $("#div-color-blue-5").css("transition", "all .6s");
  $("#icone-color-5").css("color", "white");
  $("#texto-color-5").css("color", "blue");
  $("#texto-color-5").css("transition", "all .6s");
});

$("#div-box-shadow-5").on("mouseleave", function(e) {
  $("#div-box-shadow-5").css("box-shadow", "");
  $("#icone-color-5").css("color", "blue");
  $("#div-color-blue-5").css("background-color", "#d9e4ec");
  $("#texto-color-5").css("color", "#000000");
});

//====================================================================//

$("#div-box-shadow-6").on("mouseover", function(e) {
  $("#div-box-shadow-6").css("box-shadow", "0 .1rem 1rem rgba(0,0,0,.15)");
  $("#div-box-shadow-6").css("transition", "all .4s");
  $("#div-color-blue-6").css("background-color", "blue");
  $("#div-color-blue-6").css("transition", "all .6s");
  $("#icone-color-6").css("color", "white");
  $("#texto-color-6").css("color", "blue");
  $("#texto-color-6").css("transition", "all .6s");
});

$("#div-box-shadow-6").on("mouseleave", function(e) {
  $("#div-box-shadow-6").css("box-shadow", "");
  $("#icone-color-6").css("color", "blue");
  $("#div-color-blue-6").css("background-color", "#d9e4ec");
  $("#texto-color-6").css("color", "#000000");
});

//====================================================================//

$("#div-box-shadow-7").on("mouseover", function(e) {
  $("#div-box-shadow-7").css("box-shadow", "0 .1rem 1rem rgba(0,0,0,.15)");
  $("#div-box-shadow-7").css("transition", "all .4s");
  $("#div-color-blue-7").css("background-color", "blue");
  $("#div-color-blue-7").css("transition", "all .6s");
  $("#icone-color-7").css("color", "white");
  $("#texto-color-7").css("color", "blue");
  $("#texto-color-7").css("transition", "all .6s");
});

$("#div-box-shadow-7").on("mouseleave", function(e) {
  $("#div-box-shadow-7").css("box-shadow", "");
  $("#icone-color-7").css("color", "blue");
  $("#div-color-blue-7").css("background-color", "#d9e4ec");
  $("#texto-color-7").css("color", "#000000");
});

//====================================================================//

$("#div-box-shadow-8").on("mouseover", function(e) {
  $("#div-box-shadow-8").css("box-shadow", "0 .1rem 1rem rgba(0,0,0,.15)");
  $("#div-box-shadow-8").css("transition", "all .4s");
  $("#div-color-blue-8").css("background-color", "blue");
  $("#div-color-blue-8").css("transition", "all .6s");
  $("#icone-color-8").css("color", "white");
  $("#texto-color-8").css("color", "blue");
  $("#texto-color-8").css("transition", "all .6s");
});

$("#div-box-shadow-8").on("mouseleave", function(e) {
  $("#div-box-shadow-8").css("box-shadow", "");
  $("#icone-color-8").css("color", "blue");
  $("#div-color-blue-8").css("background-color", "#d9e4ec");
  $("#texto-color-8").css("color", "#000000");
});

//====================================================================//

$("#div-box-shadow-9").on("mouseover", function(e) {
  $("#div-box-shadow-9").css("box-shadow", "0 .1rem 1rem rgba(0,0,0,.15)");
  $("#div-box-shadow-9").css("transition", "all .4s");
  $("#div-color-blue-9").css("background-color", "blue");
  $("#div-color-blue-9").css("transition", "all .6s");
  $("#icone-color-9").css("color", "white");
  $("#texto-color-9").css("color", "blue");
  $("#texto-color-9").css("transition", "all .6s");
});

$("#div-box-shadow-9").on("mouseleave", function(e) {
  $("#div-box-shadow-9").css("box-shadow", "");
  $("#icone-color-9").css("color", "blue");
  $("#div-color-blue-9").css("background-color", "#d9e4ec");
  $("#texto-color-9").css("color", "#000000");
});

//====================================================================//



//====================================================================// 