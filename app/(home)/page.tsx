import AboutPage from "@/components/About"
import Blog from "@/components/Blog"
import Contact from "@/components/Contact"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"

const HomePage = () => {
  return (
    <main>
      <Hero/>
      <AboutPage/>
      <Projects/>
      <Skills/>
      <Blog/>
      <Contact/>
    </main>
  )
}

export default HomePage