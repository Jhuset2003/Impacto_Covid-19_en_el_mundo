console.log("conectado")

const verDatos = async() => {
    const respuesta = await fetch('https://disease.sh/v3/covid-19/countries');
    console.log(respuesta)

    const country = await respuesta.json();
    covid19 = country

    for (let index = 0; index < country.length; index++) {
        document.getElementById('tabla').innerHTML += "<tr>" +
                                                    "<td>" + covid19[index]["country"]+"</td>"+
                                                    "<td>" + covid19[index]["cases"]+"</td>"+
                                                    "<td>" + covid19[index]["deaths"]+"</td>"+
                                                    "</tr>"
    }
};




/* ======================FUNCION FILTRAR POR PAISES========================= */

function verPais(){
    var paises = document.getElementById('paises');
    var pais = paises.options[paises.selectedIndex].value;

    const verDatosPorPais = async() => {
        const respuesta = await fetch("https://disease.sh/v3/covid-19/countries/"+pais);
       
    
        const country = await respuesta.json();
        covid19 = country
    
        for (let index = 0; index < country.length; index++) {
            document.getElementById('tabla').innerHTML += "<tr>" +
                                                        "<td>" + covid19[index]["date"]+"</td>"+
                                                        "<td>" + covid19[index]["cases"]+"</td>"+
                                                        "<td>" + covid19[index]["deaths"]+"</td>"+
                                                        "</tr>"
        }
    };
    verDatosPorPais();
}

