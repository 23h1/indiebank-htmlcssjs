var ui = {};

ui.navigation = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Indie Bank</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarScroll">
                <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#" onClick="loadHome()">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" onClick="loadCreateAccount()">Create Account</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"></a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Fiat Account
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                        <li><a class="dropdown-item" href="#" onClick="loadLogin()">Login</a></li>
                        <li><a class="dropdown-item" href="#" onClick="loadDeposit()">Deposit</a></li>
                        <li><a class="dropdown-item" href="#" onClick="loadWithdraw()">Withdraw</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#" onClick="loadBalance()">Balance</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Crypto Account(Coming Soon!)</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" onClick="loadAllData()">AllData</a>
                    </li>
                </ul>                
            </div>
        </div>
    </nav>`;

var navigation = document.getElementById('navigation');
navigation.innerHTML += ui.navigation;

ui.home = `
    <div class="card border-success mb-3" style="max-width: 18rem;">
        <div class="card-header bg-transparent border-success">Home: Landing Page</div>
        
        <div class="card-body text-success">
            <h5 class="card-title">Welcome </h5>
            <p class="card-text"> You can explore using the nav bar. </p>
            <img src="bank.png" class="img-fluid" alt="Responsive image">            
        </div>        
    </div>
`;

ui.createAccount = `
    <div class="card border-success mb-3" style="max-width: 18rem;">
        <div class="card-header bg-transparent border-success">Create Account</div>
        
        <div class="card-body text-success">
            <h5 class="card-title">Account Details:</h5>
            <input type="input" class="form-control" id="name" placeholder="Enter name"><br>
            Email address<br>
            <input type="input" class="form-control" id="email" placeholder="Enter email"><br>
            Password<br>
            <input type="password" class="form-control" id="password" placeholder="Enter password"><br>
            <button type="submit" id="submit" class="btn" onclick="create()">Create Account</button>
            <div id='createStatus'></div>
        </div>        
    </div>
`;

ui.login = `
    <div class="card border-success mb-3" style="max-width: 18rem;">
        <div class="card-header bg-transparent border-success">Login</div>
        
        <div class="card-body text-success">
            <h5 class="card-title">Account Details:</h5>
            Email address<br>
            <input type="input" class="form-control" id="loginemail" placeholder="Enter email"><br>
            Password<br>
            <input type="password" class="form-control" id="loginPassword" placeholder="Enter password"><br>
            <button type="submit" id="submit" class="btn" onclick="login()">Login</button>
            <div id='loginStatus'></div>
        </div>        
    </div>
`;

ui.deposit = `
    <div class="card border-success mb-3" style="max-width: 18rem;">
        <div class="card-header bg-transparent border-success">Deposit</div>
        
        <div class="card-body text-success">
            Email<br>
            <input type="input" class="form-control" id="depositEmail" placeholder="Enter email"><br>
            Amount<br>
            <input type="number" class="form-control" id="depositAmount" placeholder="Enter amount"><br>
            <button type="submit" id="submit" class="btn" onclick="deposit()">Deposit</button>
            <div id='depositStatus'></div>
        </div>        
    </div>
`;

ui.withdraw = `
    <div class="card border-success mb-3" style="max-width: 18rem;">
        <div class="card-header bg-transparent border-success">Withdraw</div>
        
        <div class="card-body text-success">
            Email<br>
            <input type="input" class="form-control" id="withdrawEmail" placeholder="Enter email"><br>
            Withdraw amount<br>
            <input type="number" class="form-control" id="withdrawAmount" placeholder="Enter amount"><br>
            <button type="submit" id="submit" class="btn" onclick="withdraw()">Submit</button>
            <div id='withdrawStatus'></div>
        </div>        
    </div>
`;

ui.balance = `
    <div class="card border-success mb-3" style="max-width: 18rem;">
        <div class="card-header bg-transparent border-success">Balance</div>
        
        <div class="card-body text-success">            
            Email address<br>
            <input type="input" class="form-control" id="email" placeholder="Enter email"><br>            
            <button type="submit" id="submit" class="btn" onclick="balance()">Show Balance</button>
            <div id='balanceStatus'></div>
        </div>        
    </div>
`;

ui.allData = `
    <div class="card border-success mb-3" style="max-width: 18rem;">
        <div class="card-header bg-transparent border-success">All Data</div>
        
        <div class="card-body text-success">
            <h5> All Data in Store </h5>
            <button type="button" class="btn btn-secondary" onclick="allData()">Show All Data</button>
            <div id='allDataStatus'></div>
        </div>
    </div>
`;

var loadHome = function(){
    target.innerHTML = ui.home;
};

var loadCreateAccount = function(){
    target.innerHTML = ui.createAccount;
};

var loadLogin = function(){
    target.innerHTML = ui.login;
};

var loadDeposit = function(){
    target.innerHTML = ui.deposit;
};

var loadWithdraw = function(){
    target.innerHTML = ui.withdraw;
};

var loadBalance = function(){
    target.innerHTML = ui.balance;
};

var loadAllData = function(){
    target.innerHTML = ui.allData;
};

loadHome();
//loadCreateAccount();