import { useState } from 'react'
import avatarImg from './assets/avatar.png'
import './App.css'

function App() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitted(true)
    setSubmitError(null)

    const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === "YOUR_WEB3FORMS_ACCESS_KEY_HERE") {
      setSubmitError("Access key is missing. Please add VITE_WEB3FORMS_ACCESS_KEY to your .env file.")
      setSubmitted(false)
      return
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        })
      })

      const result = await response.json()
      if (result.success) {
        setSubmitSuccess(true)
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitError(result.message || "Something went wrong. Please try again.")
      }
    } catch (err) {
      setSubmitError("Network error. Please check your connection and try again.")
    } finally {
      setSubmitted(false)
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // CV and CGPA Unlock System
  const [showUnlockModal, setShowUnlockModal] = useState(false)
  const [unlockData, setUnlockData] = useState({ name: '', email: '' })
  const [unlocked, setUnlocked] = useState(false)
  const [unlocking, setUnlocking] = useState(false)
  const [unlockError, setUnlockError] = useState(null)

  const triggerCvDownload = () => {
    const link = document.createElement('a')
    link.href = `${import.meta.env.BASE_URL}cv.pdf`
    link.download = 'Cv_Meftahul_Jannati_Anonna.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleCvDownloadClick = (e) => {
    e.preventDefault()
    if (unlocked) {
      triggerCvDownload()
    } else {
      setShowUnlockModal(true)
    }
  }

  const handleRevealCgpaClick = () => {
    if (!unlocked) {
      setShowUnlockModal(true)
    }
  }

  const handleUnlockChange = (e) => {
    setUnlockData({ ...unlockData, [e.target.name]: e.target.value })
  }

  const handleUnlockSubmit = async (e) => {
    e.preventDefault()
    setUnlocking(true)
    setUnlockError(null)

    const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === "YOUR_WEB3FORMS_ACCESS_KEY_HERE") {
      // Local fallback for demo
      setTimeout(() => {
        setUnlocking(false)
        setUnlocked(true)
        setShowUnlockModal(false)
        triggerCvDownload()
      }, 1000)
      return
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `🔑 CV & CGPA Unlocked by ${unlockData.name}`,
          name: unlockData.name,
          email: unlockData.email,
          message: `${unlockData.name} (${unlockData.email}) has unlocked your CV download and CGPA grades on your portfolio.`,
        })
      })

      const result = await response.json()
      if (result.success) {
        setUnlocked(true)
        setShowUnlockModal(false)
        triggerCvDownload()
      } else {
        setUnlockError(result.message || "Something went wrong. Please try again.")
      }
    } catch (err) {
      setUnlockError("Network error. Please check your connection and try again.")
    } finally {
      setUnlocking(false)
    }
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
            <button onClick={handleCvDownloadClick} className="btn-secondary">Download CV 📄</button>
            <a href="https://github.com/Meftahul-Anu13" target="_blank" rel="noopener noreferrer" className="btn-accent" style={{ gap: '6px' }}>
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: 'middle' }}>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              GitHub
            </a>
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
              <span className="edu-score">
                CGPA: {unlocked ? "3.71 / 4.00" : (
                  <button onClick={handleRevealCgpaClick} className="edu-unlock-btn" title="Unlock CV & Grades">
                    🔒 Reveal CGPA
                  </button>
                )}
              </span>
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
            <a href="https://github.com/Meftahul-Anu13" target="_blank" rel="noopener noreferrer" className="contact-social-btn" title="GitHub">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a href="https://linkedin.com/in/meftahuljannati" target="_blank" rel="noopener noreferrer" className="contact-social-btn" title="LinkedIn">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="https://www.facebook.com/meftahuljannatianonna" target="_blank" rel="noopener noreferrer" className="contact-social-btn" title="Facebook">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="https://leetcode.com/u/anu0_0yass/" target="_blank" rel="noopener noreferrer" className="contact-social-btn" title="LeetCode">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.414L3.89 9.043a1.375 1.375 0 0 0-.414.966c0 .363.144.71.402.968l8.632 8.618a1.378 1.378 0 0 0 1.933 0l8.632-8.618a1.378 1.378 0 0 0 0-1.936L14.444.414A1.372 1.372 0 0 0 13.483 0zm-.056 2.8l7.232 7.221-7.232 7.221-7.232-7.221 7.232-7.221zm1.228 3.518a.687.687 0 1 0 0 1.375.687.687 0 0 0 0-1.375zm-3.076 2.057a.688.688 0 0 0-.488 1.176l2.062 2.058a.688.688 0 0 0 .973-.974l-2.062-2.058a.684.684 0 0 0-.485-.202zm-.688 3.43a.688.688 0 0 0-.485 1.173l2.062 2.058a.688.688 0 1 0 .973-.973l-2.062-2.058a.685 6.685 0 0 0-.488-.2z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="contact-section">
          <h2>Send Me a Letter! 💌</h2>
          {submitSuccess ? (
            <div className="contact-success">
              <h3>Yay! Letter Sent! 🎉</h3>
              <p>Thank you so much for writing to me! I'll read your letter and reply as soon as possible. 🧸💖</p>
              <button onClick={() => setSubmitSuccess(false)} className="btn-primary" style={{ marginTop: '15px' }}>
                Send Another Letter 📬
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              {submitError && (
                <div className="contact-error">
                  ❌ {submitError}
                </div>
              )}
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
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Meftahul Jannati Anonna</p>
      </footer>

      {/* Unlock Grades & CV Modal */}
      {showUnlockModal && (
        <div className="unlock-modal-overlay">
          <div className="unlock-modal">
            <button onClick={() => setShowUnlockModal(false)} className="unlock-modal-close">×</button>
            <h3>Unlock Resume & Grades 🔐✨</h3>
            <p>Please enter your Name and Email to download the full CV and view my CGPA.</p>
            
            {unlockError && (
              <div className="contact-error" style={{ fontSize: '14px', padding: '10px', marginBottom: '15px' }}>
                ❌ {unlockError}
              </div>
            )}
            
            <form onSubmit={handleUnlockSubmit} className="unlock-modal-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={unlockData.name}
                  onChange={handleUnlockChange}
                  placeholder="Your Name"
                  required
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={unlockData.email}
                  onChange={handleUnlockChange}
                  placeholder="Your Email"
                  required
                  className="form-control"
                />
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={unlocking}>
                {unlocking ? 'Unlocking... 🔑' : 'Unlock & Download CV 🚀'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
