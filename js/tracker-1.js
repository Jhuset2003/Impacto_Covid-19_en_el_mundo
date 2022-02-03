
let ejemplo = document.getElementById('ejemplo')

let select = document.getElementById('select')
const getData = async()=> {
    const resp = await fetch('https://disease.sh/v3/covid-19/countries')
    const data = await resp.json()
        data.forEach(element => {
            const country = select.innerHTML +=  `<option value=${element.country}>${element.country}</option>`
        console.log(element.cases)
        })
}
getData()




