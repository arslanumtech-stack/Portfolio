import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="topbar">
    <a class="wordmark" href="#top">AH<span>/</span>PORTFOLIO</a>
    <nav aria-label="Main navigation"><a href="#about">About</a><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#contact">Contact</a></nav>
    <a class="topbar__status" href="mailto:arslanum.tech@gmail.com"><span></span> Open to opportunities</a>
  </header>

  <main id="top">
    <section class="profile-shell" id="about">
      <aside class="profile-card">
        <div class="avatar" aria-label="Arslan Haider portrait"><img src="/profile.jpg" alt="Illustrated portrait of Arslan Haider" /><span></span></div>
        <h1>Arslan <strong>Haider</strong></h1>
        <p class="eyebrow">AI / ML ENGINEER</p>
        <p class="role">Building intelligent systems<br />that feel <em>human.</em></p>
        <a class="cv-button" href="/Resume.pdf" download="Arslan-Haider-Resume.pdf">Download CV <span>↓</span></a>
        <div class="profile-links"><a href="https://github.com/arslanumtech-stack" target="_blank" rel="noreferrer"><svg class="social-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 7.9c.85 0 1.7.12 2.5.36 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" /></svg>GitHub <span>↗</span></a><a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer"><svg class="social-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M5.1 8.2H2.2V21h2.9V8.2ZM3.65 3A1.7 1.7 0 1 0 3.65 6.4 1.7 1.7 0 0 0 3.65 3ZM21.8 13.67c0-3.86-2.06-5.66-4.82-5.66-2.22 0-3.21 1.22-3.76 2.08V8.2h-2.9V21h2.9v-6.34c0-1.67.31-3.29 2.39-3.29 2.04 0 2.06 1.91 2.06 3.4V21h2.9l.03-7.33Z" /></svg>LinkedIn <span>↗</span></a></div>
      </aside>

      <div class="intro-panel">
        <div class="intro-panel__top"><span>01. ABOUT</span><span>LAST UPDATED / 2024</span></div>
        <div class="intro-copy"><p><strong>Arslan Haider</strong> is a BS Computer Science graduate from International Islamic University Islamabad with hands-on experience building AI-powered applications and practical software tools.</p><p>His work includes CV parsing and semantic job matching, automated data analysis, full-stack web applications, and object-oriented systems. He is focused on applying Python, machine learning, and clean engineering to solve real-world problems.</p></div>
        <div class="fact-grid"><div><span>Education</span><strong>BS Computer Science · IIUI</strong></div><div><span>Based in</span><strong>Islamabad, Pakistan</strong></div><div><span>Focus</span><strong>AI / ML · Python</strong></div><div><span>Core stack</span><strong>PyTorch · Pandas · Scikit-Learn</strong></div></div>
      </div>
    </section>

    <section class="resume-section" id="experience">
      <div class="section-label"><span>02. EXPERIENCE</span><span>(04)</span></div>
      <article class="timeline-item"><div class="timeline-date">Sep 2022 —<br />Aug 2026</div><div><h2>BS Computer Science</h2><p>International Islamic University Islamabad</p><span class="muted">Building a foundation across software engineering, data, and intelligent systems.</span></div><span class="timeline-arrow">↗</span></article>
      <article class="timeline-item"><div class="timeline-date">Ongoing</div><div><h2>AI / ML Engineer</h2><p>Independent projects and applied research</p><span class="muted">Developing AI-powered applications, automation tools, and data workflows.</span></div><span class="timeline-arrow">↗</span></article>
    </section>

    <section class="resume-section projects-section" id="projects">
      <div class="section-label"><span>03. SELECTED PROJECTS</span><span>(04)</span></div>
      <div class="project-list">
        <article class="resume-project"><span class="project-index">01</span><div><h2>JobAI Scout <em>— AI Career Copilot</em></h2><p>AI-driven career automation platform combining CV parsing, semantic job matching, personalized cover-letter generation, and automated application assistance.</p><div class="tags"><span>React</span><span>TypeScript</span><span>Python</span><span>RAG</span></div></div><span class="project-arrow">↗</span></article>
        <article class="resume-project"><span class="project-index">02</span><div><h2>Data Analysis Toolkit <em>— Python</em></h2><p>Reusable CLI and Jupyter Notebook workflow for automated CSV analysis, statistics, visualizations, testing, and packaged Python workflows.</p><div class="tags"><span>Pandas</span><span>NumPy</span><span>Matplotlib</span><span>Pytest</span></div></div><span class="project-arrow">↗</span></article>
        <article class="resume-project"><span class="project-index">03</span><div><h2>Car Rental Management System</h2><p>Full-stack web application automating vehicle rental operations, customer bookings, availability, and administration workflows.</p><div class="tags"><span>HTML</span><span>CSS</span><span>JavaScript</span><span>PHP</span><span>MySQL</span></div></div><span class="project-arrow">↗</span></article>
        <article class="resume-project"><span class="project-index">04</span><div><h2>Student Management System <em>— OOP</em></h2><p>Structured student record management application demonstrating object-oriented programming principles in C++.</p><div class="tags"><span>C++</span><span>OOP</span></div></div><span class="project-arrow">↗</span></article>
      </div>
    </section>

    <section class="skills-section"><div class="section-label"><span>04. TOOLKIT</span><span>(03)</span></div><div class="skills-grid"><div><span>Languages</span><strong>Python, C++, SQL, TypeScript</strong></div><div><span>Libraries</span><strong>NumPy, Pandas, Matplotlib, Seaborn, Scikit-Learn</strong></div><div><span>Tools</span><strong>VS Code, Cursor, PyCharm, Git/GitHub, Anaconda, Vercel</strong></div></div></section>

    <section class="contact-section" id="contact"><p class="eyebrow">05. LET'S CONNECT</p><h2>Have a problem<br />worth <em>solving?</em></h2><a class="email-link" href="mailto:arslanum.tech@gmail.com">arslanum.tech@gmail.com <span>↗</span></a><a class="connection-link" href="https://ahmad-bashir9.github.io/portfolio/#about" target="_blank" rel="noreferrer"><span>Connect with Ahmad Bashir</span><small>AI/ML Engineer · Generative AI · Computer Vision</small><b>↗</b></a><p class="connection-description">Ahmad Bashir is an AI/ML Engineer at Colossyan specializing in generative AI, computer vision, 3D vision, real-time video processing, and AI avatar synchronization. He builds scalable machine learning pipelines and agentic AI workflows using PyTorch and diffusion models.</p></section>
  </main>
  <footer class="footer"><span>© 2026 Arslan Haider</span><div><a href="https://github.com/arslanumtech-stack" target="_blank" rel="noreferrer"><svg class="social-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 7.9c.85 0 1.7.12 2.5.36 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" /></svg>GitHub</a><a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer"><svg class="social-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M5.1 8.2H2.2V21h2.9V8.2ZM3.65 3A1.7 1.7 0 1 0 3.65 6.4 1.7 1.7 0 0 0 3.65 3ZM21.8 13.67c0-3.86-2.06-5.66-4.82-5.66-2.22 0-3.21 1.22-3.76 2.08V8.2h-2.9V21h2.9v-6.34c0-1.67.31-3.29 2.39-3.29 2.04 0 2.06 1.91 2.06 3.4V21h2.9l.03-7.33Z" /></svg>LinkedIn</a></div><span>Scroll with intention ↓</span></footer>
`

const header = document.querySelector('.topbar')
window.addEventListener('scroll', () => {
  header.classList.toggle('is-scrolled', window.scrollY > 32)
}, { passive: true })

const revealItems = document.querySelectorAll('.timeline-item, .resume-project, .skills-grid > div, .contact-section h2, .email-link')
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible')
      observer.unobserve(entry.target)
    }
  })
}, { threshold: 0.14 })
revealItems.forEach((item) => observer.observe(item))
