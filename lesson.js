function login() {
    var u = document.getElementById("username");
    var p = document.getElementById("password");

    if(u.value == "") {
        u.classList.add("error");
        document.getElementById("userError").innerHTML = "Need to fill up";
    } else {
        u.classList.remove("error");
        document.getElementById("userError").innerHTML = "";
    }

    if(p.value == "") {
        p.classList.add("error");
        document.getElementById("passError").innerHTML = "Need to fill up";
    } else {
        p.classList.remove("error");
        document.getElementById("passError").innerHTML = "";
    }
    if(u.value != "" && p.value != "") {
    alert("Login Successful");
}
}