import "./App.css";
import ParallaxScene from "./parallax/firstParallax";
import TextBlock from "./textblock";



export default function App() {
  return (
    <div className="appBG">
      <ParallaxScene />
      <TextBlock />
    </div>
  );
}
