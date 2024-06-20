import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Description from "./components/Description";
import Detect from "./components/Detect";
import FirstPlant from "./components/Plant";
import SecondPlant from "./components/Plant2";

function App() {

  return (
    <div className="App">
      <Nav />
      <Jumbotron />
      <FirstPlant />
      <Description />
      <SecondPlant />
      <Detect />
    </div>
  );
}

export default App;
