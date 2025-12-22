import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";
import TopBar from "../templates/navigationBar";
import TeamBuilds from "./ParallaxContainer";

export default function ParallaxTop() {
  const parallaxRef = useRef(null);
  return (
    <>
      <TopBar parallaxRef={parallaxRef} />
      <Parallax
        ref={parallaxRef}
        pages={5}
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
          <div className="animation_layer parallax" id="Moon"></div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={1}
          zIndex={210}
          style={{ pointerEvents: "none" }}
        >
          <div className="animation_layer parallax" id="Cloud"></div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.6}
          style={{ zIndex: "220", pointerEvents: "none" }}
          className="w-screen text-center"
        >  <div className="animation_layer parallax flex">
      <div className="TopParallaxPanel pt-10">
        <p
          className="shadows-into-light-regular text-5xl lg:text-7xl xl:text-9xl font-extrabold pt-10"
          id="TitleTextShadow"
        >
          MADARA
          <br />
          GAMING
        </p>
        <div>
          <p>Support me on Patreon here</p>
          <a
            href="https://www.youtube.com/watch?v=xvFZjo5PgG0&list=RDxvFZjo5PgG0&start_radio=1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline cursor-pointer flex justify-center pt-2 pointer-events-auto "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-10 p-1 transition-colors hover:bg-zinc-500/50 transition-all duration-100 rounded-3xl m-0 p-1 pointer-events-auto"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </a>
        </div>
        <br />
      </div>
    </div></ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.4}
          zIndex={230}
          style={{ pointerEvents: "none" }}
        >
          <div className="animation_layer parallax" id="Layer1"></div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.4}
          zIndex={240}
          style={{ pointerEvents: "none" }}
        >
          <div className="animation_layer parallax" id="Layer2"></div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.5}
          zIndex={250}
          style={{ pointerEvents: "none" }}
        >
          <div className="animation_layer parallax" id="Layer3"></div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.5}
          zIndex={250}
          style={{ pointerEvents: "none" }}
        >
          <div className="animation_layer parallax" id="Twigs"></div>
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
          speed={0.3}
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
          offset={2}
          speed={0.6}
          zIndex={300}
          style={{ pointerEvents: "none" }}
        >
          <div className="animation_layer parallax px-40" id="">
            <div id="textblock w-100 h-100">
              <div id="textblock-container flex justify-center items-center text-center">
                <h1
                  className="text-center text-purple-500 mb-4"
                  id="textblock-title"
                >
                  The Electro Archons Might
                </h1>
                <p
                  className="indent-10 text-violet leading-relaxed font-serif"
                  id="textblock-content"
                >
                  The Raiden Shogun is the supporter of "Eternity," the
                  undisputed ruler of Inazuma who seeks to rid the world of
                  fleeting desires and disturbances. As the vessel of Beelzebul,
                  she manifests as both the robotic Shogun and the meditating Ei
                  within the Plane of Euthymia. Following the loss of her twin
                  sister, Makoto, during the cataclysm five hundred years ago,
                  Ei relinquished her physical form to reside in a meditative
                  sub-space, creating a puppet to govern the nation in her
                  stead.
                </p>
                <br />
                <p
                  className="indent-10 text-violet leading-relaxed font-serif"
                  id="textblock-content"
                >
                  Since the dawn of the Shogunate, she has pursued a realm where
                  nothing is lost and all remains unchanging. This singular
                  focus led to the implementation of the Vision Hunt Decree and
                  the Sakoku Decree, isolating Inazuma from the rest of Teyvat
                  to prevent the erosion of her people's dreams and the
                  stability of the land.
                </p>
                <br />

                <p
                  className="indent-10 text-violet leading-relaxed font-serif"
                  id="textblock-content"
                >
                  With the Musou no Hitotachi, she punishes those who threaten
                  the heavenly principles, severing the threads of fate to
                  preserve the stillness of Inazuma for all eternity. Only
                  through the clash of ideals and the reawakening of her
                  people's ambitions has she begun to reconsider the true nature
                  of eternity—not as a stagnant freeze in time, but as a promise
                  kept through the ages.
                </p>
                <br />
              </div>
              <footer id="textblock-footer">
                <a id="textblock-text"> </a>
              </footer>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
