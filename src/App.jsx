import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Projects from './components/Projects';
import SystemArchitecture from './components/SystemArchitecture';
import Experience from './components/Experience';
import GithubAnalytics from './components/GithubAnalytics';
import RosKnowledge from './components/RosKnowledge';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-cyber-bg min-h-screen text-white selection:bg-cyber-blue/30 selection:text-cyber-blue overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Skills />
        <Projects />
        <SystemArchitecture />
        <Experience />
        <GithubAnalytics />
        <RosKnowledge />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
