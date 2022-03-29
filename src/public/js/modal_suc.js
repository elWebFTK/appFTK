// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    if (modal.style.display == "none") {
        modal.style.display = "block";
        console.log('Abri 1');
    } else {
        modal.style.display = "none";
        console.log('me cerre');
        modal.style.display = "block";
        console.log('me abri de nuevo');
    }   
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}
btn2.onclick = function () {
    if (modal.style.display == "none") {
        modal.style.display = "block";
        console.log('Abri 2');
    } else {
        modal.style.display = "none";
        console.log('me cerre');
        modal.style.display = "block";
        console.log('Abri 2');
    }   
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}
btn3.onclick = function () {
    if (modal.style.display == "none") {
        modal.style.display = "block";
        console.log('Abri 3');
    } else {
        modal.style.display = "none";
        console.log('me cerre');
        modal.style.display = "block";
        console.log('Abri 3');
    }   
}
btn4.onclick = function () {
    if (modal.style.display == "none") {
        modal.style.display = "block";
        console.log('Abri 4');
    } else {
        modal.style.display = "none";
        console.log('me cerre');
        modal.style.display = "block";
        console.log('Abri 4');
    }   
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}