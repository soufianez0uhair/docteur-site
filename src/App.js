import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Services from "./components/Services";

const App = () => {
  return (
    <main className="App">
      <Intro />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}

export default App;