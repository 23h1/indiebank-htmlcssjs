// context is global shared
const ctx = {
    "accounts": [
        {
            "name": "peter",
            "email": "peter@barc.kl",
            "balance": 50000,
            "password": "secret"
        }
    ]
}

function create(){
    const name = document.getElementById('name');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var status = document.getElementById('createStatus');
    
    ctx.accounts.push({
        name: name.value,
        email: email.value,
        password: password.value,
        balance: 0,
    });

    // update status & clear form
    name.value = '';
    email.value = '';
    status.innerHTML = 'Account Created!';
}

function allData(){
    const status = document.getElementById('allDataStatus');
    status.innerHTML = JSON.stringify(ctx.accounts);
}