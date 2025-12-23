import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";

const Artifacts = [
  { id: 1, name: "Flower", img: "EOSF_Flower.png" },
  { id: 1, name: "Plume", img: "EOSF_Plume.png" },
  { id: 1, name: "Sands", img: "EOSF_Sands.png" },
  { id: 1, name: "Goblet", img: "EOSF_Goblet.png" },
  { id: 1, name: "Circlet", img: "EOSF_Circlet.png" },
];



export default function ArtifactLores() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-zinc-900/40 py-5">
      <span className="text-5xl text-purple-500 shadows-into-light-regular mb-10">
        Emblem of Severed Fate
      </span>

      <div className="flex flex-row gap-6">
        {Artifacts.map((item, index) => (
          <div
            key={index}
            className="w-48 h-64 bg-zinc-800/80 rounded-lg border-2 border-purple-500/30 hover:scale-110 transition-all shadow-2xl flex flex-col items-center justify-center p-4 relative overflow-hidden"
          >
            <img
              src={`./images/${item.img}`}
              alt={item.name}
              className="w-32 h-32 object-contain"
            />

            <span className="text-white font-bold mt-4 uppercase text-xs tracking-widest">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
