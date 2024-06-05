import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Central from "./components/Central/Central";
import BoxService from "./components/Central/BoxService";

// style
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Central />
        <BoxService />
      </div>
      <Footer />
    </>
  );
}

export default App;
