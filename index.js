function displayInfo() {
    const info = JSON.parse(this.responseText);
  
    let symbol = info.symbol
  
    let image = info.profile.image
  
    let elem = document.createElement("img");
    elem.src = image;
  
    let companyName = info.profile.companyName
    let industry = info.profile.industry
    let price = info.profile.price
    let changes = parseFloat(info.profile.changes)
    let changesPercentage = info.profile.changesPercentage
    let isNegative = null
    let website = info.profile.website
  
  
    document.getElementById('symbol').innerHTML = symbol;
  
    document.getElementById("logo").appendChild(elem);
    
    document.getElementById('company-name').innerHTML = companyName;
    document.getElementById('industry').innerHTML = industry;
    document.getElementById('price').innerHTML = "$" + price;
    document.getElementById('changes').innerHTML = "$" + changes;
    document.getElementById('changes-percentage').innerHTML = changesPercentage;
    document.getElementById('website').innerHTML = "<a href='"+website+"'>" + website + "</a>";
  
    if (changes < 0) {
      isNegative = true
    }
    else {
      isNegative = false
    }
  
    if (isNegative == true) {
      document.getElementById('changes').classList.add('red')
      document.getElementById('changes-percentage').classList.add('red')
    }
    else {
      document.getElementById('changes').classList.add('green')
      document.getElementById('changes-percentage').classList.add('green')
    }
  
  }
  
  function getInfo() {
    const req = new XMLHttpRequest();
    const symbol = document.getElementById('symbol').value;
    req.addEventListener('load', displayInfo);
    req.open('GET', 'https://financialmodelingprep.com/api/v3/company/profile/' + symbol + '?apikey=df221fd64469296f1ce8157078a0dca6');
    req.send();
  }