import React from "react";
import classes from "./styles/app.module.css";
import { FaPhone, FaEnvelope, FaGithub, FaFacebook } from 'react-icons/fa';

function App() {
  return (
    <>
      <div className={classes.main}>
        <div className={classes.section}>
          <div className={classes.left}>
            <img src="https://firebasestorage.googleapis.com/v0/b/cv-54f4e.appspot.com/o/2.jpg?alt=media&token=53875de5-e47e-4050-a06e-4dfabd4c31b6" alt="Avatar" />
          </div>
          <div className={`${classes.right} ${classes.itCenter}`}>
            <div className={classes.title}>
              <h1>Itzel Karina Fernandez Rios</h1>
              <h2>Ing. de Software </h2>
              <div >
                <div className="espacio">
                < FaPhone /> <strong>Telefono:</strong> 272-170-19-94
                </div>
                <div>
                  <FaEnvelope /> <strong>Correo electronico:</strong> itzel5kari10@gmail.com
                </div>
                <div>
                  <FaEnvelope /> <strong>Correo institucional:</strong> zs20006763@estudiantes.uv.mx
                </div>
                <div>
                  <FaGithub /> <strong>GitHub:</strong> <a href="https://github.com/I2k3">I2k3</a>
                </div>
                <div>
                  <FaFacebook /> <strong>Facebook: </strong> <a href="https://www.facebook.com/profile.php?id=100004870218686">Karina Frs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.section}>
          <div className={classes.left}>
            <h3>Acerca de mi</h3>
          </div>
          <div className={classes.right}>
            <div className={classes.wrap}>
              <p>
              Soy una persona apasionada por la tecnología y la programación. Como técnico en programación y estudiante de ingeniería de software, 
              tengo una sólida base en el desarrollo de software y un enfoque proactivo para aprender nuevas habilidades.
               Me encanta participar en cursos y proyectos que me permitan mejorar continuamente mis conocimientos y habilidades en el campo. 
               Soy conocida por mi capacidad para adaptarme rápidamente a nuevos entornos y formas de trabajo, lo que me permite enfrentar desafíos con confianza y determinación.
              </p>
            </div>
          </div>
        </div>
        <div className={classes.section}>
          <div className={classes.left}>
            <h3>Habilidades </h3>

          </div>
          <div className={classes.right}>
            <div className={classes.skill}>
              <h4>Capacidad de análisis y síntesis</h4>
              <p>Bastante habil para desglosar problemas complejos y fusionar información para tomar decisiones fundamentadas de manera eficiente.</p>
             
            </div>
            <div className={classes.skill}>
              <h4>Resolucion de problemas</h4>
              <p>
              Habilidad demostrada para identificar y abordar eficazmente desafíos, encontrando soluciones innovadoras y efectivas.
              </p>
            </div>
            <div className={classes.skill}>
              <h4>Organización y planificación</h4>
              <p>
              Mantengo un enfoque estructurado para llevar a cabo proyectos de manera eficiente, cumpliendo con los plazos establecidos.
              </p>
            </div>
            <div className={classes.skill}>
              <h4>Diseñar y crear</h4>
              <p>
              Encuentro la manera de mostrar una vision de prototipos creados con el fin de satisfacer al cliente o enriquecer proyectos.
              </p>
            </div>
            <div className={classes.skill}>
              <h4>Liderazgo</h4>
              <p>
              Me considero una persona con la capacidad para inspirar, motivar y guiar a otros hacia el logro de objetivos comunes.
              </p>
            </div>
            <div className={classes.skill}>
              <h4>Trabajo en equipo</h4>
              <p>
              Habilidad de colaboracion eficiente en un entorno respetuoso.
              </p>
            </div>
            <div className={classes.skill}>
              <h4>Disponibilidad de horario</h4>
              <p>
              Cuento con la capacidad de gestionar mi tiempo de manera eficiente para cumplir con los plazos establecidos y lograr los objetivos.
              </p>
            </div>
          </div>
        </div>
        <div className={classes.section}>
          <div className={classes.left}>
            <h3>Conocimientos </h3>

          </div>
          <div className={classes.right}>
            <div className={classes.skill}>
              <h4>HTML</h4>
              <progress id="file" max="100" value="62">70%</progress>
            </div>
            <div className={classes.skill}>
              <h4>CSS</h4>
              <p>
              <progress id="file" max="100" value="60">70%</progress>
              </p>
            </div>
            <div className={classes.skill}>
              <h4>JSX</h4>
              <p>
              <progress id="file" max="100" value="42">70%</progress>
              </p>
            </div>
            <div className={classes.skill}>
              <h4>React</h4>
              <p>
              <progress id="file" max="100" value="63">70%</progress>
              </p>
            </div>
            <div className={classes.skill}>
              <h4>Excel</h4>
              <p>
              <progress id="file" max="100" value="60">60%</progress>
              </p>
            </div>
            <div className={classes.skill}>
              <h4>UML</h4>
              <p>
              <progress id="file" max="100" value="89">70%</progress>
              </p>
            </div>
            <div className={classes.skill}>
              <h4>Spring boot</h4>
              <p>
              <progress id="file" max="100" value="60">70%</progress>
              </p>
            </div>
            <div className={classes.skill}>
              <h4>Github</h4>
              <p>
              <progress id="file" max="100" value="89">70%</progress>
              </p>
            </div>
          </div>
        </div>
       

        <div className={classes.section}>
          <div className={classes.left}>
            <h3>Experiencia Laboral</h3>
          </div>
          <div className={classes.right}>
            <div className={classes.edu1}>
              <div className="left">
                <p>Mayo 2024 – Agosto 2024</p>
                <h4>KYA TRACKER </h4>
                <p>Orizaba, Ver</p>
              </div>
              <div>
              <p><strong>Desarrollador/ Monitorista /Programador de equipos </strong></p>
              Realice su pagina web, estaba a cargo de todos los dispositivos de la empresa, así como su programación, 
              sus eventualidades, y sus programaciones.
              </div>
            </div>
            <div className={classes.edu1}>
              <div className="left">
                <p>2023</p>
                <h4>Aplicacion AreBoFitness</h4>
                <p>Orizaba, Ver</p>
              </div>
              <div>
              <p><strong>Gestion del proyecto y Diseñadora </strong></p>
              Fue un proyecto creado para la empresa AreBoFitness para la gestion y Administracion completa del gym.
              </div>
            </div>
            <div className={classes.edu1}>
              <div className="left">
                <p>2023</p>
                <h4>Aplicación Educativa</h4>
                <p>Ixtac, Ver</p>
              </div>
              <div>
                <div>
              <p> <strong>Diseñadora</strong></p>
              Diseño y desarrollo de recursos multimedia para videojuego educativo en la facultad de negocios y tecnologías con la ayuda del la empresa GeCosoft.
              </div>
              </div>
            </div>
          </div>
        </div>



        <div className={classes.section}>
          <div className={classes.left}>
            <h3>Cursos y Certificaciones</h3>
          </div>
          <div className={classes.right}>
          <div className={classes.edu}>
              <div className="left">
                <h5>2024</h5>
                <h4>STREMAX – Video vigilancia y gps para flotillas</h4>
              </div>
              <div>
              Es un curso presencial para ver la innovación de la tecnología para la seguridad de vehículos.
              </div>
            </div>
            <div className={classes.edu}>
              <div className="left">
                <h5>2023</h5>
                <h4>Kaggle - Python</h4>
              </div>
              <div>
                Es un curso que con una seria de ejercicios te explica el lenguaje mas importante para la ciencia de datos
               <p> <a href="https://firebasestorage.googleapis.com/v0/b/cv-54f4e.appspot.com/o/Itzel%20Karina%20Fernandez%20Rios%20-%20Python.png?alt=media&token=a81e1805-a96e-4f45-989b-9284588ba0c9"><strong>Certificado</strong></a>
               </p>
              </div>
            </div>
            <div className={classes.edu}>
              <div className="left">
                <h5>2023</h5>
                <h4>Kaggle - Pandas</h4>
              </div>
              <div>
              El curso se basa sobre la libreria Pandas que esta especializada en la manipulación y el análisis de datos
              <p> <a href="https://firebasestorage.googleapis.com/v0/b/cv-54f4e.appspot.com/o/Itzel%20Karina%20Fernandez%20Rios%20-%20Pandas.png?alt=media&token=df23ddf5-1baf-40fc-b74f-32ed03f2c4d2"><strong>Certificado</strong></a>
              </p>
              </div>
            </div>
            <div className={classes.edu}>
              <div className="left">
                <h5>2023</h5>
                <h4>Kaggle - Intro to Machine Learning</h4>
              </div>
              <div>
              Tiene algunos ejercicios para entender las ideas centrales del Machine Learning y ya creando modelos
              <p> <a href="https://firebasestorage.googleapis.com/v0/b/cv-54f4e.appspot.com/o/Itzel%20Karina%20Fernandez%20Rios%20-%20Intro%20to%20Machine%20Learning.png?alt=media&token=b422fc49-a644-4e6b-8f04-666e18cd88f9"><strong>Certificado</strong></a>
              </p>
              </div>
            </div>
            <div className={classes.edu}>
              <div className="left">
                <h5>2023</h5>
                <h4>Kaggle - Intermediate Machine Learning</h4>
              </div>
              <div>
                Este curso te enseña a manejar valores faltantes, valores no numéricos, fuga de datos y más.
              <p> <a href="https://firebasestorage.googleapis.com/v0/b/cv-54f4e.appspot.com/o/Itzel%20Karina%20Fernandez%20Rios%20-%20Intermediate%20Machine%20Learning.png?alt=media&token=0fd27b67-627b-4c7c-aedf-a315ba20295c"><strong>Certificado</strong></a>
              </p>
              </div>
            </div>
            <div className={classes.edu}>
              <div className="left">
                <h5>2020</h5>
                <h4>Certificacion  Microsoft-Office 365</h4>
              </div>
              <div>
              <p> Esta certificacion es un examen de conocimiento para las diferentes herramientas del paquete de office 365
              </p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.section}>
          <div className={classes.left}>
            <h3>Educacion</h3>

          </div>
          <div className={classes.right}>
            <div className={classes.edu}>
              <div className="left">
                <h5>2020 - Actualemente</h5>
                <h4>Universidad Veracruzana</h4>
              </div>
              <div>
                <p>
                Curse la carrera en "Ingeniería de Software" en la universidad veracruzana.
                </p>
                <p>
                  Ixtac, Ver
                </p>
              </div>
            </div>
            <div className={classes.edu}>
              <div className="left">
                <h5>2017 - 2020</h5>
                <h4>Cetis 146 "Miguel Barragan"</h4>
              </div>
              <div>
                <p>
                  Curse la preparatoria con la carrera tecnica en programación
                  con proceso de titulación inmediata
                </p>
                <p>
                  Rio Blanco, Ver
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
