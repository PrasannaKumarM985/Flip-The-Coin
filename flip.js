function flipSound() {
  var audio = new Audio("freesound_community-coin-flip-88793.mp3");
  audio.play();
}

document.querySelector(".button").addEventListener("click", function () {
  flipCoin();
});

document.querySelector(".coin").addEventListener("click", function () {
  flipCoin();
});

function flipCoin() {
  flipSound();

  document.querySelector(".coin").classList.add("flip-animation");
  document.querySelector(".flip").innerHTML = "Flipping...";

  setTimeout(function () {
    var result = Math.random() < 0.5 ? "Heads" : "Tails";

    document.querySelector(".flip").innerHTML = result;

    if (result === "Tails") {
      document.querySelector(".coin").setAttribute("src", "./resources/tails.svg");
    } else {
      document.querySelector(".coin").setAttribute("src", "./resources/heads.svg");
    }

    document.querySelector(".coin").classList.remove("flip-animation");
  }, 700);
}
