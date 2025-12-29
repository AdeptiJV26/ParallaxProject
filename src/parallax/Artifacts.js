import React from "react";

const Artifacts = [
  {
    id: 1,
    name: "Flower",
    color: "purple",
    img: "EOSF_Flower.png",
    lore: "A finely crafted tsuba once worn by a loyal retainer. It bears silent witness to unwavering devotion and the acceptance of fate in service to eternity.",
  },
  {
    id: 2,
    name: "Plume",
    color: "purple",
    img: "EOSF_Plume.png",
    lore: "A feather carried by the wind of battle, symbolizing a warrior who fought on despite knowing their destiny was already sealed.",
  },
  {
    id: 3,
    name: "Sands",
    color: "purple",
    img: "EOSF_Sands.png",
    lore: "A timepiece that marks moments lost to history, reflecting the fleeting nature of human ambition against the endless flow of time.",
  },
  {
    id: 4,
    name: "Goblet",
    color: "purple",
    img: "EOSF_Goblet.png",
    lore: "A vessel once filled during solemn rites, representing sacrifices made for ideals that outlived those who upheld them.",
  },
  {
    id: 5,
    name: "Circlet",
    color: "purple",
    img: "EOSF_Circlet.png",
    lore: "An ornate kabuto worn by one who stood at the crossroads of loyalty and loss, embodying resolve in the face of inevitable change.",
  },
];

export default function ArtifactLores() {
  const getImageUrl = (imgName) => {
    try {
      return (
        require(`../images/${imgName}`).default ||
        require(`../images/${imgName}`)
      );
    } catch (err) {
      console.error("Image not found:", imgName);
      return "";
    }
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-[1000px] mx-auto px-6 py-5 flex flex-col justify-center items-center h-screen">
        <span className="text-5xl text-purple-500 shadows-into-light-regular mb-10">
          Emblem of Severed Fate
        </span>

        <div className="flex flex-row gap-6">
          {Artifacts.map((item) => (
            <div
              key={item.id}
              className="group flex-1 h-72 bg-zinc-800/80 rounded-lg hover:pr-32 hover:border-4 border-purple-600/30 hover:scale-110 transition-all duration-300 shadow-2xl flex flex-col items-center justify-center p-4 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <img
                src={getImageUrl(item.img)}
                alt={item.name}
                className="w-32 h-32 object-contain relative z-10 transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]"
              />

              <span
                className={`font-bold mt-4 uppercase text-xs tracking-widest relative z-10 transition-colors 
    ${item.color === "purple" ? "text-purple-600" : "text-white"} 
    group-hover:text-purple-400`}
              >
                {item.name}
              </span>
              <div className="absolute top-0 right-0 h-full w-28 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center pr-3">
                <p className="text-[10px] text-purple-200 leading-snug text-justify">
                  {item.lore}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
