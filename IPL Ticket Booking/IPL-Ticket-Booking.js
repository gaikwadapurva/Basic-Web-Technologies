function getName() {
    var sname = document.getElementById("sname").value;
    if (sname.length <= 1 || sname.length == null) {
        alert("Please enter a valid name.")
        return false;
    }
    return true;
}
function confirmEmail() {
    var email = document.getElementById("email-ID").value;
    var confirm = document.getElementById("confirm-email").value;
    if (email.length == null || confirm.length == null) {
        alert("Please enter an email ID.");
        return false;
    }
    if (email != confirm) {
        alert("Email ID doesn't match as required.");
        return false;
    }
    return true;
}
function getStand() {
    var stand = document.getElementById("stand");
    var stand_text = stand.options[stand.selectedIndex].text;
    if (stand_text != "Select an Option") {
        return true;
    }
    else {
        return false;
    }
}
function getFloor() {
    var floor = document.getElementById("floor");
    var floor_text = floor.options[floor.selectedIndex].text;
    if (floor_text != "Select an Option") {
        return true;
    }
    else {
        return false;
    }
}
function setCost() {
    var stand = document.getElementById("stand");
    var stand_text = stand.options[stand.selectedIndex].text;
    var floor = document.getElementById("floor");
    var floor_text = floor.options[floor.selectedIndex].text;
    if (stand_text == "Platinum Gallery") {
        document.getElementById("cost").innerHTML = "25000.0";
    }
    else if (stand_text == "Super Hospitality Stand") {
        document.getElementById("cost").innerHTML = "20000.0";
    }
    else if ((stand_text == "North West Stand") && (floor_text == "First Floor")) {
        document.getElementById("cost").innerHTML = "6000.0";
    }
    else if ((stand_text == "North West Stand") && (floor_text == "Second Floor")) {
        document.getElementById("cost").innerHTML = "2000.0";
    }
    else if ((stand_text == "East Stand") && (floor_text == "First Floor")) {
        document.getElementById("cost").innerHTML = "3000.0";
    }
    else if ((stand_text == "East Stand") && (floor_text == "Second Floor")) {
        document.getElementById("cost").innerHTML = "1000.0";
    }
    else {
        document.getElementById("cost").innerHTML = "0.0";
        return false;
    }
    return true;
}
function validateForm() {
    if (getName()) {
        if (confirmEmail()) {
            if (getStand()) {
                if (getFloor()) {
                    if (setCost()) {
                        alert("All details entered correctly!");
                    }
                }
            }
        }
    }
}