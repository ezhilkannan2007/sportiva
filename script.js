
var three_line = document.getElementById("three_line")
var overlay = document.querySelector(".overlay")
function side_nav() {
    var side_header = document.querySelector(".side_header")
    side_header.style.left = "0"
    overlay.style.display="block"
}

var x_mark = document.getElementById("x_mark")
x_mark.addEventListener("click", function () {
    var side_header = document.querySelector(".side_header")
    side_header.style.left = "-65%"
    overlay.style.display="none"
})




var enteredtext = "";
var search = document.getElementById("search");
var entire = document.querySelector(".entire");
var elements = entire.querySelectorAll("h4");

search.addEventListener("keyup", function (event) {
    enteredtext = event.target.value.toLowerCase(); // make case-insensitive

    for (var i = 0; i < elements.length; i++) {
        if (elements[i].textContent.toLowerCase().indexOf(enteredtext) < 0) {
            elements[i].parentElement.style.display = "none"; // hide the whole card
        } else {
            elements[i].parentElement.style.display = "block"; // show the whole card
        }
    }
})

/*buy button in order page*/

function buy() {
    var order_name = document.getElementById("order_name")
    var order_address = document.getElementById("order_address")
    var order_contact = document.getElementById("order_contact")

    if (!order_name.value || !order_address.value || !order_contact.value == 1) {
        alert("Please Enter All Necessary fields")
        return;
    }
    else {
        alert("Order Confirmed Successfully!")
        order_name.value = ""
        order_address.value = ""
        order_contact.value = ""

        return;
    }
}

