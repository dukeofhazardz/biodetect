import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Description from "./components/Description";
import Detect from "./components/Detect";
import Plant from "./components/Plant";

function App() {

  return (
    <div className="App">
      <Nav />
      <Jumbotron />
      <Plant />
      <Description />
      <Detect />
    </div>
  );
}

export default App;
