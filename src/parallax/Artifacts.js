import React from "react";

const Artifacts = [
  { id: 1, name: "Flower", img: "EOSF_Flower.png" },
  { id: 2, name: "Plume", img: "EOSF_Plume.png" },
  { id: 3, name: "Sands", img: "EOSF_Sands.png" },
  { id: 4, name: "Goblet", img: "EOSF_Goblet.png" },
  { id: 5, name: "Circlet", img: "EOSF_Circlet.png" },
];

export default function ArtifactLores() {
  const getImageUrl = (imgName) => {
    try {
      return require(`../images/${imgName}`).default || require(`../images/${imgName}`);
    } catch (err) {
      console.error("Image not found:", imgName);
      return "";
    }
  };

  return (
    <div className="min-h-screen"> 
      <div className="max-w-[1400px] mx-auto px-6 py-5 flex flex-col justify-center items-center h-screen">
        <span className="text-5xl text-purple-500 shadows-into-light-regular mb-10">
          Emblem of Severed Fate
        </span>

        <div className="flex flex-row gap-6">
          {Artifacts.map((item) => (
            <div
              key={item.id}
              className="group w-72 h-96 bg-zinc-800/80 rounded-lg hover:border-4 border-purple-600/30 hover:scale-110 transition-all shadow-2xl flex flex-col items-center justify-center p-4 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <img
                src={getImageUrl(item.img)}
                alt={item.name}
                className="w-32 h-32 object-contain relative z-10 transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]"
              />

              <span className="text-white font-bold mt-4 uppercase text-xs tracking-widest relative z-10 group-hover:text-purple-300 transition-colors">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}