# ![DASHBOARD](images/logo.png)
#
# *Impacto Covid-19 en el mundo*

#
## *Inicialización del proyecto de consultar la **API => disease.sh** *   
#
#

*Trabajaremos en crear una página web con un dashboard en el que se pueda ver el número de los contagios de covid-19 hasta la fecha, así como el número de recuperados y el número de personas vacunadas.*

Requerimientos técnicos ⚙️

[Ejemplo mokcup del trabajo:](https://github.com/AndresEstebanPatino/recursos-app-covid/blob/4368c5ccaf066455ad0796b668e2414d6d32e079/mockups/Tracker-2.png)
 

* El proyecto DEBE utilizar la metodología Scrum.
* Se DEBE utilizar Gitflow.
* Se DEBE consumir la API de disease.sh para traer los datos.
* La página DEBE ser responsive.
* Se debe hacer una landing page que sea fiel a mockup.
* El sprint finalizará el día viernes 4 de febrero a las 11:59 pm.
* El diseño DEBE ser fiel al mockup y utilizar las imágenes y los íconos que se dejaron en los recursos.
* La página DEBE mostrar los datos que aparcen en los mockups:
  * Total de contagios.
  * Total muertes.
  * Total de recuperados.
  * Total de casos activos.
  * Nuevos casos.
  * Nuevas muertes.
* La página DEBE filtrar por países.
* En la parte de la tabla se DEBE poder organizar en orden según cada item.
* La página DEBE Permitir que el usuario decida qué numero de resultados quiere ver en la tabla.
* La página debe permitir búsquedas por palabras clave.
* La página DEBE mostrar en alguna parte la cantidad de vacunados en el mundo.
* La página DEBE filtrar los vacunados por país.
* El sitio debe ser interactivo y generar las animaciones que se muestran en el video.
* No se pueden utilizar frameworks ni librerías de Javascript excepto la especificada en las recomendaciones.
* El repositorio DEBE tener un Readme muy específico, con capturas de pantalla y los pasos para la instalación de las librerías si las van a usar.
​

*** Extras ⚙️

*  La página DEBE renderizar los datos en una gráfica lineal de valores vs tiempo como se muestra en el video.
* La página DEBE filtrar las gráficas por país.
* La página DEBE tener un mapa mundial interactivo, que muestre las cifras de cada país al hacer un hover.
​
____
*** Recomendaciones.
____
Pueden utilizar bootstrap.
Pueden utilizar Tailwind.
Pueden utilizar la librería D3Js para las gráficas.
Pueden utilizar preprocesadores de CSS.
__

**Se creo el código de consulta a la api en JS:**

---
JS
---

```javascript

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
``` 
#
#
### *mockup*
#
# DASHBOARD
![Mookup Dashboard](/images/tracker1.jpg)

## *Se aplico al dashboard los datos que se importaron de la api, casos, muertes, activos y  **filtrado por países.***

#
# Diseño Responsive
![Responsive](https://raw.githubusercontent.com/AndresEstebanPatino/recursos-app-covid/main/mockups/Responsive.png)

# Diseño LandinPage
![Landinpage](https://raw.githubusercontent.com/AndresEstebanPatino/recursos-app-covid/main/mockups/home-2.png)

#

# [Recursos Utilizados:](https://github.com/AndresEstebanPatino/recursos-app-covid)

---
# Creditos:
---

```  
        * disease.sh
        * Tecnologías
        * Bootstrap
        * html
        * javascript
        * css
```
---
# Coders:
---

```
 * Laura Vargas
 * Albert Quintanilla
 * Darío Higuera Moreno
   Creación Feb 4 de 2022.
```

#
[Link de la LandinPage github_Pages:](https://jhuset2003.github.io/Impacto_Covid-19_en_el_mundo/)
#

#
[Link a scrum:](https://lauravargas.atlassian.net/jira/software/projects/COV/boards/7)
#



