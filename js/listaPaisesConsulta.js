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
      //console.log(element)

      let listaDesplegable = document.querySelector('#listaPais') 
           
      listaDesplegable.innerHTML += `<option value="${element.country}" > ${element.country}  </option>`

    });

    //
    let  consultaPais = document.querySelector('#listaPais');   //trae paises

  
    consultaPais.addEventListener('click', function(e){

    // e.preventDefault()
    // console.log("e", e)

    /* ####################  
       //trae por pais
   */
  let country = document.getElementById("listaPais").value  ;             
    
      claves.forEach(element => {

     // console.log("Banderas  ZZZ", element, element.countryInfo.flag)
      
       if (element.country === country) {
             
        console.log("Banderas Url >>", element.countryInfo.flag)

         //console.log("igual a", element.country)
         //
         //variables hacia el Dom 
         //
         //let listaPaises = document.querySelector(".authors"); 

         let totalCases = document.querySelector("#totalCaseData-2"); 
         let totalDeaths = document.querySelector("#totalDeathsData"); 
         let totalRecovered = document.querySelector("#totalRecoveredData"); 
         let totalActivos  =  document.querySelector("#totalActiveData"); 
         let totalCasos =     document.querySelector("#NewCasessData");
         let muertesHoy =     document.querySelector("#NewDeatsData") 
         let casosHoy  =       document.querySelector("#NewCasessData") 
         
         
         let banderaImagen =   document.getElementById("bandera") 
         let creaImagenBandera = document.createElement("img");
         creaImagenBandera.setAttribute('src', `${element.countryInfo.flag}`);
         banderaImagen.appendChild(creaImagenBandera);


         // DOM
         //
        //listaPaises.innerHTML = ` Pais:  ${element.country}  `
         totalCases.innerHTML = `${element.cases}  `
         totalDeaths.innerHTML = `${element.deaths} `
         totalRecovered.innerHTML = `${element.recovered} `
         totalActivos.innerHTML = `${element.active} `
         totalCasos.innerHTML = `${element.todayCases} `
         muertesHoy.innerHTML = `${element.todayDeaths} `   
         casosHoy.innerHTML = `${element.todayCases} `  //<img src="element.countryInfo.flag" id="bandera" alt="">
                 
    //    banderaImagen.innerHTML = ` <img src="${element.countryInfo.flag}" id="bandera" alt="${element.countryInfo.iso3}">            ` 
          
         

        // console.log("bandera Url>>>>", claves.countryInfo.flag)

      /*
     var el = document.querySelector("#test")  ok
var img = document.createElement("img");   ok

img.setAttribute('src', 'catcoin.png');  ok
el.appendChild(img)

*/




        }
        //console.log("bandera Url>>>>",)

    });
});

}
console.log("Fin")
console.log(cargarJson()); 