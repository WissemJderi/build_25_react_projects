import "./App.css";
import StarRating from "./components/star-rating";
// import Accordian from "./components/accordian/index";
// import RandomColor from "./components/random-color";

function App() {
  return (
    <>
      {/* <Accordian />  */}
      {/* <RandomColor /> */}
      <StarRating nOfStars={10} />
    </>
  );
}

export default App;
