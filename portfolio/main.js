import './style.css'

const app = document.querySelector('#app')

// Router
function getRoutes() {
  const routes = { '/': renderPortfolio }
  projects.forEach(project => {
    routes[`/${project.slug}`] = () => renderProject(project.slug)
  })
  return routes
}

// Project data
const projects = [
  {
    id: 1,
    slug: 'compliance-hub',
    title: 'Compliance Hub',
    description: 'Turning a niche legal feature into an everyday experience — making compliance visible, proactive, and valuable.',
    company: 'Deel',
    date: '2024',
    thumbnail: 'public/shield-logo.jpg',
    sections: [
      {
        title: 'Overview',
        description: `Deel's Shield protects clients from misclassification risks when hiring contractors worldwide. While it had 95% satisfaction among users, adoption was only 15% across eligible clients — and most didn't even know it existed.

Our goal: make compliance visible, proactive, and valuable — turning a niche legal feature into an everyday experience.`,
        image: 'public/Compliance-hub-classification.jpg'
      },
      {
        title: 'The Problem',
        description: `Interviews revealed that:

• 70% of non-Shield clients were unaware of the product.
• 60% didn't understand misclassification risks.
• Many felt reactive when it came to compliance — "we only hear about it when it's too late."

"How can I be protected?" — Client, during a discovery interview

We saw a chance to make Deel a proactive partner in compliance, not just a reactive one.`,
        image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1200'
      },
      {
        title: 'Goals & Metrics',
        description: `We defined clear KPIs with the PM team:

<strong>Shield awareness:</strong> 30% → 60% (achieved 65%)
<strong>Hub engagement:</strong> target 40% of clients (achieved 48%)
<strong>Workforce assessments:</strong> target 25% of clients (achieved 32%)
<strong>Shield conversions:</strong> target +10–15% (achieved +12%)
<strong>Compliance support tickets:</strong> target -20% (achieved -25%)`,
        image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200'
      },
      {
        title: 'Design Approach',
        description: `<strong>1. Centralized experience</strong>
A new Compliance Hub gave clients one place to stay ahead of legal updates — from wage changes to maternity leave policies — personalized by countries where they had active workers.

<strong>2. Actionable insights</strong>
We integrated a Worker Classification Tool built with Deel Lab, letting clients instantly check risk levels and see whether they should use Shield, convert, or keep as is.

<strong>3. Seamless delivery</strong>
Built entirely with Deel's Design System components, reducing design and QA time by ~40%, and saving ~6 weeks of engineering through Deel Lab API integration.`,
        image: 'https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=1200'
      },
      {
        title: 'Process Highlights',
        description: `• 15 user interviews across Shield and non-Shield clients
• 3 usability testing rounds → improved success rate 68% → 92%
• Close collaboration with PMs and engineering for data-driven prioritization
• Weekly async design reviews with Compliance and Customer Success teams`,
        image: 'https://images.pexels.com/photos/3183154/pexels-photo-3183154.jpeg?auto=compress&cs=tinysrgb&w=1200'
      },
      {
        title: 'Results',
        description: `After launch (pilot with 10% of client base):

• +12% Shield conversions
• +35% increase in compliance engagement overall
• -25% drop in compliance-related support tickets
• Clients rated the Hub 4.7/5 usefulness in post-launch survey

The project turned compliance into a growth and trust lever, helping clients feel guided rather than burdened by regulation.`,
        image: 'https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=1200'
      },
      {
        title: 'Reflection',
        description: `This project reshaped how Deel frames compliance — from "avoid risk" to "stay ahead." It showed that embedding compliance into daily workflows builds both confidence and conversion.

Leveraging internal tools (like Deel Lab) instead of reinventing them accelerated delivery while ensuring quality and consistency.

"We stopped treating compliance as fine print — and made it part of the product story."`,
        image: 'https://images.pexels.com/photos/3183155/pexels-photo-3183155.jpeg?auto=compress&cs=tinysrgb&w=1200'
      },
      {
        title: 'Key Takeaways',
        description: `• Data-driven design led to measurable business impact.
• Integrating internal tools saved ~6 weeks of build time.
• Design System reuse maintained quality and scalability.
• Product storytelling turned a niche feature into a value driver.`,
        image: 'https://images.pexels.com/photos/3183156/pexels-photo-3183156.jpeg?auto=compress&cs=tinysrgb&w=1200'
      }
    ]
  },
  {
    id: 2,
    slug: 'project-two',
    title: 'Project Two',
    description: 'Brief description of the second project demonstrating cross-functional collaboration.',
    company: 'Another Company',
    thumbnail: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800',
    sections: [
      {
        title: 'Research',
        description: 'User research and insights that guided the design.',
        image: 'https://images.pexels.com/photos/3183154/pexels-photo-3183154.jpeg?auto=compress&cs=tinysrgb&w=1200'
      },
      {
        title: 'Design Process',
        description: 'Iterative design approach and key decisions.',
        image: 'https://images.pexels.com/photos/3183155/pexels-photo-3183155.jpeg?auto=compress&cs=tinysrgb&w=1200'
      },
      {
        title: 'Impact',
        description: 'Measurable outcomes and user feedback.',
        image: 'https://images.pexels.com/photos/3183156/pexels-photo-3183156.jpeg?auto=compress&cs=tinysrgb&w=1200'
      }
    ]
  },
  {
    id: 3,
    slug: 'project-three',
    title: 'Project Three',
    description: 'Brief description of the third project highlighting strategic design decisions.',
    company: 'Global Corp',
    thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    sections: [
      {
        title: 'Discovery',
        description: 'Understanding the business and user needs.',
        image: 'https://images.pexels.com/photos/3184466/pexels-photo-3184466.jpeg?auto=compress&cs=tinysrgb&w=1200'
      },
      {
        title: 'Iteration',
        description: 'Testing and refining the design with users.',
        image: 'https://images.pexels.com/photos/3184467/pexels-photo-3184467.jpeg?auto=compress&cs=tinysrgb&w=1200'
      },
      {
        title: 'Launch',
        description: 'Successful rollout and adoption metrics.',
        image: 'https://images.pexels.com/photos/3184468/pexels-photo-3184468.jpeg?auto=compress&cs=tinysrgb&w=1200'
      }
    ]
  }
]

