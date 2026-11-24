import React, { useState } from "react";

const projects = [
  {
    number: "01",
    label: "PRODUCT CONCEPT",
    title: "Daybreak",
    description:
      "A calmer way to plan the day. A little less dashboard, a little more room to think.",
    tags: ["React", "UI design", "Product thinking"],
    visual: "daybreak",
    preview: "YOUR NEXT GOOD IDEA STARTS HERE.",
  },
  {
    number: "02",
    label: "INTERFACE STUDY",
    title: "Signal / Noise",
    description:
      "An observability dashboard that makes the important signal impossible to miss.",
    tags: ["TypeScript", "Data viz", "Interaction"],
    visual: "signal",
    preview: "ALL SYSTEMS NOMINAL",
  },
  {
    number: "03",
    label: "WEB EXPERIMENT",
    title: "Soft Focus",
    description:
      "A small corner of the internet for collecting ideas, connecting dots, and getting unstuck.",
    tags: ["Frontend", "Motion", "Creative coding"],
    visual: "focus",
    preview: "A SPACE FOR WHAT'S NEXT.",
  },
];

const capabilities = [
  {
    number: "01",
    title: "Frontend engineering",
    description:
      "Thoughtful, accessible interfaces built with React, JavaScript, and a healthy respect for the details.",
    tools: "REACT · JAVASCRIPT · CSS",
  },
  {
    number: "02",
    title: "Product-minded building",
    description:
      "Start with the problem, find the simplest useful solution, and make the experience feel unmistakably human.",
    tools: "DISCOVERY · PROTOTYPING · ITERATION",
  },
  {
    number: "03",
    title: "Full-stack curiosity",
    description:
      "Comfortable following a feature through its whole life, from the first sketch to the data behind it.",
    tools: "APIS · DATA · DEPLOYMENT",
  },
];

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      viewBox="0 0 20 20"
      fill="none"
    >
      {diagonal ? (
        <path d="M5 15 15 5M6 5h9v9" />
      ) : (
        <path d="M3 10h13m-5-5 5 5-5 5" />
      )}
    </svg>
  );
}

function Logo() {
  return (
    <a className="brand" href="#home" aria-label="Brandon Cullifer, home">
      <span className="brand-mark">b<span>.</span></span>
      <span className="brand-name">brandon cullifer</span>
    </a>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <Logo />
        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
        >
          <span />
          <span />
        </button>
        <nav aria-label="Main navigation" className={menuOpen ? "nav-open" : ""}>
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#about" onClick={closeMenu}>How I work</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Say hello <ArrowIcon diagonal />
          </a>
        </nav>
      </div>
    </header>
  );
}

