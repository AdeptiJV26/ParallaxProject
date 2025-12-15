import "./App.css";
import ParallaxTop from "./parallax/parallaxTop";
// import TextBlock from "./textblock";
import TopBar from "./templates/navigationBar";
import "./template.css"

export default function App() {
  return (
    <div className="appBG">
      <div className="App">
        <TopBar />
        <ParallaxTop />
       {/* <TextBlock /> */}
      </div>
    </div>
  );  
}
