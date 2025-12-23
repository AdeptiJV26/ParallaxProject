export default function TeamBuilds() {
  const buildData = [
    {
      name: "Hyper Carry",
      hoverColor: "hover:bg-blue-900/50 hover:border-blue-600",
      leader: "RaidenProfile.png",
      member: [
        { img: "KujouSaraProfile.png", dpsType: "Electro", name: "Kujou Sara" },
        { img: "BennettProfile.png", dpsType: "Pyro", name: "Bennett" },
        { img: "KazuhaProfile.png", dpsType: "Anemo", name: "Kazuha" },
      ],
    },
    {
      name: "National",
      hoverColor: "hover:bg-red-900/50 hover:border-red-600",
      leader: "RaidenProfile.png",
      member: [
        { img: "XianglingProfile.png", dpsType: "Pyro", name: "Xiangling" },
        { img: "XingqiuProfile.png", dpsType: "Hydro", name: "Xingqui" },
        { img: "BennettProfile.png", dpsType: "Pyro", name: "Bennet" },
      ],
    },
    {
      name: "Hyperbloom",
      hoverColor: "hover:bg-green-900/50 hover:border-green-600",
      leader: "RaidenProfile.png",
      member: [
        { img: "NahidaProfile.png", dpsType: "Dendro", name: "Nahida" },
        { img: "YelanProfile.png", dpsType: "Hydro", name: "Yelan" },
        { img: "BaizhuProfile.png", dpsType: "Dendro", name: "Baizhu" },
      ],
    },
    {
      name: "Overload",
      hoverColor: "hover:bg-purple-900/50 hover:border-purple-600",
      leader: "RaidenProfile.png",
      member: [
        { img: "ChevreuseProfile.png", dpsType: "Pyro", name: "Chevreuse" },
        { img: "BennettProfile.png", dpsType: "Pyro", name: "Bennet" },
        { img: "XianglingProfile.png", dpsType: "Pyro", name: "Xiangling" },
      ],
    },
  ];

  const typeColors = {
    Electro: "text-purple-400 border-purple-500 bg-purple-900/80",
    Pyro: "text-red-400 border-red-500 bg-red-900/80",
    Anemo: "text-teal-400 border-teal-500 bg-teal-900/80",
    Hydro: "text-blue-400 border-blue-500 bg-blue-900/80",
    Dendro: "text-green-400 border-green-500 bg-green-900/80",
  };

  const getImg = (path) => {
    try {
      return require(`../images/${path}`);
    } catch (err) {
      return require("../images/UnknownProfile.png");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center text-white w-full h-full">
      <p className="text-5xl font-black shadows-into-light-regular mb-10">
        Raiden Builds
      </p>

      <div className="flex flex-wrap justify-center gap-8 w-full max-w-7xl pointer-events-auto">
        {buildData.map((team) => (
          <div
            key={team.name}
            className={`flex flex-col justify-center items-center hover:scale-110 gap-4 bg-black/40 hover:border-2 backdrop-blur-[2px] border border-purple-500/30 p-6 rounded-lg aspect-square w-[calc(33.33%-2rem)] min-w-[300px] transition-all duration-300 ${team.hoverColor}`}
          >
            <span className="text-xl font-bold">Team {team.name}</span>
            <div className="border-b-4 pb-2 border-white-500">
              <img
                src={getImg(team.leader)}
                alt={`${team.name} leader`}
                className="w-40 h-40 rounded-xl border-2 border-purple-500 shadow-lg shadow-purple-500/20"
              />
            </div>
            <div className="flex gap-4">
              {team.member?.map((char, idx) => (
                <div
                  key={idx}
                  className="group relative flex flex-col items-center"
                >
                  <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-all duration-200 text-xs font-bold bg-black/90 text-white px-2 py-1 rounded border border-purple-500 z-50 pointer-events-none whitespace-nowrap">
                    {char.dpsType}
                  </span>

                  <img
                    src={getImg(char.img)}
                    alt="member"
                    className="w-16 h-16 rounded-md border border-white/20 group-hover:border-purple-400 group-hover:scale-110 transition-all duration-200"
                  />

                  <span
                    className={`absolute -bottom-10 scale-0 group-hover:scale-100 transition-all duration-200 text-xs font-bold px-2 py-1 rounded border z-50 pointer-events-none whitespace-nowrap ${
                      typeColors[char.dpsType] ||
                      "text-white border-white bg-black/90"
                    }`}
                  >
                    {char.name}
                  </span>


                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
