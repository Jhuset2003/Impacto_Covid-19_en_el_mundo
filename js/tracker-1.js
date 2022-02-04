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

    //codigo realiza @dariohimo Feb 3 2022
    //
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
        console.log("Datos:", datos)

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
=========CARGAR DATOS TOTALES TOP-10=======
================================ */

const cargarDatosTotalesTop = async () => {
    try {
        const respuestaTop = await fetch('https://disease.sh/v3/covid-19/all');
        const datosTop = await respuestaTop.json();
        console.log("Datos:", datosTop)
        
        let totalCaseData = document.getElementById('totalCaseData');
        totalCaseData.innerHTML = `${datosTop.cases} `

        let activeCaseData = document.getElementById('activeCaseData');
        activeCaseData.innerHTML = `${datosTop.active} `

        let recoveredCaseData = document.getElementById('recoveredCaseData');
        recoveredCaseData.innerHTML = `${datosTop.recovered} `

        let deathsCaseData = document.getElementById('deathsCaseData');
        deathsCaseData.innerHTML = `${datosTop.todayDeaths} `

        console.log(datosTop) /* devuelve un objeto con todos los datos*/
    } catch (error) {
        console.log(error);
    }
}
cargarDatosTotalesTop()
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

    /* ============================
=========Fecha Update tracker======= codigo ralizado @dariohimo Feb 4 2022
================================ */
let meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
let fechaCreacion = new Date();

   mes = meses[fechaCreacion.getMonth()]
   dia = fechaCreacion.getDay();
   year = fechaCreacion.getFullYear();

let fechaTotal = document.querySelector("#fecha")

    fechaTotal.innerHTML = ` ${mes}  ${dia -1}, ${year} ` ;

/*=======  Fin codigo fecha ======== */


