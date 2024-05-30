import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Central from "./components/Central/Central";

// style
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Central />
      <Footer />
    </div>
  );
}

export default App;
