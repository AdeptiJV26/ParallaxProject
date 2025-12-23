import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";

export default function ParallaxTitle() {
  return (
    <>
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
          </div>
    </>
  );
}
