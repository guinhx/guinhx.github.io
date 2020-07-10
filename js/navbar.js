
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
            //gameDropdown
            item = document.getElementById('gameDropdown');
            break;
    }
    item.classList.add('active');
}