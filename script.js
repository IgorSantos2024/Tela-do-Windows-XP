setTimeout(() => {
  var hora = new Date().toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });
  $("#relogio").html(hora);
}, 100);

setInterval(() => {
  var hora = new Date().toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });
  $("#relogio").html(hora);
}, 1000);

$(".desktop-icon").click(function () {
  if ($(this).hasClass("selected")) {
    $(this).removeClass("selected");
  } else {
    $(this).addClass("selected");
  }
});

$(".desktop-icon").draggable({
  contaiment: ".area-de-trabalho",
  stop: function(){
    $(this).removeClass('selected')
    $(this).addClass('selected')
  }
});

