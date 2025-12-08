import "./App.css";
import ParallaxTop from "./parallax/parallaxTop";
import TextBlock from "./textblock";
import TopBar from "./templates/navigationBar";





export default function App() {
  return (
    <div className="appBG">
      <TopBar />
      <ParallaxTop />
      <TextBlock />
    </div>
  );
}
