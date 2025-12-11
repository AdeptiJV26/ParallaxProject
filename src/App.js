import "./App.css";
import ParallaxTop from "./parallax/parallaxTop";
import TextBlock from "./textblock";
import TopBar from "./templates/navigationBar";

export default function App() {
  return (
    <div className="appBG">
      <div className="App">
        <TopBar className zIndex={1} />
        <ParallaxTop className zIndex={2} />
        <TextBlock className zIndex={3} />
      </div>
    </div>
  );
}
