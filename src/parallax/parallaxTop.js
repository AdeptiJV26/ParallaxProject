import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function ParallaxTop() {
  return (

      <Parallax pages={7} style={{ top: "0", left: "0" }} class="animation">
        <ParallaxLayer offset={0} speed={0.4} zIndex={3}>
          <div className="animation_layer parallax"></div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.6}
          zIndex={2}
          className="w-screen text-center"
        >
          <div className="animation_layer parallax flex">
            <div className="TopParallaxPanel pt-10">
              <p className="shadows-into-light-regular text-xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-9xl font-extrabold pt-10" id="TitleTextShadow">
                Inazuma
                 <br />
                Town
              </p>
              <br />
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={2} zIndex={5}>
          <div className="animation_layer parallax" id="Moon"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.8} zIndex={5}>
          <div className="animation_layer parallax" id="Cloud"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.4} zIndex={6}>
          <div className="animation_layer parallax" id="City1"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.6} zIndex={7}>
          <div className="animation_layer parallax" id="City2"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.4} zIndex={8}>
          <div className="animation_layer parallax" id="City3"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.5} zIndex={9}>
          <div className="animation_layer parallax" id="FillerClouds"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.5} zIndex={9}>
          <div className="animation_layer parallax" id="Character"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.4} zIndex={9}>
          <div className="animation_layer parallax" id="Cliff"></div>
        </ParallaxLayer>

      </Parallax>

  );
}
