/* Toggle between adding and removing the "responsive" class to when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "navbar-text") {
        x.className += " responsive";
        console.log(x.className)
    } else {
        x.className = "navbar-text";
        console.log(x.className)
    }
}