let fechaA = document.getElementById('fecha')
Date.nombreMes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Abril', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

function obtenerNombreCompletoMes(fecha) {
    return Date.nombreMes[fecha.getMonth()];
}
console.log(obtenerNombreCompletoMes(new Date()));


/* ======================== */

console.log("listaPaises")

function cargarJson() {
    fetch('https://disease.sh/v3/covid-19/countries')
        .then(response => response.json())
        .then(jsonCargado);
}

function jsonCargado(json) {
    let covid = "deaths"

    //llega en array
    let claves = Object.values(json);

    // console.log("Pais. ", claves[0].country)

    claves.forEach(element => {
        //console.log(element)

        let listaDesplegable = document.querySelector('#listaPais')

        listaDesplegable.innerHTML += `<option value="${element.country}" > ${element.country}  </option>`

    });
    let consultaPais = document.querySelector('#listaPais'); //trae paises
    consultaPais.addEventListener('click', function (e) {
        let country = document.getElementById("listaPais").value;
        claves.forEach(element => {

            if (element.country === country) {
                let totalCases = document.querySelector("#totalCaseData-2");
                let totalDeaths = document.querySelector("#totalDeathsData");
                let totalRecovered = document.querySelector("#totalRecoveredData");
                let totalActivos = document.querySelector("#totalActiveData");
                let totalCasos = document.querySelector("#NewCasessData");
                let muertesHoy = document.querySelector("#NewDeatsData")
                let casosHoy = document.querySelector("#NewCasessData")
                // DOM
                //
                totalCases.innerHTML = `${element.cases}  `
                totalDeaths.innerHTML = `${element.deaths} `
                totalRecovered.innerHTML = `${element.recovered} `
                totalActivos.innerHTML = `${element.active} `
                totalCasos.innerHTML = `${element.todayCases} `
                muertesHoy.innerHTML = `${element.todayDeaths} `
                casosHoy.innerHTML = `${element.todayCases} `
            }
        });
    });
}
console.log(cargarJson());


/* ===========DATOS TOTALES==================== */

const cargarDatosTotales = async () => {
    try {
        const respuesta = await fetch('https://disease.sh/v3/covid-19/all');


        const datos = await respuesta.json();
        let totalConfirmedData = document.getElementById('totalConfirmedData');
        totalConfirmedData.innerHTML = `${datos.cases} `

        let totalRecoveredData = document.getElementById('totalRecoveredData-2');
        totalRecoveredData.innerHTML = `${datos.recovered} `

        let totalDeathsData = document.getElementById('totalDeathsData-2');
        totalDeathsData.innerHTML = `${datos.deaths} `

        let NewDeathsData = document.getElementById('NewDeathsData-2');
        NewDeathsData.innerHTML = `${datos.todayDeaths} `

        console.log(datos) /* devuelve un objeto con todos los datos*/
    } catch (error) {
        console.log(error);
    }
}
cargarDatosTotales()
/* ============================
=========Top 10 Banderas=======
================================ */

let banderas = document.querySelector('.flag');
fetch('https://disease.sh/v3/covid-19/countries?sort=cases')
    .then(response => response.json())
    .then(data => {        
        console.log(data) /* Trae el arreglo de datos */

        const maximo = 10;
        let datas = data.slice(0, maximo)
        datas.map(datosBandera => {
            banderas.innerHTML += `<div class = "container_flag">
                                  <div class= "second_div">
                                <img src="${datosBandera.countryInfo.flag}">
                                <p class="pais">${datosBandera.country}</p>
                                </div>
                                <p class="casos">${datosBandera.cases}</p>
                                </div>`
        });
    });




/* let banderas = document.querySelector('.flag');

const cargarBanderas = async () => {

    try {
        const respuestaTop10 = await fetch('https://disease.sh/v3/covid-19/countries?sort=cases');

        const datosTop10 = await respuestaTop10.json();

        banderas.innerHTML += `<div class = "container_flag">
                                <div class= "second_div">
                                <img src="${datosTop10.countryInfo.flag}">
                                <p class="pais">${datosTop10.country}</p>
                                </div>
                                <p class="casos">"${datosTop10.cases}"`
        console.log(datosTop10)

    } catch (error) {
        console.log(error)
    }
}
cargarBanderas() */