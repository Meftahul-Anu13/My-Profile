import { useState } from 'react'
import avatarImg from './assets/avatar.png'
import './App.css'

function App() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Resume Projects
  const projects = [
    {
      title: 'CERENA Healthcare Assistant',
      emoji: '🏥',
      category: 'AI / Full Stack',
      tags: ['Spring Boot', 'Next.js', 'MongoDB', 'MediaPipe', 'OpenCV'],
      desc: 'An All-in-One Healthcare Assistant developed for Therap JavaFest 2024 to provide interactive health insights and tracking.',
      github: 'https://github.com/Meftahul-Anu13/javafest24',
      bgColor: 'var(--accent-pink)'
    },
    {
      title: 'Silent Voice Sign Language',
      emoji: '🤟',
      category: 'AI / Full Stack',
      tags: ['Next.js', 'FastAPI', 'MediaPipe', 'TensorFlow', 'Tailwind'],
      desc: 'A sign language translator web application that uses deep learning and computer vision to interpret sign gesture sequences into text.',
      github: 'https://github.com/Khandakar227/silent-voice',
      bgColor: 'var(--accent-mint)'
    },
    {
      title: 'CalcNotesGenAi Math Tool',
      emoji: '🧮',
      category: 'AI / Full Stack',
      tags: ['Next.js', 'TypeScript', 'Gemini-API', 'Tailwind'],
      desc: 'An AI-powered math and equation calculative notebook that interprets hand-drawn equations using Google Gemini Vision API.',
      github: 'https://github.com/Meftahul-Anu13/CalcNotesGenAi',
      bgColor: 'var(--accent-yellow)'
    },
    {
      title: 'LYRICA Music Streaming',
      emoji: '🎵',
      category: 'Web Apps',
      tags: ['Django', 'PostgreSQL', 'JavaScript', 'HTML', 'CSS'],
      desc: 'A fully functional music streaming web application with custom player controllers, playlist creation, and user authentication.',
      github: 'https://github.com/Meftahul-Anu13/LyRicA',
      bgColor: 'var(--accent-lavender)'
    },
    {
      title: 'Shondhan Property Finder',
      emoji: '🏠',
      category: 'Mobile',
      tags: ['Flutter', 'Firebase', 'Android Studio'],
      desc: 'A property and house renting listing mobile application featuring location mapping, listings, and real-time chat sync.',
      github: 'https://github.com/sakibahmedshanto/shondhan',
      bgColor: 'var(--accent-pink)'
    },
    {
      title: 'Plantorum Monitoring',
      emoji: '🌱',
      category: 'Desktop & Games',
      tags: ['Java', 'MongoDB', 'IntelliJ IDEA'],
      desc: 'A desktop application to log, manage, and visual-monitor plants growth cycles, soil moisture metrics, and watering alerts.',
      github: 'https://github.com/Meftahul-Anu13/Plantorum_App_JavaProject',
      bgColor: 'var(--accent-mint)'
    },
    {
      title: 'BattleShip 2D Game',
      emoji: '🚢',
      category: 'Desktop & Games',
      tags: ['Java', 'JavaFX', 'SceneBuilder'],
      desc: 'A classic 2D battleship simulation game with interactive coordinate grid mapping and computer AI logic opponents.',
      github: 'https://github.com/Meftahul-Anu13/BattleShipGame',
      bgColor: 'var(--accent-yellow)'
    },
    {
      title: 'Youtube Telegram Bot',
      emoji: '🤖',
      category: 'Bots & Tools',
      tags: ['Python', 'Railway', 'Telegram API'],
      desc: 'A light telegram chatbot script hosted on Railway to process video URLs and stream downloadable media links directly.',
      github: 'https://github.com/Meftahul-Anu13/ytube_telegram_bot',
      bgColor: 'var(--accent-lavender)'
    }
  ]

  const categories = ['All', 'AI / Full Stack', 'Web Apps', 'Mobile', 'Desktop & Games', 'Bots & Tools']

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <div className="app-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo-text"><b>Anu.dev 🧸✨</b></div>
        <div className="nav-links">
          <a href="#about" className="nav-item">About</a>
          <a href="#experience" className="nav-item">Experience</a>
          <a href="#projects" className="nav-item">Projects</a>
          <a href="#skills" className="nav-item">Skills</a>
          <a href="#achievements" className="nav-item">Achievements</a>
          <a href="#contact" className="nav-item">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="hero-section">
        <div className="hero-left">
          <div className="badge-row">
            <span className="pookie-badge badge-pink">🎓 CSE Undergrad at IUT</span>
            <span className="pookie-badge badge-mint">🧬 Research Enthusiast</span>
            <span className="pookie-badge badge-lavender">🏆 Summit Winner</span>
          </div>
          <h1 className="hero-title">
            Hey, I'm <span>Meftahul Jannati Anonna</span>!
          </h1>
          <p className="hero-desc">
            I am a competitive programmer, research collaborator, and full-stack developer who loves designing classy, cartoonish, and functional digital products. I specialize in building intelligent applications using Spring Boot, Next.js, and Machine Learning.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">Write Me 💌</a>
            <a href="https://github.com/Meftahul-Anu13" target="_blank" rel="noopener noreferrer" className="btn-secondary">My GitHub 🐙</a>
            <a href="#projects" className="btn-accent">Browse Projects 📁</a>
          </div>
        </div>
        <div className="hero-right">
          <div className="avatar-wrapper">
            <img src={avatarImg} className="avatar-image" alt="Meftahul Jannati Anonna Avatar" />
            <div className="avatar-decor-1">⭐</div>
            <div className="avatar-decor-2">💻</div>
          </div>
        </div>
      </section>

      {/* Skills Moving Ticker */}
      <div className="skills-ticker-container">
        <div className="skills-ticker">
          <span className="ticker-item">☕ Java / Spring Boot</span>
          <span className="ticker-item">🐍 Python / Flask</span>
          <span className="ticker-item">⚡ Next.js / React</span>
          <span className="ticker-item">💾 PostgreSQL / MongoDB</span>
          <span className="ticker-item">🧠 TensorFlow / OpenCV</span>
          <span className="ticker-item">📱 Flutter / Firebase</span>
          <span className="ticker-item">🎨 Canva & Figma</span>
          
          {/* Duplicated for seamless loop */}
          <span className="ticker-item">☕ Java / Spring Boot</span>
          <span className="ticker-item">🐍 Python / Flask</span>
          <span className="ticker-item">⚡ Next.js / React</span>
          <span className="ticker-item">💾 PostgreSQL / MongoDB</span>
          <span className="ticker-item">🧠 TensorFlow / OpenCV</span>
          <span className="ticker-item">📱 Flutter / Firebase</span>
          <span className="ticker-item">🎨 Canva & Figma</span>
        </div>
      </div>

      {/* Experience Section */}
      <section id="experience">
        <div className="section-title-wrap">
          <h2 className="section-title">My Journey</h2>
          <p className="section-subtitle">Professional work and research collaborations</p>
        </div>

        <div className="experience-container">
          {/* Experience 1 */}
          <div className="experience-card">
            <div className="exp-left">
              <div className="exp-role">Research Collaborator</div>
              <div className="exp-company">
                🔬 Elite Research Lab (<span>elitelab.ai</span>)
              </div>
              <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>
                Collaborating on state-of-the-art AI research publications, conducting machine learning model tests, and investigating advanced algorithmic solutions.
              </p>
            </div>
            <div className="exp-right">
              <span className="exp-date">2025 – Present</span>
              <span className="exp-loc">📍 Remote</span>
            </div>
          </div>

          {/* Experience 2 */}
          <div className="experience-card">
            <div className="exp-left">
              <div className="exp-role">AI Full Stack Intern</div>
              <div className="exp-company">
                🤖 Kaizenext AI Technology (<span>Kaizenext</span>)
              </div>
              <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>
                Assisted in designing AI pipelines, structured frontend layout bindings in React/Next.js, and implemented backend API handlers.
              </p>
            </div>
            <div className="exp-right">
              <span className="exp-date">Oct 2025 – Dec 2025</span>
              <span className="exp-loc">📍 Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="section-title-wrap">
          <h2 className="section-title">Creative Showcase</h2>
          <p className="section-subtitle">Filter through projects designed & programmed by me</p>
        </div>

        {/* Filter Buttons */}
        <div className="projects-filter-row">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-img-container" style={{ backgroundColor: project.bgColor }}>
                {project.emoji}
              </div>
              <div className="project-info">
                <div className="project-tags">
                  <span className="project-tag">{project.category}</span>
                  {project.tags.slice(0, 2).map((t, idx) => (
                    <span className="project-tag" key={idx} style={{ fontWeight: '400' }}>{t}</span>
                  ))}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Code 🐙
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="section-title-wrap">
          <h2 className="section-title">My Toolbox</h2>
          <p className="section-subtitle">Technical skills and languages that I speak</p>
        </div>

        <div className="skills-grid">
          {/* Card 1 */}
          <div className="skills-category-card">
            <h3 className="skills-category-title">💻 Programming Languages</h3>
            <div className="skills-list">
              <span className="skill-pill">Java</span>
              <span className="skill-pill">Python</span>
              <span className="skill-pill">C++</span>
              <span className="skill-pill">JavaScript</span>
              <span className="skill-pill">TypeScript</span>
              <span className="skill-pill">HTML & CSS</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="skills-category-card">
            <h3 className="skills-category-title">⚙️ Frameworks & Libraries</h3>
            <div className="skills-list">
              <span className="skill-pill">Spring Boot</span>
              <span className="skill-pill">Django</span>
              <span className="skill-pill">Flask</span>
              <span className="skill-pill">Next.js</span>
              <span className="skill-pill">React</span>
              <span className="skill-pill">FastAPI</span>
              <span className="skill-pill">Flutter</span>
              <span className="skill-pill">Tailwind CSS</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="skills-category-card">
            <h3 className="skills-category-title">🧠 Machine Learning & Data</h3>
            <div className="skills-list">
              <span className="skill-pill">TensorFlow</span>
              <span className="skill-pill">OpenCV</span>
              <span className="skill-pill">MediaPipe</span>
              <span className="skill-pill">NumPy</span>
              <span className="skill-pill">Pandas</span>
              <span className="skill-pill">Matplotlib</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="skills-category-card">
            <h3 className="skills-category-title">🛠️ Databases & Design</h3>
            <div className="skills-list">
              <span className="skill-pill">PostgreSQL</span>
              <span className="skill-pill">MongoDB</span>
              <span className="skill-pill">MySQL</span>
              <span className="skill-pill">Firebase</span>
              <span className="skill-pill">Figma</span>
              <span className="skill-pill">Canva</span>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements">
        <div className="section-title-wrap">
          <h2 className="section-title">Achievements</h2>
          <p className="section-subtitle">Honors and competitive milestones</p>
        </div>

        <div className="achievements-grid">
          {/* Card 1 */}
          <div className="achievement-card">
            <div className="achievement-icon">🏆</div>
            <h3 className="achievement-title">Responsible AI Summit 2026</h3>
            <div className="achievement-sub">Champion</div>
            <p className="achievement-desc">
              Won the first place award for building and presenting a highly ethical, responsible AI healthcare/social integration tool.
            </p>
          </div>

          {/* Card 2 */}
          <div className="achievement-card">
            <div className="achievement-icon">🏅</div>
            <h3 className="achievement-title">HackCSB</h3>
            <div className="achievement-sub">Winner (Global Top 7)</div>
            <p className="achievement-desc">
              Recognized among the global top 7 teams for designing and implementing advanced tech answers to complex challenges.
            </p>
          </div>

          {/* Card 3 */}
          <div className="achievement-card">
            <div className="achievement-icon">🥈</div>
            <h3 className="achievement-title">CUET CSE Datathon 2025</h3>
            <div className="achievement-sub">2nd Runner Up</div>
            <p className="achievement-desc">
              Excelled in real-time complex data modeling, analytics, and rapid forecasting pipeline constructs under tight deadlines.
            </p>
          </div>

          {/* Card 4 */}
          <div className="achievement-card">
            <div className="achievement-icon">👩‍💻</div>
            <h3 className="achievement-title">Girls' Programming Contest</h3>
            <div className="achievement-sub">National Rank: 39th</div>
            <p className="achievement-desc">
              Solved algorithmic and mathematical problems in a competitive, timed setting among the country's top female programmers.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education">
        <div className="section-title-wrap">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">Academic foundations in Computer Science</p>
        </div>

        <div className="education-grid">
          {/* IUT */}
          <div className="education-card">
            <h3 className="edu-title">B.Sc. in Computer Science & Engineering</h3>
            <span className="edu-school">Islamic University of Technology (IUT)</span>
            <div className="edu-meta">
              <span>📅 2022 – Present</span>
              <span className="edu-score">CGPA: 3.71 / 4.00</span>
            </div>
          </div>

          {/* HSC */}
          <div className="education-card">
            <h3 className="edu-title">Higher Secondary Certificate (HSC)</h3>
            <span className="edu-school">Saidpur Govt. Science College, Nilphamari</span>
            <div className="edu-meta">
              <span>📅 2019 – 2021</span>
              <span className="edu-score">GPA: 5.00 / 5.00</span>
            </div>
          </div>

          {/* SSC */}
          <div className="education-card">
            <h3 className="edu-title">Secondary School Certificate (SSC)</h3>
            <span className="edu-school">Domar Govt. Girls’ High School</span>
            <div className="edu-meta">
              <span>📅 2017 – 2019</span>
              <span className="edu-score">GPA: 5.00 / 5.00</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-container">
        <div className="contact-info-panel">
          <h2>Get in Touch! 🎀</h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
            I am always open to discussing new machine learning research collaborations, full-stack software development projects, or competitive programming topics. Feel free to contact me!
          </p>

          <div className="contact-detail-item">
            <div className="contact-detail-icon">✉️</div>
            <div className="contact-detail-text">
              <h4>Email Me</h4>
              <p>meftahul.jannati.anonna@gmail.com</p>
            </div>
          </div>

          <div className="contact-detail-item">
            <div className="contact-detail-icon">📞</div>
            <div className="contact-detail-text">
              <h4>Call Me</h4>
              <p>(+880) 1789260803</p>
            </div>
          </div>

          <div className="contact-detail-item">
            <div className="contact-detail-icon">📍</div>
            <div className="contact-detail-text">
              <h4>Current Location</h4>
              <p>Mirpur-1, Dhaka, Bangladesh</p>
            </div>
          </div>

          <div className="contact-social-row">
            <a href="https://github.com/Meftahul-Anu13" target="_blank" rel="noopener noreferrer" className="contact-social-btn" title="GitHub">🐙</a>
            <a href="https://linkedin.com/in/meftahuljannati" target="_blank" rel="noopener noreferrer" className="contact-social-btn" title="LinkedIn">💼</a>
          </div>
        </div>

        <div className="contact-section">
          <h2>Send Me a Letter! 💌</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email@example.com"
                required
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                required
                className="form-control"
              ></textarea>
            </div>

            <button type="submit" className="btn-primary">
              {submitted ? 'Sending... ✨' : 'Send Message 🚀'}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Made with 💖, React, and Canva | © {new Date().getFullYear()} Meftahul Jannati Anonna</p>
      </footer>
    </div>
  )
}

export default App
