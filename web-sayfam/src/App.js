
import './App.css';
import Header from './components/Header';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ThemeSwitch from './components/ThemeSwitch';

function App() {
  return (
    <div className="App">
      <ThemeSwitch/>
      <Header/>
      <Skills/>
      <Profile/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
