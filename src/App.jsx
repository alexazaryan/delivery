import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Central from "./components/Central/Central";
import BoxService from "./components/Central/BoxService";
import Diplomas from "./components/Central/Diplomas";
import SliderReviews from "./components/Central/SliderReviews";

// style
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Central />
        <BoxService />
        <Diplomas />
        <SliderReviews />
      </div>
      <Footer />
    </>
  );
}

export default App;
