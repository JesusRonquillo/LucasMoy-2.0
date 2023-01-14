import React, { useState } from "react"
import "./style.css"
import skills from "../../images/skills.png"
import ReactPlayer from "react-player"


const Header = () => {

  const URL = "https://www.youtube.com/watch?v=swdcD6OPMlk"
  const [time, setTime] = useState(URL)
  var acc = document.getElementsByClassName("accordion")
  var i

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
      this.classList.toggle("active")

      /* Toggle between hiding and showing the active panel */
      var panel = this.nextElementSibling
      if (panel.style.display === "block") {
        panel.style.display = "none"
      } else {
        panel.style.display = "block"
      }
    })
  }
  return (
    <div>
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      <main id="main">
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container">
            <ol>
              <li>
                <a href="index.html">Cursos</a>
              </li>
              <li>Python</li>
            </ol>
            <h2>Curso de Programación en Python</h2>
          </div>
        </section>
        <section className="inner-page">
          <div className="bg-transparent h-0 w-0"><br/></div>
          <div className="container xl:flex">
                <div className="">
                <p>
                  <ReactPlayer
                    width="852px"
                    height="480px"
                    url={time}
                    controls={true}
                  />
                </p>
                <div className="bg-sky-900 mt-8 rounded-xl">
                    <div><br/></div>
                    <div className=" text-white ml-5 text-lg">
                      Enlaces del curso:
                    <li>Archivos del curso</li>{" "}
                    <span>https://github.com/lucasmoy-dev/Curso-de-Python</span>
                    <li>Comunidad de discord</li>{" "}
                    <span>https://github.com/lucasmoy-dev/Curso-de-Python</span>
                    </div> 
                    <div><br/></div>
                </div>
                    <section className=" -mt-10">
                      <details className="justify-between">
                        <summary className="estilo_lista_1 font-semibold text-xl rounded-xl  max-w-4xl h-16 text-left bg-slate-200">
                          <span className="text-xs"><br></br></span>
                          <span className="text-sky-900 ml-7" >1. </span>
                          <span className="">¿Cuál es la diferencia entre lista y tuplas en Python?</span>
                        </summary>
                          <p className="ml-16 text-lg mt-3 max-w-3xl"> Las listas son mutables, es decir, se pueden editar. Las
                              listas son más lentas que las tuplas. Las tuplas son
                              inmutables las tuplas son listas que no pueden ser editadas.
                              Las tuplas son más rápidas que la lista.</p>
                      </details>
                      <details className="justify-between mt-3">
                        <summary className="estilo_lista_1 font-semibold text-xl rounded-xl  max-w-4xl h-16 text-left bg-slate-200">
                          <span className="text-xs"><br></br></span>
                          <span className="text-sky-900 ml-7" >2. </span>
                          <span className="">¿Cuáles son las características principales de Python?</span>
                        </summary>
                          <p className="ml-16 text-lg mt-3 max-w-3xl"> 
                              <p>-  Python es  un idioma interpretado, contrario a otros lenguajes como C y variantes, 
                                    Python no necesita de compilados antes de ser ejecutado. Hay otros lenguajes 
                                    interpretados como PHP y Ruby.</p>
                              <p>-  Python es escrito de forma dinámica, esto quiere decir  que, no es necesario indicar 
                                    los tipos de variables cuando se declaran o algo así. Puedes hacer cosas como x=111 
                                    y luego x="Soy una cadena", sin error.</p>
                              <p>-  Python se adapta muy bien a la programación orientada a objetos porque permite 
                                    definir clases junto con la composición y la herencia.  No tiene especificadores 
                                    de entrada (como los de C++ públicos, privados).</p>
                              <p>-  En Python, las funciones son objetos de primera clase. Esto quiere decir que, pueden 
                                    asignarse a variables, devolverse desde otras funciones y pasar a funciones. Las 
                                    clases también son objetos de primera clase.</p>
                              <p>-  Escribir código Python es rápido, pero la ejecución puede ser más lenta que la de 
                                    lenguajes compilados. Afortunadamente, Python permite incluir extensiones basadas 
                                    en C, así los cuellos de botella se pueden optimizar y a menudo lo son. El paquete 
                                    numpy, es un buen ejemplo de esto, es realmente rápido porque la mayor parte del calculo 
                                    que hace no lo hace Python.</p>
                              <p>-  Python es útil  en muchas esferas: automatización, aplicaciones web, grandes 
                                    aplicaciones de datos, modelado científico, y muchas más. También es utilizado 
                                    frecuentemente como código "intermediario" para lograr que otros lenguajes y 
                                    componentes jueguen bien.</p> 
                              </p>
                      </details>
                      <details className="justify-between mt-3">
                        <summary className="estilo_lista_1 font-semibold text-xl rounded-xl  max-w-4xl h-16 text-left bg-slate-200">
                          <span className="text-xs"><br></br></span>
                          <span className="text-sky-900 ml-7" >3. </span>
                          <span className="">¿Qué tipo de lenguaje es Python? ¿Programación o scripting?</span>
                        </summary>
                          <p className="ml-16 text-lg mt-3 max-w-3xl"> Python puede crear scripts, pero, es un lenguaje de 
                          programación de propósito generalizado.</p>
                      </details>
                      <details className="justify-between mt-3">
                        <summary className="estilo_lista_1 font-semibold text-xl rounded-xl  max-w-4xl h-16 text-left bg-slate-200">
                          <span className="text-xs"><br></br></span>
                          <span className="text-sky-900 ml-7" >4. </span>
                          <span className="">¿Cómo se interpreta Python?</span>
                        </summary>
                          <p className="ml-16 text-lg mt-3 max-w-3xl"> Python es un idioma interpretado, 
                          que no está en código a nivel de máquina antes de su tiempo de ejecución.</p>
                      </details>
                      <details className="justify-between mt-3">
                        <summary className="estilo_lista_1 font-semibold text-xl rounded-xl  max-w-4xl h-16 text-left bg-slate-200">
                          <span className="text-xs"><br></br></span>
                          <span className="text-sky-900 ml-7" >5. </span>
                          <span className="">¿Qué es Pep 8?</span>
                        </summary>
                          <p className="ml-16 text-lg mt-3 max-w-3xl"> PEP son siglas que representan a Python Enhancement 
                          Proposal. Y que especifican cómo formatear el código de Python para que tenga una máxima legibilidad.</p>
                      </details>
                    </section>
                </div>
            <div className="xl:ml-20">
            <ol>
              <li>
                <button onClick={() => setTime(URL + "&t=0s")}>
                  Click hear
                </button>
                Introducción al Curso de Programación en Python
              </li>
              <li>
                <button onClick={() => setTime(URL + "&t=169s")}>
                  Click hear
                </button>
                Instalación de Pycharm
              </li>
              <li>
                <button onClick={() => setTime(URL + "&t=273s")}>
                  Click hear
                </button>
                "Hola Mundo" en Python
              </li>
              <li>
                <button onClick={() => setTime(URL + "&t=387s")}>
                  Click hear
                </button>
                ¿Qué es información?
              </li>
              <li>
                <button onClick={() => setTime(URL + "&t=503s")}>
                  Click hear
                </button>
                Nomenclatura de Variables
              </li>
              <li>
                <button onClick={() => setTime(URL + "&t=908s")}>
                  Click hear
                </button>
                ¿Qué es un lenguaje de tipado fuerte?
              </li>
              <li>
                <button onClick={() => setTime(URL + "&t=1080s")}>
                  Click hear
                </button>
                Concatenación de Textos
              </li>
              <li>
                <button onClick={() => setTime(URL + "&t=1495s")}>
                  Click hear
                </button>
                Operadores de Comparación
              </li>
              <li>
                <button onClick={() => setTime(URL + "&t=2899s")}>
                  Click hear
                </button>
                Operadores Aritméticos
              </li>
              <li>
                <button onClick={() => setTime(URL + "&t=3138s")}>
                  Click hear
                </button>
                ¿Qué es una función?
              </li>
              <li>
                <button onClick={() => setTime(URL + "&t=3551s")}>
                  Click hear
                </button>
                Ejercicio: Calculadora de IMC
              </li>
              <li>
                <button onClick={() => setTime(URL + "&t=4615s")}>
                  Click hear
                </button>
                Bugs y Debugging
              </li>
              <li>
                <button onClick={() => setTime(URL + "&t=5380s")}>
                  Click hear
                </button>
                Ejercicio: Chat con Emojis en la consola
              </li>
              <li>
                <button onClick={() => setTime(URL + "&t=5923s")}>
                  Click hear
                </button>
                ¿Qué son los Arreglos?
              </li>
              <li>
                <button onClick={() => setTime(URL + "&t=6109s")}>
                  Click hear
                </button>
                Bucle: For
              </li>
              <li>
                <button onClick={() => setTime(URL + "&t=6389s")}>
                  Click hear
                </button>
                Diccionarios
              </li>
              <li>
                <button onClick={() => setTime(URL + "&t=6749s")}>
                  Click hear
                </button>
                Ejercicio: Encriptador de archivos con Datos Personales
              </li>
              <li>
                <button onClick={() => setTime(URL + "&t=8411s")}>
                  Click hear
                </button>
                ¿Qué es un Array Multidimensional?
              </li>
              <li>
                <button onClick={() => setTime(URL + "&t=9213s")}>
                  Click hear
                </button>
                Programación Orientada a Objetos
              </li>
              <li>
                <button onClick={() => setTime(URL + "&t=10704s")}>
                  Click hear
                </button>
                Introducción Machine Learning
              </li>
              <li>
                <button onClick={() => setTime(URL + "&t=11935s")}>
                  Click hear
                </button>
                Introducción a HTML, CSS y Javascript
              </li>
              <li>
                <button onClick={() => setTime(URL + "&t=12213s")}>
                  Click hear
                </button>
                ¿Cómo funciona un servidor? - Google Cloud
              </li>
              <li>
                <button onClick={() => setTime(URL + "&t=12512s")}>
                  Click hear
                </button>
                Ejercicio: Sistema de Gestión - Frontend
              </li>
              <li>
                <button onClick={() => setTime(URL + "&t=15754s")}>
                  Click hear
                </button>
                Introducción a Bases de Datos
              </li>
              <li>
                <button onClick={() => setTime(URL + "&t=17553s")}>
                  Click hear
                </button>
                Diseño de Tablas
              </li>
              <li>
                <button onClick={() => setTime(URL + "&t=19906s")}>
                  Click hear
                </button>
                SQL
              </li>
              <li>
                <button onClick={() => setTime(URL + "&t=23980s")}>
                  Click hear
                </button>
                Estructura de una URL y los Métodos HTTP
              </li>
              <li>
                <button onClick={() => setTime(URL + "&t=24837s")}>
                  Click hear
                </button>
                ¿Qué es JSON y qué es XML?
              </li>
              <li>
                <button onClick={() => setTime(URL + "&t=25270s")}>
                  Click hear
                </button>
                Ejercicio: Api REST con Flask
              </li>
              <li>
                <button onClick={() => setTime(URL + "&t=29607s")}>
                  Click hear
                </button>
                Ejercicio: Sistema de Gestión - Parte 2
              </li>
            </ol>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Header
