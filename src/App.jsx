import { useState } from 'react'
import avatarImg from './assets/avatar.png'
import './App.css'

function App() {
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

  return (
    <div className="app-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo-text"><b>Pookie.dev 🧸✨</b></div>
        <div className="nav-links">
          <a href="#about" className="nav-item">About</a>
          <a href="#projects" className="nav-item">Projects</a>
          <a href="#contact" className="nav-item">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="hero-section">
        <div className="hero-left">
          <div className="badge-row">
            <span className="pookie-badge badge-pink">✨ Hello Friend</span>
            <span className="pookie-badge badge-mint">🎨 UI Designer</span>
            <span className="pookie-badge badge-lavender">💻 Frontend Dev</span>
          </div>
          <h1 className="hero-title">
            Crafting classy & <span>cartoonish</span> web designs!
          </h1>
          <p className="hero-desc">
            Hi, I'm a creative developer who loves blending professional structure with wobbly, cute, and playful aesthetics. I design in Canva and code in React!
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">Let's Chat 🧸</a>
            <a href="#projects" className="btn-secondary">View Work 👇</a>
          </div>
        </div>
        <div className="hero-right">
          <div className="avatar-wrapper">
            <img src={avatarImg} className="avatar-image" alt="Cute Creative Cartoon Avatar" />
            <div className="avatar-decor-1">⭐</div>
            <div className="avatar-decor-2">🎨</div>
          </div>
        </div>
      </section>

      {/* Skills Moving Ticker */}
      <div className="skills-ticker-container">
        <div className="skills-ticker">
          <span className="ticker-item">🎨 Canva Design</span>
          <span className="ticker-item">⭐ React.js</span>
          <span className="ticker-item">🧸 Classy Aesthetics</span>
          <span className="ticker-item">🪄 Custom CSS</span>
          <span className="ticker-item">🧁 WebP / SVG Icons</span>
          <span className="ticker-item">👾 Interaction</span>
          <span className="ticker-item">⚡ Vite Speed</span>
          
          {/* Duplicated for seamless loop */}
          <span className="ticker-item">🎨 Canva Design</span>
          <span className="ticker-item">⭐ React.js</span>
          <span className="ticker-item">🧸 Classy Aesthetics</span>
          <span className="ticker-item">🪄 Custom CSS</span>
          <span className="ticker-item">🧁 WebP / SVG Icons</span>
          <span className="ticker-item">👾 Interaction</span>
          <span className="ticker-item">⚡ Vite Speed</span>
        </div>
      </div>

      {/* Projects Section */}
      <section id="projects">
        <div className="section-title-wrap">
          <h2 className="section-title">My Creative Projects</h2>
          <p className="section-subtitle">A sneak peek of things I've built and designed</p>
        </div>

        <div className="projects-grid">
          {/* Card 1 */}
          <div className="project-card">
            <div className="project-img-container" style={{ backgroundColor: 'var(--accent-pink)' }}>
              🌸
            </div>
            <div className="project-info">
              <div className="project-tags">
                <span className="project-tag">Canva UI</span>
                <span className="project-tag">CSS</span>
              </div>
              <h3 className="project-title">Canva Mockup to Code</h3>
              <p className="project-desc">
                Exported custom vector frames, stickers, and layout dimensions from Canva, then rebuilt them as interactive React components.
              </p>
              <a href="#about" className="project-link">Learn More ➔</a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="project-card">
            <div className="project-img-container" style={{ backgroundColor: 'var(--accent-mint)' }}>
              🐸
            </div>
            <div className="project-info">
              <div className="project-tags">
                <span className="project-tag">React</span>
                <span className="project-tag">Animation</span>
              </div>
              <h3 className="project-title">Pookie Arcade</h3>
              <p className="project-desc">
                A super-cute mini web application with playful spring-physics hover animations and colorful sticker badges.
              </p>
              <a href="#about" className="project-link">Learn More ➔</a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="project-card">
            <div className="project-img-container" style={{ backgroundColor: 'var(--accent-lavender)' }}>
              🦄
            </div>
            <div className="project-info">
              <div className="project-tags">
                <span className="project-tag">Vite</span>
                <span className="project-tag">SVG Design</span>
              </div>
              <h3 className="project-title">Classy Illustration Hub</h3>
              <p className="project-desc">
                A repository of customizable vector widgets, icons, and background textures inspired by hand-drawn cartoons.
              </p>
              <a href="#about" className="project-link">Learn More ➔</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Send Me a Letter! 💌</h2>
        <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>
          Have a cool idea or just want to say hi? Write your note below!
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Pookie coder"
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
              placeholder="pookie@example.com"
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
              placeholder="Write your cute message here..."
              required
              className="form-control"
            ></textarea>
          </div>

          <button type="submit" className="btn-primary">
            {submitted ? 'Sending... ✨' : 'Send Message 🚀'}
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Made with 💖, React, and Canva | © {new Date().getFullYear()} Pookie Portfolio</p>
      </footer>
    </div>
  )
}

export default App
