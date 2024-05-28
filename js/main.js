const button = document.getElementById('login')
button.addEventListener('click', function () { 
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value
    console.log(username, password);
    login(username, password)
})

function login( username, password) {
    const button = document.getElementById('login')
    button.disabled = true

    const loader = document.getElementById('loader')
    loader.style.display = 'block'

    const txtUsername = document.getElementById('username').disabled = true
    const txtPassword = document.getElementById('password').disabled = true
    var settings = {
        "url": "https://script.google.com/macros/s/AKfycbyLLQTRX1-3j1-2LCejIq1aXjnNBI5LgoOEVpnkzLWGeTpu1tCvMlcdIEttdy9ciwOkJA/exec",
        "type": "POST",
        "data":JSON.stringify({
            "username": username,
            "password": password
        }),
        success: function(){},
        error: function() {Swal.fire('Something went wrong','','error').then(()=>location.reload())}
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