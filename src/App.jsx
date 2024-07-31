import { useState, useCallback } from "react";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Description from "./components/Description";
import Detect from "./components/Detect";
import About from "./components/About";
import Footer from "./components/Footer";
import FirstPlant from "./components/Plant";
import SecondPlant from "./components/Plant2";
import ThirdPlant from "./components/Plant3";
import WebgiViewer from "./components/WebgiViewer";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  const handleViewerReady = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <div className="App">
      {loading && <Loader />}
      <Nav />
      <Jumbotron />
      <FirstPlant />
      <Description />
      <SecondPlant />
      <Detect />
      <ThirdPlant />
      <About />
      <Footer />
      <WebgiViewer onViewerReady={handleViewerReady} />
    </div>
  );
}

export default App;