function renderPortfolio() {
  app.innerHTML = `
    <div class="portfolio">
      <header class="portfolio-header">
        <h1>
          <span class="title-small">Hudson Souza's</span>
          <span class="title-large">Portfolio</span>
        </h1>
        <div class="intro-box">
          <p class="intro">
            I'm a product designer who's been building digital products for a little over eleven years.
          </p>
          <p class="intro">
            I've worked on everything from small internal tools to help daily activities of a team to large-scale platforms used around the world for millions of people
          </p>
          <p class="intro">
            What keeps me excited is finding that sweet spot between what users need and what makes the business work—then designing something that genuinely helps both.
          </p>
          <div class="company-logos">
            <p class="companies-label">Some of the companies I've helped over the years</p>
            <div class="logos-container">
              <a href="https://www.linkedin.com/company/movile/" target="_blank" rel="noopener noreferrer">
                <img src="https://logo.clearbit.com/movile.com" alt="Movile" class="company-logo" />
              </a>
              <a href="https://www.linkedin.com/company/ifood/" target="_blank" rel="noopener noreferrer">
                <img src="https://logo.clearbit.com/ifood.com.br" alt="iFood" class="company-logo" />
              </a>
              <a href="https://www.linkedin.com/company/bancopan/" target="_blank" rel="noopener noreferrer">
                <img src="https://logo.clearbit.com/bancopan.com.br" alt="Banco PAN" class="company-logo" />
              </a>
              <a href="https://www.linkedin.com/company/deel/" target="_blank" rel="noopener noreferrer">
                <img src="https://logo.clearbit.com/deel.com" alt="Deel" class="company-logo" />
              </a>
              <a href="https://www.linkedin.com/company/askvinny/" target="_blank" rel="noopener noreferrer">
                <img src="https://media.licdn.com/dms/image/v2/D4E0BAQHr2GkzBlUJeQ/company-logo_200_200/company-logo_200_200/0/1725827404309/askvinny_logo?e=1762992000&v=beta&t=Tg9TzMZOzzmcwapDsmpb5MUR7CfyRHSPAjWkowe_13Q" alt="AskVinny" class="company-logo" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <div class="projects-grid">
        ${projects.map(project => renderProjectCard(project)).join('')}
      </div>
    </div>
  `

  attachRouteLinks()
}

function renderProject(slug) {
  const project = projects.find(p => p.slug === slug)
  if (!project) {
    renderPortfolio()
    return
  }

  const otherProjects = projects.filter(p => p.slug !== slug)

  app.innerHTML = `
    <div class="project-detail">
      <a href="#/" class="back-link" data-route="/">← Back to Portfolio</a>

      <header class="project-header">
        <div class="project-intro-box">
          <p class="project-label">Title: <span class="project-value">${project.title}</span></p>
          <p class="project-label">Company: <span class="project-value">${project.company}</span></p>
          <p class="project-label">Year: <span class="project-value">${project.date}</span></p>
          <p class="project-intro">${project.description}</p>
        </div>
      </header>

      <div class="project-sections">
        ${project.sections.map((section, index) => `
          <section class="project-section">
            ${index === 0 ? `
              <div class="section-image">
                <img src="${section.image}" alt="${section.title}" />
              </div>
            ` : ''}
            <h2>${section.title}</h2>
            <div class="section-content">${section.description.replace(/\n/g, '<br>')}</div>
            ${index < project.sections.length - 1 ? '<div class="section-divider"></div>' : ''}
          </section>
        `).join('')}
      </div>

      <div class="other-projects">
        <h2>Other Projects</h2>
        <div class="other-projects-grid">
          ${otherProjects.slice(0, 2).map(p => renderProjectCard(p, 'other-project-card')).join('')}
        </div>
      </div>
    </div>
  `

  attachRouteLinks()
}

function renderProjectCard(project, cardClass = 'project-card') {
  return `
    <a href="#/${project.slug}" class="${cardClass}" data-route="/${project.slug}">
      <div class="project-thumbnail">
        <img src="${project.thumbnail}" alt="${project.title}" />
      </div>
      <div class="project-info">
        <h3>${project.title}</h3>
        <p class="project-company">${project.company}</p>
        <p class="project-description">${project.description}</p>
        <span class="view-more-link">View more →</span>
      </div>
    </a>
  `
}

function attachRouteLinks() {
  document.querySelectorAll('[data-route]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const route = e.currentTarget.getAttribute('data-route')
      window.location.hash = route
    })
  })
}

function router() {
  const path = window.location.hash.slice(1) || '/'
  const routes = getRoutes()
  const route = routes[path] || renderPortfolio
  route()
  window.scrollTo(0, 0)
}

window.addEventListener('hashchange', router)
window.addEventListener('load', router)
