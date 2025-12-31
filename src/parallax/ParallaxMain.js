import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";
import TopBar from "../templates/navigationBar";
import TeamBuilds from "./BuildPanel";
import ParallaxTitle from "./Home";
import ParallaxLore from "./Lore";
import ArtifactLores from "./Artifacts";

export default function ParallaxTop() {
  const parallaxRef = useRef(null);
  return (
    <>
      <TopBar parallaxRef={parallaxRef} />
      <Parallax
        ref={parallaxRef}
        pages={7}
        style={{ top: "0", left: "0" }}
        class="animation"
      >
        <ParallaxLayer
          offset={0}
          speed={0.4}
          zIndex={200}
          style={{ pointerEvents: "none" }}
        >
          <div className="animation_layer parallax" id="PurpleBG"></div>
        </ParallaxLayer>


        <ParallaxLayer
          offset={0}
          speed={1}
          zIndex={210}
          style={{ pointerEvents: "none" }}
        >
          <div className="animation_layer parallax" id="ElectroCloud"></div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.6}
          style={{ zIndex: "220", pointerEvents: "none" }}
          className="w-screen text-center"
        >
          <ParallaxTitle />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.7}
          zIndex={230}
          style={{ pointerEvents: "none" }}
        >
          <div className="animation_layer parallax" id="Layer1"></div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.6}
          zIndex={240}
          style={{ pointerEvents: "none" }}
        >
          <div className="animation_layer parallax" id="Layer2"></div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.6}
          zIndex={250}
          style={{ pointerEvents: "none" }}
        >
          <div className="animation_layer parallax" id="Layer3"></div>
        </ParallaxLayer>

      

        <ParallaxLayer
          offset={0}
          speed={0.4}
          zIndex={300}
          style={{ pointerEvents: "none" }}
        >
          <div className="animation_layer parallax" id="FillerClouds"></div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.5}
          zIndex={400}
          style={{ pointerEvents: "none" }}
        >
          <div className="animation_layer parallax" id="Character"></div>
        </ParallaxLayer>
        <div className="space"></div>

        <ParallaxLayer
          offset={1}
          speed={0.6}
          zIndex={110}
          style={{ pointerEvents: "none" }}
        >
          <div
            className="animation_layer parallax brightness-[0.3]"
            id="DreamSakura"
          ></div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.9}
          zIndex={130}
          style={{ pointerEvents: "none" }}
        >
          <div
            className="animation_layer parallax brightness-[0.3]"
            id="Raiden"
          ></div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.6}
          zIndex={140}
          style={{ pointerEvents: "auto" }}
        >
          <TeamBuilds />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.2}
          speed={0.6}
          zIndex={300}
          style={{ pointerEvents: "none" }}
        >
          <ParallaxLore />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3.2}
          speed={0.6}
          zIndex={140}
          style={{ pointerEvents: "auto" }}
        >
          <ArtifactLores />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
