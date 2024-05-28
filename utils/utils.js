function checkSession(){
    if (sessionStorage.getItem("user") == null) {
        window.location.href = "../index.html";
    }
}

checkSession()