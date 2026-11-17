
import './App.css'
import { useState } from 'react'
import './App.css'

const projects = [
  {
    title: 'Visual Stories',
    creator: 'Ahmed Hassan',
    category: 'Graphic Design',
    style: 'artwork-one',
  },
  {
    title: 'Life Through My Lens',
    creator: 'Amina Ali',
    category: 'Photography',
    style: 'artwork-two',
  },
  {
    title: 'My First Application',
    creator: 'Mohamed Yusuf',
    category: 'Technology',
    style: 'artwork-three',
  },
  {
    title: 'Future in Colour',
    creator: 'Fatima Omar',
    category: 'Art',
    style: 'artwork-four',
  },
  {
    title: 'A Different Perspective',
    creator: 'Abdi Noor',
    category: 'Photography',
    style: 'artwork-five',
  },
  {
    title: 'Building Something New',
    creator: 'Hassan Ahmed',
    category: 'Ideas',
    style: 'artwork-six',
  },
]

function App() {

  const [activeCategory, setActiveCategory] = useState('Everything')
  const filteredProjects =
  activeCategory === 'Everything'
    ? projects
    : projects.filter(
        (project) => project.category === activeCategory
      )
  return (
    <div className="app">

      <nav className="navbar">
        <a className="logo" href="/">hibo<span>.</span></a>

        <div className="nav-links">
          <a href="/">Explore</a>
          <a href="/">About</a>
        </div>

        <div className="nav-actions">
          <button className="login-button">Log in</button>
          <button className="join-button">Join Hibo</button>
        </div>
      </nav>

      <main>

        <section className="hero">
          <p className="eyebrow">A HOME FOR YOUR IDEAS</p>

          <h1>
            You have something.
            <br />
            <span>Let the world see it.</span>
          </h1>

          <p className="hero-description">
            Share what you create, discover what others are making
            and find people who believe in your ideas.
          </p>

          <button className="hero-button">
            Put yourself on Hibo →
          </button>
        </section>

        <section className="discover">

          <div className="section-heading">
            <div>
              <p className="eyebrow">THE COMMUNITY</p>
              <h2>Discover something interesting.</h2>
            </div>

            <a href="/" className="view-all">Explore all projects →</a>
          </div>

          <div className="categories">
  {['Everything', 'Graphic Design', 'Photography', 'Technology', 'Art', 'Ideas'].map((category) => (
    <button
      key={category}
      className={`category ${activeCategory === category ? 'active' : ''}`}
      onClick={() => setActiveCategory(category)}
    >
      {category}
    </button>
  ))}
</div>

          <div className="project-grid">
          {filteredProjects.map((project) => (
              <article className="project-card" key={project.title}>

                <div className={`project-art ${project.style}`}>
                  <span>{project.category}</span>
                </div>

                <div className="project-info">
                  <div>
                    <h3>{project.title}</h3>
                    <p>by {project.creator}</p>
                  </div>

                  <button className="appreciate" aria-label="Appreciate project">
                    ♡
                  </button>
                </div>

              </article>
            ))}
          </div>

        </section>

      </main>

      <footer>
        <a className="logo" href="/">hibo<span>.</span></a>
        <p>A place for ideas, creativity and people.</p>
        <p>© 2026 Hibo</p>
      </footer>

    </div>
  )
}

export default App
