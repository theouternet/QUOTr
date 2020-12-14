function displayInfo() {
    const info = JSON.parse(this.responseText);
    
}

function getInfo() {
    const req = new XMLHttpRequest();
    const symbol = document.getElementById('symbol').value;
    req.addEventListener('load', displayInfo);
    req.open('GET', 'https://financialmodelingprep.com/api/v3/company/profile/' + symbol + '?apikey=df221fd64469296f1ce8157078a0dca6');
    req.send();
  }