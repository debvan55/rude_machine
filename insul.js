var numberOfButts = document.querySelectorAll("button").length;

for (var i = 0; i < numberOfButts; i++) {
  document.querySelectorAll(".sonido")[i].addEventListener("click", function() {

    var buttonHTML = this.innerHTML
    makeSound(buttonHTML);
    buttonAnimation(buttonHTML);
  });
}
//KEYBOARD PRESS
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var pendejo = new Audio("sounds/ttsMP3.com_VoiceText_2020-6-6_15_46_17.mp3")
      pendejo.play();
      break;

    case "Pendejo":
      var pendejo = new Audio("sounds/ttsMP3.com_VoiceText_2020-6-6_15_46_17.mp3")
      pendejo.play();
      break;

    case "a":
      var puto = new Audio("sounds/ttsMP3.com_VoiceText_2020-6-6_15_46_28.mp3")
      puto.play();
      break;

    case "Puto":
      var puto = new Audio("sounds/ttsMP3.com_VoiceText_2020-6-6_15_46_28.mp3")
      puto.play();
      break;

    case "s":
      var chupala = new Audio("sounds/ttsMP3.com_VoiceText_2020-6-6_15_46_47.mp3")
      chupala.play();
      break;

    case "Chupala":
      var chupala = new Audio("sounds/ttsMP3.com_VoiceText_2020-6-6_15_46_47.mp3")
      chupala.play();
      break;

    case "Puto":
      var puto = new Audio("sounds/ttsMP3.com_VoiceText_2020-6-6_15_46_28.mp3")
      puto.play();
      break;

    case "d":
      var sobala = new Audio("sounds/ttsMP3.com_VoiceText_2020-6-6_15_46_59.mp3")
      sobala.play();
      break;

    case "Sobala":
      var sobala = new Audio("sounds/ttsMP3.com_VoiceText_2020-6-6_15_46_59.mp3")
      sobala.play();
      break;

    case "j":
      var melapelas = new Audio("sounds/ttsMP3.com_VoiceText_2020-6-6_15_47_10.mp3")
      melapelas.play();
      break;

    case "Me_la_pelas":
      var melapelas = new Audio("sounds/ttsMP3.com_VoiceText_2020-6-6_15_47_10.mp3")
      melapelas.play();
      break;

    case "k":
      var maricon = new Audio("sounds/ttsMP3.com_VoiceText_2020-6-6_15_48_34.mp3")
      maricon.play();
      break;

    case "Maricon":
      var maricon = new Audio("sounds/ttsMP3.com_VoiceText_2020-6-6_15_48_34.mp3")
      maricon.play();
      break;

    case "Pelana":
      var pelana = new Audio("sounds/ttsMP3.com_VoiceText_2020-6-6_15_49_23.mp3")
      pelana.play();
      break;

    case "l":
      var pelana = new Audio("sounds/ttsMP3.com_VoiceText_2020-6-6_15_49_23.mp3")
      pelana.play();
      break;

    default:
      console.log(event.key);

  }
}

//BUTTON ANIMATIO

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);

}

//   Para la proxima funcion de sonido, solo tengo que usat "this" para hacer uso de el archivo de sonido para cada seleccion.
//   ejemplo:
//
// this.play();
//
// voy a tener que hacer una variable que defina mi audio. :)
