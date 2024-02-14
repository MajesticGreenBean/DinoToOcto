const input = document.querySelector(".user-input");
input.addEventListener("change", function () {
  if(input.value.toUpperCase() === "OCTOPUS") {
    document.getElementById("linkToLove").classList.remove("nonClickByDefault");
    document.getElementById("linkToLove").style.color = "green";
    document.getElementById("linkToLove").style.border = "1px solid black";
  }
  input.value = "";
});