function ProjectCard({ project }) {
  return (
    <article className={`project-card project-${project.visual}`}>
      <div className={`project-art art-${project.visual}`}>
        <div className="art-topline">
          <span className="art-dot" />
          <span>PERSONAL LAB / {project.number}</span>
          <span className="art-topline-right">BC<span>®</span></span>
        </div>
        {project.visual === "daybreak" && (
          <div className="daybreak-window">
            <span className="window-caption">A GOOD DAY, IN PROGRESS</span>
            <span className="daybreak-time">09<span>:</span>41</span>
            <span className="daybreak-note">A little space to start.</span>
            <span className="daybreak-task">
              <i /> Make something useful
            </span>
            <span className="daybreak-task muted-task">
              <i /> Take a real lunch break
            </span>
            <span className="window-spark">✳</span>
          </div>
        )}
        {project.visual === "signal" && (
          <div className="signal-window">
            <div className="signal-heading">
              <span className="signal-check">✓</span>
              <span>{project.preview}</span>
            </div>
            <div className="chart-labels"><span>REQUESTS</span><span>LAST 24H</span></div>
            <div aria-hidden="true" className="chart">
              <svg viewBox="0 0 430 150" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#b6f27a" stopOpacity=".25" />
                    <stop offset="100%" stopColor="#b6f27a" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path className="chart-area" d="M0 117C24 113 31 89 53 94S81 121 103 93 131 75 153 85 184 95 205 68 234 79 258 55 288 72 311 44 339 51 363 31 397 50 430 15V150H0Z" />
                <path className="chart-line" d="M0 117C24 113 31 89 53 94S81 121 103 93 131 75 153 85 184 95 205 68 234 79 258 55 288 72 311 44 339 51 363 31 397 50 430 15" />
              </svg>
            </div>
            <div className="chart-bottom"><span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span><span>NOW</span></div>
          </div>
        )}
        {project.visual === "focus" && (
          <div className="focus-window">
            <span className="focus-kicker">A COLLECTION OF THINGS</span>
            <span className="focus-title">Somewhere<br />between <em>idea</em><br />&amp; aha.</span>
            <span className="focus-index">ENTRY 008&nbsp; / &nbsp;ON CURIOSITY</span>
            <span aria-hidden="true" className="focus-orbit orbit-one" />
            <span aria-hidden="true" className="focus-orbit orbit-two" />
            <span aria-hidden="true" className="focus-orbit orbit-three" />
            <span aria-hidden="true" className="focus-star">✳</span>
          </div>
        )}
        <span className="art-preview">{project.preview}</span>
      </div>
      <div className="project-info">
        <div className="project-copy">
          <span className="eyebrow">{project.label}</span>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
        <div className="project-meta">
          <span>{project.tags.map((tag, index) => (
            <span className="tag" key={tag}>
              {index > 0 && <span className="tag-separator">/</span>}
              {tag}
            </span>
          ))}</span>
          <span className="concept-label"><span /> Concept</span>
        </div>
      </div>
    </article>
  );
}

function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <div className="availability">
          <span className="availability-pulse" />
          <span>SOFTWARE DEVELOPER · BUILDING WITH INTENTION</span>
        </div>
        <h1>
          I make the<br />
          <span className="serif-word">internet</span>
          <span className="hero-comma">,</span><br />
          a little more<br />
          <span className="highlight-word">human<span className="highlight-period">.</span></span>
        </h1>
        <div className="hero-bottom">
          <p>
            I&apos;m Brandon — a software developer who cares as much about
            how it feels as how it works.
          </p>
          <a className="text-link" href="#work">
            Take a look around <ArrowIcon />
          </a>
        </div>
      </div>
      <div aria-label="Code editor showing a small React component" className="hero-art">
        <div className="editor-glow" />
        <div className="editor">
          <div className="editor-bar">
            <div className="editor-controls"><i /><i /><i /></div>
            <span>something-good.jsx</span>
            <span className="editor-dots">···</span>
          </div>
          <div className="editor-body">
            <div className="code-line"><span className="line-no">01</span><span><b>const</b> <i>makeSomethingGood</i> = <b>()</b> =&gt; {"{"}</span></div>
            <div className="code-line"><span className="line-no">02</span><span>&nbsp;&nbsp;<b>const</b> intention = <em>&quot;helpful&quot;</em>;</span></div>
            <div className="code-line"><span className="line-no">03</span><span>&nbsp;&nbsp;<b>const</b> details = <em>&quot;thoughtful&quot;</em>;</span></div>
            <div className="code-line"><span className="line-no">04</span><span>&nbsp;&nbsp;<b>const</b> feeling = <em>&quot;a little magic&quot;</em>;</span></div>
            <div className="code-line blank-line"><span className="line-no">05</span><span /></div>
            <div className="code-line"><span className="line-no">06</span><span>&nbsp;&nbsp;<b>return</b> {"{"} intention, details, feeling {"}"};</span></div>
            <div className="code-line"><span className="line-no">07</span><span>{"}"}</span></div>
            <div className="code-line blank-line"><span className="line-no">08</span><span /></div>
            <div className="code-line"><span className="line-no">09</span><span><i>makeSomethingGood</i>();<span className="cursor-block" /></span></div>
          </div>
          <div className="editor-status"><span>JSX</span><span>UTF-8 <i /> Ready for the next idea</span></div>
        </div>
        <div aria-hidden="true" className="orbit-note note-one">{"{ curiosity }"}</div>
        <div aria-hidden="true" className="orbit-note note-two">✳&nbsp; BUILD WITH INTENTION</div>
        <span aria-hidden="true" className="hero-spark spark-one">✳</span>
        <span aria-hidden="true" className="hero-spark spark-two">✳</span>
      </div>
      <a aria-label="Scroll to selected work" className="scroll-cue" href="#work">
        <span>SCROLL A LITTLE</span><i />
      </a>
      <span aria-hidden="true" className="hero-index">40°43&apos; N&nbsp; / &nbsp;73°56&apos; W</span>
    </section>
  );
}

