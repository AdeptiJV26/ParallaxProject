export default function TeamBuilds() {
  const buildData = [
    {
      name: "Hyper Carry",
      hoverColor: "hover:bg-dark-900/50",
      leader: "RaidenProfile.png",
      member: [
        { img: "KujouSaraProfile.png", elementalType: "Electro", name: "Kujou Sara" },
        { img: "BennettProfile.png", elementalType: "Pyro", name: "Bennett" },
        { img: "KazuhaProfile.png", elementalType: "Anemo", name: "Kazuha" },
      ],
    },
    {
      name: "National",
      hoverColor: "hover:bg-dark-900/50",
      leader: "RaidenProfile.png",
      member: [
        { img: "XianglingProfile.png", elementalType: "Pyro", name: "Xiangling" },
        { img: "XingqiuProfile.png", elementalType: "Hydro", name: "Xingqiu" },
        { img: "BennettProfile.png", elementalType: "Pyro", name: "Bennett" },
      ],
    },
    {
      name: "Hyperbloom",
      hoverColor: "hover:bg-dark-900/50",
      leader: "RaidenProfile.png",
      member: [
        { img: "NahidaProfile.png", elementalType: "Dendro", name: "Nahida" },
        { img: "YelanProfile.png", elementalType: "Hydro", name: "Yelan" },
        { img: "BaizhuProfile.png", elementalType: "Dendro", name: "Baizhu" },
      ],
    },
    {
      name: "Overload",
      hoverColor: "hover:bg-dark-900/50",
      leader: "RaidenProfile.png",
      member: [
        { img: "ChevreuseProfile.png", elementalType: "Pyro", name: "Chevreuse" },
        { img: "BennettProfile.png", elementalType: "Pyro", name: "Bennett" },
        { img: "XianglingProfile.png", elementalType: "Pyro", name: "Xiangling" },
      ],
    },
  ];

  const textPanel = {
    Electro: "text-purple-400 border-purple-500 bg-purple-900/80",
    Pyro: "text-red-400 border-red-500 bg-red-900/80",
    Anemo: "text-teal-400 border-teal-500 bg-teal-900/80",
    Hydro: "text-blue-400 border-blue-500 bg-blue-900/80",
    Dendro: "text-green-400 border-green-500 bg-green-900/80",
  };

  const profileContainer = {
    Electro: "group-hover:border-purple-500 group-hover:bg-purple-900/80",
    Pyro: "group-hover:border-red-500 group-hover:bg-red-900/80",
    Anemo: "group-hover:border-teal-500 group-hover:bg-teal-900/80",
    Hydro: "group-hover:border-blue-500 group-hover:bg-blue-900/80",
    Dendro: "group-hover:border-green-500 group-hover:bg-green-900/80",
  };

  const characterRole = {
    "Kujou Sara": "ATK Buffer / Crit DMG",
    "Bennett": "Healer / Massive ATK Buff",
    "Kazuha": "Elemental DMG Buffer / Shred",
    "Xiangling": "Off-field DPS / Pyronado",
    "Xingqiu": "Hydro App / DMG Reduction",
    "Nahida": "Dendro App / EM Buffer",
    "Yelan": "Off-field DPS / DMG Ramp",
    "Baizhu": "Shield / Healer / Bloom Buff",
    "Chevreuse": "Overload Shred / ATK Buffer",
  };

  const getImg = (path) => {
    try {
      return require(`../images/${path}`);
    } catch (err) {
      return require("../images/UnknownProfile.png");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center px-20 text-white w-full h-full">
      <p className="text-5xl font-black shadows-into-light-regular mb-10">
        Raiden Builds
      </p>

      <div className="flex flex-wrap justify-center gap-8 w-full max-w-7xl pointer-events-auto">
        {buildData.map((team) => (
          <div
            key={team.name}
            className={`flex flex-col justify-center items-center hover:scale-105 gap-4 bg-black/40 hover:border-2 backdrop-blur-[2px] border border-purple-500/30 p-4 rounded-lg aspect-square w-[calc(25%-2rem)] min-w-[260px] transition-all duration-300 ${team.hoverColor}`}
          >
            <span className="text-xl font-bold">Team {team.name}</span>
            <div className="border-b-4 pb-2 border-white/50">
              <img
                src={getImg(team.leader)} 
                alt={`${team.name} leader`}
                className=" sm:w-12  sm:h-12 md:w-24 md:h-24 lg:w-36 lg:h-36 rounded-xl border-2 border-purple-500 shadow-lg shadow-purple-500/20"
              />
            </div>

            <div className="flex gap-6">
              {team.member?.map((char, idx) => (
                <div
                  key={idx}
                  className="group relative flex flex-col items-center"
                >
                  {/* Elemental Type Tooltip (top) */}
                  <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-all duration-200 text-xs font-bold bg-black/90 text-white px-2 py-1 rounded border border-purple-500 z-50 pointer-events-none whitespace-nowrap">
                    {char.elementalType}
                  </span>

                  {/* Character Image */}
                  <img
                    src={getImg(char.img)}
                    alt={char.name}
                    className={`w-16 h-16 rounded-md border border-white/20 group-hover:scale-110 transition-all duration-200 ${
                      profileContainer[char.elementalType] || "group-hover:border-purple-400"
                    }`}
                  />

                  {/* Name + Arrow Tooltip Container */}
                  <div className="absolute -bottom-14 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 pointer-events-none">
                    <div className="pointer-events-auto flex flex-col items-center">
                      {/* Name Box */}
                      <div
                        className={`text-xs font-bold px-3 py-1 rounded-t border-l border-r border-t whitespace-nowrap ${
                          textPanel[char.elementalType] || "text-white border-white bg-black/90"
                        }`}
                      >
                        {char.name}
                      </div>

                      {/* Arrow + Role Group */}
                      <div className="group/arrow relative">
                        {/* Arrow (white SVG, compact) */}
                        <div
                          className={`p-1.5 cursor-pointer border-l border-r border-b ${
                            textPanel[char.elementalType]?.split(" ").find((c) => c.startsWith("bg-")) || "bg-black/90"
                          } ${
                            textPanel[char.elementalType]?.split(" ").find((c) => c.startsWith("border-")) || "border-white"
                          }`}
                          style={{
                            clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)",
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2.5"
                            stroke="white"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                            />
                          </svg>
                        </div>

                        {/* Role Tooltip */}
                        <div
                          className="absolute left-1/2 -translate-x-1/2 top-full mt-1.5 scale-0 group-hover/arrow:scale-100 opacity-0 group-hover/arrow:opacity-100 transition-all duration-200 text-xs font-bold bg-black/95 text-white px-3 py-1.5 rounded border whitespace-nowrap z-50 pointer-events-none"
                          style={{
                            borderColor:
                              textPanel[char.elementalType]?.match(/border-([a-z-]+)-500/)?.[1] ||
                              "white",
                          }}
                        >
                          {characterRole[char.name] || "Support"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}