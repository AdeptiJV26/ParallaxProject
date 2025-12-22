<ParallaxLayer
  offset={1}
  speed={0.3}
  zIndex={140}
  style={{ pointerEvents: "auto" }}
>
  <div className="flex flex-col justify-center items-center text-white w-full h-full px-10">
    <p className="text-5xl font-black shadows-into-light-regular mb-10">
      Raiden Builds
    </p>

    {/* Main profile picture container - larger, centered below the text */}
    <div className="mb-10 flex justify-center items-center">
      <img
        src="path/to/main-profile-picture.jpg" // Replace with your image path
        alt="Main Profile"
        className="w-32 h-32 rounded-full object-cover border-2 border-purple-500/30" // Adjust size/color as needed
      />
    </div>

    <div className="grid grid-cols-3 xl:grid-cols-3 gap-4 w-full max-w-4xl justify-center items-center pointer-events-auto">
      {" "}
      {["Hyper Carry", "National", "Hyperbloom"].map((item) => (
        <div
          key={item}
          className="bg-black/40 backdrop-blur-[2px] border border-purple-500/30 hover:border-purple-500 hover:border-2 hover:bg p4 rounded-lg aspect-square transition-colors flex items-start justify-center" // Reduced padding to p4
        >
          <span className="text-lg pt-2 font-bold">Team {item}</span>

          <img
            src="path/to/small-profile.jpg"
            alt={item}
            className="w-16 h-16 rounded-full mt-2"
          />
        </div>
      ))}
    </div>
  </div>
</ParallaxLayer>;
