import React, { useMemo, useState } from "react";

const academyItems = [
  {
    title: "Especialización en Telecomunicaciones",
    place: "Universidad Tecnológica de Bolívar",
    detail: "Ingeniería de telecomunicaciones (septiembre de 2014 - septiembre de 2015).",
  },
  {
    title: "Ingeniero Electrónico",
    place: "Universidad Tecnológica de Bolívar",
    detail: "Ingeniería de telecomunicaciones (marzo de 2006 - marzo de 2013).",
  },
  {
    title: "Administrador de Redes de Computadores",
    place: "SENA - CIP",
    detail: "Redes (2010 - 2012).",
  },
];

const certifications = [
  { title: "Programa Misión TIC 2022", detail: "Diplomado en fundamentos de Python, Java, desarrollo de software y aplicaciones web." },
  { title: "Curso Básico de Python", detail: "Formación inicial en lógica y programación con Python." },
  { title: "Curso Definitivo de HTML y CSS", detail: "Maquetación web y estilos para interfaces responsivas." },
  { title: "Curso de Creación de Páginas Web con WordPress y No-code", detail: "Creación de sitios y flujos de publicación sin código." },
  { title: "Curso de Computación Básica", detail: "Bases de sistemas, herramientas digitales y productividad." },
];

const jobsItems = [
  {
    company: "Fundación SerSocial IPS",
    role: "Analista de Desarrollo Tecnológico",
    period: "abril de 2022 - actualidad",
    location: "Cartagena de Indias, Bolívar, Colombia",
  },
  {
    company: "Media Commerce Partners S.A",
    role: "Auditor control interno operativo",
    period: "abril de 2016 - marzo de 2022",
    location: "Valledupar",
  },
  {
    company: "Applus Norcontrol",
    role: "Ingeniero Optimización de RF V1",
    period: "julio de 2015 - enero de 2016",
    location: "Cartagena",
  },
  {
    company: "COMUNICATE LTDA. - DirecTV",
    role: "Supervisor de Instalaciones",
    period: "diciembre de 2012 - junio de 2015",
    location: "Cartagena, Bolívar, Colombia",
  },
  {
    company: "COMSAT DirecTV",
    role: "Coordinador de Optimizaciones",
    period: "septiembre de 2012 - noviembre de 2012",
    location: "Cartagena",
  },
  {
    company: "SIRECOM",
    role: "Instalador Electrónico",
    period: "abril de 2012 - agosto de 2012",
    location: "Bocagrande - Base Naval",
  },
  {
    company: "Dico Telecomunicaciones S.A.",
    role: "Proyectista",
    period: "febrero de 2012 - abril de 2012",
    location: "Cartagena, Barrio España",
  },
];

const softSkillsItems = [
  "Automatización de procesos con foco en resultados prácticos.",
  "Pensamiento analítico para diagnóstico y solución de problemas.",
  "Adaptabilidad para aprendizaje continuo de nuevas tecnologías.",
  "Comunicación clara y colaboración efectiva en equipos multidisciplinarios.",
];

const keywordItems = [
  "n8n",
  "Docker",
  "Automatización de procesos",
  "Python",
  "JavaScript",
  "HTML",
  "CSS",
  "Telecomunicaciones",
  "Redes",
  "Auditoría operativa",
];

const languageItems = [
  "Español: nativo",
  "Inglés: nivel profesional",
  "Alemán: nivel intermedio laboral",
];

const contactItems = [
  {
    label: "Teléfono",
    value: "3017143477",
    href: "tel:+573017143477",
  },
  {
    label: "Email",
    value: "jorge_212006@hotmail.com",
    href: "mailto:jorge_212006@hotmail.com",
  },
  {
    label: "LinkedIn",
    value: "www.linkedin.com/in/jlruedam",
    href: "https://www.linkedin.com/in/jlruedam",
  },
];

const tabs = [
  { id: "academy", label: "Academy" },
  { id: "jobs", label: "Jobs" },
  { id: "skills", label: "Soft skills" },
  { id: "contact", label: "Contact" },
  { id: "keywords", label: "Keywords" },
];

function App() {
  const [activeTab, setActiveTab] = useState("academy");

  const tabContent = useMemo(() => {
    if (activeTab === "academy") {
      return (
        <>
          <h2>Formación académica</h2>
          <ul className="article-list">
            {academyItems.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.place}</p>
                <p>{item.detail}</p>
              </li>
            ))}
          </ul>

          <h2>Certificaciones</h2>
          <ul className="article-list">
            {certifications.map((item) => (
              <li key={`${item.title}-${item.detail}`}>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </li>
            ))}
          </ul>
        </>
      );
    }

    if (activeTab === "jobs") {
      return (
        <>
          <h2>Experiencia profesional</h2>
          <ul className="article-list">
            {jobsItems.map((item) => (
              <li key={`${item.company}-${item.period}`}>
                <h3>{item.role}</h3>
                <p>{item.company}</p>
                <p>{item.period}</p>
                <p>{item.location}</p>
              </li>
            ))}
          </ul>
        </>
      );
    }

    if (activeTab === "skills") {
      return (
        <>
          <h2>Soft skills</h2>
          <ul className="article-list">
            {softSkillsItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>Idiomas</h2>
          <ul className="article-list">
            {languageItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </>
      );
    }

    if (activeTab === "contact") {
      return (
        <>
          <h2>Contacto</h2>
          <ul className="article-list">
            {contactItems.map((item) => (
              <li key={item.label}>
                <strong>{item.label}: </strong>
                <a href={item.href} target={item.label === "LinkedIn" ? "_blank" : undefined} rel="noreferrer">
                  {item.value}
                </a>
              </li>
            ))}
          </ul>
        </>
      );
    }

    return (
      <>
        <h2>Keywords y stack</h2>
        <ul className="article-list">
          {keywordItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </>
    );
  }, [activeTab]);

  return (
    <>
      <header className="header-container">
        <h1 className="header-container__title">jlruedam_dev</h1>
      </header>

      <main className="main-container">
        <section className="side-panel">
          <figure id="figure-side-panel">
            <img src="/img/484101.png" alt="Logo" />
            <figcaption>Jorge Luis Rueda Marín</figcaption>
          </figure>

          <article className="card">
            <div className="card__cabecera">
              <strong>Analista de Desarrollo Tecnológico</strong>
            </div>
            <div className="card__content">
              <img className="card__img" src="/img/yo2.jpg" alt="Foto de perfil" />
              <p className="card__paragraph">
                Profesional con experiencia en tecnología, telecomunicaciones y mejora de procesos.
                Actualmente me desempeño como Analista de Desarrollo Tecnológico, enfocando mi trabajo en
                automatización y construcción de soluciones útiles para el negocio.
                <br />
                <br />
                Me motiva aprender nuevas herramientas cada día. Python y JavaScript son parte central de
                mi stack, y combino ese conocimiento con una base sólida en redes y telecomunicaciones.
              </p>
            </div>
          </article>
        </section>

        <section className="content-panel">
          <nav className="nav-bar">
            <ul className="nav-bar-list">
              {tabs.map((tab) => (
                <li className="nav-bar-list__item" key={tab.id}>
                  <button
                    className={`boton nav-bar__boton ${activeTab === tab.id ? "is-active" : ""}`}
                    onClick={() => setActiveTab(tab.id)}
                    type="button"
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <article className="article-container">{tabContent}</article>
        </section>
      </main>

      <footer className="footer-container">
        <h2 className="footer-container__title">Building practical tech every day</h2>
      </footer>
    </>
  );
}

export default App;
