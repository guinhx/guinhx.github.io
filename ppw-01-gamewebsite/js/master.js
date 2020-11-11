function handlePage() {
    updateActiveItem();
    registerStoreListener();
    registerFormListener();
}

function updateActiveItem() {
    var pieces = window.location.href.split("/");
    var actualPage = pieces[pieces.length-1];
    var item = null;
    switch(actualPage.toLowerCase()) {
        case 'index.html':
            item = document.getElementById('index-item');
            break;
        case 'prices.html':
            item = document.getElementById('prices-item');
            break;
        case 'codmw.html':
        case 'watchdogs.html':
        case 'csgo.html':
            item = document.getElementById('gameDropdown');
            break;
    }
    if(item != null) {
        item.classList.add('active');
    }
}

function registerStoreListener() {
    var steam = document.getElementById('steam-link');
    var amazon = document.getElementById('amazon-link');
    var windowsLink = document.getElementById('windows-link');
    if(steam) {
        steam.addEventListener('mouseover', function(event) {
            event.target.style.opacity = 0.75;
        });
        steam.addEventListener('mouseout', function(event) {
            event.target.style.opacity = 1;
        });
    }
    if(amazon) {
        amazon.addEventListener('mouseover', function(event) {
            event.target.style.opacity = 0.75;
        });
        amazon.addEventListener('mouseout', function(event) {
            event.target.style.opacity = 1;
        });
    }
    if(windowsLink) {
        windowsLink.addEventListener('mouseover', function(event) {
            event.target.style.opacity = 0.75;
        });
        windowsLink.addEventListener('mouseout', function(event) {
            event.target.style.opacity = 1;
        });
    }
}

function registerFormListener() {
    var numberInput = document.getElementById('inputPhone');
    if(numberInput) {
        numberInput.addEventListener('keyup', function (event) {
            var number = event.target.value.replace(/[^\d]/g, "").replace(/\D/g,'');
            event.target.value = number;
            if (number.length == 11) {
                var phone = "(" + number.substr(0, 2) + ") " + number.substr(2, 5) + "-" + number.substr(7);
                event.target.value = phone;
            }
        });
    }
    var mailInput = document.getElementById('inputMail');
    if(mailInput) {
        mailInput.addEventListener('keyup', function(event) {
            var text = event.target.value;
            var sliced = text.split(".");
            if(!text.includes("@") || sliced.length < 2) {
                if(event.target.classList.contains("success")) {
                    event.target.classList.remove("success");
                }
            }else{
                event.target.classList.add("success");
            }
        });
        mailInput.addEventListener('focusout', function(event) {
            var text = event.target.value;
            var sliced = text.split(".");
            if(!text.includes("@") || sliced.length < 2) {
                alert("Invalid e-mail address.");
                event.target.value = "";
            }
        });
    }
}