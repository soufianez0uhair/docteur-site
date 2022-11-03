import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Services from "./components/Services";
import Header from "./components/Header";

const App = () => {
  return (
    <main className="App">
      <Header />
      <Intro />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}

export default App;