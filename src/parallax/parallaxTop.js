import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function ParallaxTop() {
  return (
    <Parallax pages={7} style={{ top: "0", left: "0" }} class="animation">
      <ParallaxLayer offset={0} speed={0.4} zIndex={4}>
        <div className="animation_layer parallax" id="PurpleBG"></div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={1} zIndex={5}>
        <div className="animation_layer parallax" id="Moon"></div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={1} zIndex={6}>
        <div className="animation_layer parallax" id="Cloud"></div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={0}
        speed={0.6}
        style={{ zIndex: "999" }}
        className="w-screen text-center pointer-events-none"
      >
        <div className="animation_layer parallax flex">
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
                className="text-blue-500 underline cursor-pointer flex justify-center pt-2 pointer-events-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
              </a>
            </div>
            <br />
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.4} zIndex={6}>
        <div className="animation_layer parallax" id="Layer1"></div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.4} zIndex={7}>
        <div className="animation_layer parallax" id="Layer2"></div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.5} zIndex={8}>
        <div className="animation_layer parallax" id="Layer3"></div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.4} zIndex={9}>
        <div className="animation_layer parallax" id="FillerClouds"></div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.5} zIndex={9}>
        <div className="animation_layer parallax" id="Character"></div>
      </ParallaxLayer>
      <div class="spacer"></div>




      <ParallaxLayer offset={1} speed={0.4} zIndex={2}>
        <div className="animation_layer parallax" id="Raiden"></div>
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.4} zIndex={99}>
        <div className="animation_layer parallax" id="DreamSakura" style={{ backgroundColor: 'red' }}></div>
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.5} zIndex={10}>
        <div className="animation_layer parallax" id=""></div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={2}
        speed={0.6}
        zIndex={21}
        style={{ paddingTop: "200px" }}
      >
        <div className="animation_layer parallax" id="">
          <div id="textblock">
            <div id="textblock-container">
              <h1 id="textblock-title">Sample Text?</h1>
              <p id="textblock-content">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. <br />
                <br />
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. <br />
                <br />
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <footer id="textblock-footer">
              <a id="textblock-text"> </a>
            </footer>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.4} zIndex={21}>
        <div className="animation_layer parallax" id=""></div>
      </ParallaxLayer>
    </Parallax>
  );
}
