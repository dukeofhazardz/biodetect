import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Description from "./components/Description";
import Detect from "./components/Detect";
import About from "./components/About";
import Footer from "./components/Footer";
import FirstPlant from "./components/Plant";
import SecondPlant from "./components/Plant2";
import ThirdPlant from "./components/Plant3";

function App() {

  return (
    <div className="App">
      <Nav />
      <Jumbotron />
      <FirstPlant />
      <Description />
      <SecondPlant />
      <Detect />
      <ThirdPlant />
      <About />
      <Footer />
    </div>
  );
}

export default App;
