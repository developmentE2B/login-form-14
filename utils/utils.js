function checkSession(){
    if (localStorage.getItem("session") == null) {
        window.location.href = "../index.html";
    }
}

checkSession()