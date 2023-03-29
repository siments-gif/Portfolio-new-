import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Education from './components/Education'
import My_Projects from './components/My_Projects'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {

  return (
    <div className='bg-navy-blue'>
      <Sidenav />
      <Main />
      <Education />
      <Skills />
      <My_Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
