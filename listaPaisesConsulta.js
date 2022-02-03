//json
console.log("listaPaises")

//
function cargarJson() {
 fetch('https://disease.sh/v3/covid-19/countries')  
 .then(response => response.json())
 .then(jsonCargado);
}
function jsonCargado(json) {
  
    console.log("que llega array >>>" , json);
    
    let covid = "deaths"

    //llega en array
    let claves = Object.values(json);       

   // console.log("Pais. ", claves[0].country)
   
    claves.forEach(element => {
      console.log(element)
      let listaDesplegable = document.querySelector('#todo') 
           
      listaDesplegable.innerHTML += `<option value="${element.country}" > ${element.country}  </option>`

    });

    //
    let  consultaPais = document.querySelector('#todo');   //trae paises

    consultaPais.addEventListener('click', function(e){

    // e.preventDefault()
    console.log("e", e)

    /* ####################  
       //trae por pais
   */
  let country = document.getElementById("todo").value  // = claves[1].country
  
    claves.forEach(element => {

       //console.log("foreach", element.country, element.cases)
      
       if (element.country === country) {
         console.log("igual a", element.country)
         //
         //variables hacia el Dom 
         //
         let listaPaises = document.querySelector(".authors"); 
         let totalCases = document.querySelector(".cases"); 
         let totalDeaths = document.querySelector(".deaths"); 
         let totalRecovered = document.querySelector(".recovered"); 
         // DOM
         //
         listaPaises.innerHTML = ` Pais:  ${element.country}  `
         totalCases.innerHTML = `  Cases: ${element.cases}  `
         totalDeaths.innerHTML = ` Deaths: ${element.deaths} `
         totalRecovered.innerHTML = ` Recovered: ${element.recovered} `
        
        }

    });
});

}
console.log(cargarJson()); 