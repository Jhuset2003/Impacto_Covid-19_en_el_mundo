

console.log("conectado")

const form = document.getElementById("myForm")

form.addEventListener('submit', function(e){
e.preventDefault()

var country = document.getElementById("country").value

var url = "https://disease.sh/v3/covid-19/countries/"+country

covidData(url)
})

async function covidData(url){
    let response = await fetch(url)
    let data = await response.json()
    console.log(data)
    let DivDeaths = document.querySelector("#deaths"); 
    
    DivDeaths.innerHTML =  "deaths :" + "&nbsp&nbsp&nbsp&nbsp" + data.deaths;

    let divRecovered = document.querySelector("#recovered"); 

    divRecovered.innerHTML =  "recovered :" + "&nbsp&nbsp&nbsp&nbsp" + data.recovered;

    let divCases = document.querySelector("#cases");
    
    divCases.innerHTML =  "cases :" + "&nbsp&nbsp&nbsp&nbsp" + data.cases

}