function Marquee() {
  const items = ["GOOD IDEAS", "CLEAN CODE", "HUMAN DETAILS", "A LITTLE MAGIC"];
  return (
    <div aria-label="Good ideas, clean code, human details, a little magic" className="marquee">
      <div aria-hidden="true" className="marquee-track">
        {[0, 1, 2, 3].map((copy) => (
          <span className="marquee-group" key={copy}>
            {items.map((item) => (
              <span className="marquee-item" key={`${copy}-${item}`}>
                {item}<i>✳</i>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}

function WorkSection() {
  return (
    <section className="work-section section-wrap" id="work">
      <div className="section-heading">
        <div>
          <span className="section-kicker">A FEW THINGS, MADE WITH INTENTION</span>
          <h2>Ideas in <span>the making.</span></h2>
        </div>
        <p>
          A peek into my personal lab. These concept projects are where I
          explore interesting problems, interactions, and details.
        </p>
      </div>
      <div className="project-grid">
        {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
      </div>
      <p className="project-footnote"><span>✳</span> These are personal concepts — not client work.</p>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="section-wrap about-inner">
        <div className="about-intro">
          <span className="section-kicker">A BIT ABOUT THE APPROACH</span>
          <h2>Good software<br />should feel <em>good.</em></h2>
          <p>
            The best digital experiences make complicated things feel simple.
            That takes more than clean code: it takes curiosity, care, and
            getting the little things right.
          </p>
          <a className="text-link" href="#contact">A little more about me <ArrowIcon /></a>
        </div>
        <div className="capability-list">
          {capabilities.map((capability) => (
            <article className="capability" key={capability.number}>
              <span className="capability-number">{capability.number}</span>
              <div>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
                <span className="capability-tools">{capability.tools}</span>
              </div>
              <span aria-hidden="true" className="capability-plus">↗</span>
            </article>
          ))}
        </div>
        <div aria-hidden="true" className="about-stamp">
          <span>BUILT WITH CURIOSITY</span><i>✳</i><span>KEPT HUMAN</span>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="contact-section section-wrap" id="contact">
      <span className="section-kicker">HAVE SOMETHING GOOD IN MIND?</span>
      <div className="contact-main">
        <h2>Let&apos;s make<br /><span>it happen.</span></h2>
        <a
          aria-label="Email Brandon Cullifer"
          className="contact-button"
          href="mailto:hello@brandoncullifer.com?subject=Let%27s%20make%20something%20good"
        >
          <span>Send me a note</span><ArrowIcon diagonal />
        </a>
      </div>
      <div className="contact-bottom">
        <p>Have an idea, a question, or just want to talk shop?<br />My inbox is a good place to start.</p>
        <span className="contact-email">HELLO@BRANDONCULLIFER.COM</span>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-wrap footer-inner">
        <Logo />
        <span>MADE WITH CARE <span className="footer-heart">♥</span> AND A LITTLE TOO MUCH COFFEE.</span>
        <a href="#home">BACK TO TOP ↑</a>
        <span className="copyright">© {new Date().getFullYear()} BRANDON CULLIFER</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <WorkSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
