let fechaA = document.getElementById('fecha')
Date.nombreMes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Abril', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

function obtenerNombreCompletoMes(fecha){
return Date.nombreMes[fecha.getMonth()];
}
console.log(obtenerNombreCompletoMes(new Date()));





let ejemplo = document.getElementById('ejemplo')

let select = document.getElementById('select')
const getData = async () => {
    const resp = await fetch('https://disease.sh/v3/covid-19/countries')
    const data = await resp.json()
    data.forEach(element => {
        const country = select.innerHTML += `<option value=${element.country}>${element.country}</option>`
        
    })
}
getData()