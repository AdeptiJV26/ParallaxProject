import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import TextBlock from "../textblock";

export default function ParallaxScene() {
  return (
    <div className="appBG">
      <div className="App">
        <Parallax pages={6} style={{ top: "0", left: "0" }} class="animation">
          <ParallaxLayer offset={0} speed={0.3}>
            <div class="animation_layer parallax" id="BG"></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.3}>
            <div class="animation_layer parallax" id="Clouds"></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.5}>
            <div class="animation_layer parallax" id="Moon"></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.2}>
            <div class="animation_layer parallax" id="Character"></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.2}>
            <div class="animation_layer parallax" id="Cliff"></div>
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.4}>
            <TextBlock />
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  );
}
