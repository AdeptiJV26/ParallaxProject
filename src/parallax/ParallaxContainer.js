export default function TeamBuilds() {
  const buildData = [
    {
      name: "Hyper Carry",
      hoverColor:
        "hover:bg-blue-900/50 hover:border-blue-500 hover:border-2",
      leader: "RaidenProfile.png",
      members: [
        "KujouSaraProfile.png",
        "BennettProfile.png",
        "KazuhaProfile.png",
      ],
    },
    {
      name: "National",
      hoverColor:
        "hover:bg-red-900/50 hover:border-red-500 hover:border-2",
      leader: "RaidenProfile.png",
      members: [
        "Xianglingprofile.png",
        "XingqiuProfile.png",
        "BennettProfile.png",
      ],
    },
    {
      name: "Hyperbloom",
      hoverColor:
        "hover:bg-green-900/50 hover:border-green-500 hover:border-2",
      leader: "RaidenProfile.png",
      members: ["NahidaProfile.png", "YelanProfile.png", "BaizhuProfile.png"],
    },
    {
      name: "Overload",
      hoverColor:
        "hover:bg-purple-900/50 hover:border-purple-500 hover:border-2",
      leader: "RaidenProfile.png",
      members: [
        "ChevreuseProfile.png",
        "BennettProfile.png",
        "XianglingProfile.png",
      ],
    },
  ];

  const getImg = (path) => {
    try {
      // Fixed: changed single quotes to backticks for ${path}
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
            className={`flex flex-col justify-center items-center hover:scale-110 gap-4 bg-black/40 backdrop-blur-[2px] border border-purple-500/30 p-6 rounded-lg aspect-square w-[calc(33.33%-2rem)] min-w-[300px] transition-all duration-300 ${team.hoverColor}`}
          >
            <span className="text-xl font-bold">Team {team.name}</span>
            <div className="border-b-4 pb-2 border-white-500">
              <img
                src={getImg(team.leader)}
                alt={`${team.name} leader`}
                className="w-40 h-40 rounded-xl border-2 border-purple-500 shadow-lg shadow-purple-500/20"
              />
            </div>

            <div className="flex gap-2">
              {team.members.map((imgName, idx) => (
                <img
                  key={idx}
                  src={getImg(imgName)}
                  alt="member"
                  className="w-20 h-20 rounded-md border border-white/20 hover:border-purple-400 transition-all"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
