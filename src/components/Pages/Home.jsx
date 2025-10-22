import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Welcome to My <span className="text-cyan-400">Portfolio</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Creative Developer & Designer crafting beautiful digital experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/portfolio"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Contact me 
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-8 rounded-xl hover:bg-slate-750 transition-colors">
              <div className="text-cyan-400 text-4xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-white mb-3">Design</h3>
              <p className="text-slate-300">
                Creating beautiful and intuitive user interfaces with modern design principles
              </p>
            </div>
            <div className="bg-slate-800 p-8 rounded-xl hover:bg-slate-750 transition-colors">
              <div className="text-cyan-400 text-4xl mb-4">💻</div>
              <h3 className="text-2xl font-bold text-white mb-3">Development</h3>
              <p className="text-slate-300">
                Building responsive and performant web applications with cutting-edge technologies
              </p>
            </div>
            <div className="bg-slate-800 p-8 rounded-xl hover:bg-slate-750 transition-colors">
              <div className="text-cyan-400 text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-3">Optimization</h3>
              <p className="text-slate-300">Ensuring fast load times and smooth user experiences across all devices</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
            Delivering Results That Matter
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-slate-300 text-lg">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-cyan-400 mb-2">30+</div>
              <div className="text-slate-300 text-lg">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-cyan-400 mb-2">5+</div>
              <div className="text-slate-300 text-lg">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-cyan-400 mb-2">100%</div>
              <div className="text-slate-300 text-lg">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">Technologies I Work With</h2>
          <p className="text-slate-300 text-center mb-12 max-w-2xl mx-auto">
            Leveraging modern tools and frameworks to build scalable, maintainable applications
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "React",
              "JavaScript",
              "Bootstrap",
              "Vue.js",
              "Tailwind CSS",
              "Github",
              "PhP",
              "Laravel",
              "Postgres SQL",
              "My SQL",
              "Git",
              "Domain/Hosting",
            ].map((tech) => (
              <div key={tech} className="bg-slate-800 hover:bg-slate-700 p-6 rounded-lg text-center transition-colors">
                <div className="text-white font-semibold">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Want to know detail about me?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Let's collaborate and bring your ideas to life with clean code and beautiful design
          </p>
          <Link
            to="/contact"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-10 py-4 rounded-lg transition-colors text-lg"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  )
}
