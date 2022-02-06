const numero = document.querySelector('#datos')
let url = 'https://disease.sh/v3/covid-19/countries?sort=cases'
fetch(url) /* solicitud a la url */
    .then(response => response.json()) // resuelve la promesa y la pasa a formato json 
    .then(data => mostrarData(data)) // lee objeto data y lo imprime por consola
    .catch(error => console.log(error))
    
const mostrarData = (data) => {
    console.log(data)
    let body = ''
    for (let i = 0; i < data.length; i++) {
        body += `<tr><td><img width="50px"src="${data[i].countryInfo.flag}">
        </td><td>${data[i].country}</td><td>${data[i].cases}</td>
        <td>${data[i].todayCases}</td><td>${data[i].deaths}</td>
        <td>${data[i].todayDeaths}</td><td>${data[i].recovered}</td>
        <td>${data[i].active}</td><td>${data[i].critical}</td><td>${data[i].tests}</td>`
    }
    document.getElementById('datos').innerHTML = body
  
    $(document).ready( function () {
        $('#table').DataTable();
    } );
}
