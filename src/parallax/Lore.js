import React from 'react'
import { ParallaxLayer } from "@react-spring/parallax";

export default function ParallaxLore() {
return ( <div
            className="animation_layer parallax px-40 flex justify-center items-center"
            id="Storm"
          >
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
          </div>)

}
