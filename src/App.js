import "./App.css";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import { sliderData } from "./components/ImageSlider/SliderData";

function App() {
  return <ImageSlider slides={sliderData} />;
}

export default App;
