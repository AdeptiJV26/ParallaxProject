import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function ParallaxTop() {
  return (
    <div className="App">
      <Parallax pages={7} style={{ top: "0", left: "0" }} class="animation">
        <ParallaxLayer offset={0} speed={0.5} zIndex={1}>
          <div class="animation_layer parallax" id="PurpleBG"><p className="flex w-screen justify-center item-center text-center">Inazuma</p></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={2} zIndex={2}>
          <div class="animation_layer parallax" id="Moon"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.8} zIndex={3}>
          <div class="animation_layer parallax" id="Cloud"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.4} zIndex={4}>
          <div class="animation_layer parallax" id="City1"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.6} zIndex={7}>
          <div class="animation_layer parallax" id="City2"></div>
        </ParallaxLayer>
        
        <ParallaxLayer offset={0} speed={0.4} zIndex={8}>
          <div class="animation_layer parallax" id="City3"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.5} zIndex={9}>
          <div class="animation_layer parallax" id="FillerClouds"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.5} zIndex={10}>
          <div class="animation_layer parallax" id="Character"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.4} zIndex={10}>
          <div class="animation_layer parallax" id="Cliff"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.4}></ParallaxLayer>
      </Parallax>
    </div>
  );
}
