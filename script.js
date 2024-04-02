
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show"); //adding a class show
 }

function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show"); //adding a class show
 }

function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show"); //adding a class show
 }

function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show"); //adding a class show
 }


 // Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show') && openDropdown.parentElement.children[0] != event.target) {
        openDropdown.classList.remove('show');
    }
  }
}

var fortnite = document.getElementById("f");

function changeColor(event){
  if (fortnite != event){
    event.style.backgroundColor = "lightgreen";
    fortnite.style.backgroundColor = "lightGray";
    fortnite = event;
  }
}