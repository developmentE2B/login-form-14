const button = document.getElementById('login')
button.addEventListener('click', function () { 
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value
    console.log(username, password);
    login(username, password)
})

function login( username, password) {

    var settings = {
        "url": "https://script.google.com/macros/s/AKfycbyLLQTRX1-3j1-2LCejIq1aXjnNBI5LgoOEVpnkzLWGeTpu1tCvMlcdIEttdy9ciwOkJA/exec",
        "type": "POST",
        "data":JSON.stringify({
            "username": username,
            "password": password
        }),
        success: function(){
            // alert( "Gracias" );
        },
        error: function() {Swal.fire('Error de conexión','','info')}
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
        if (response == 'Successful login') {
            localStorage.setItem('session', username)
            Swal.fire('Welcome!', '', 'success').then(()=> location.href = 'pages/home.html')
        }else{
            Swal.fire(response,'','error').then(()=>location.reload())
        }
    })

}