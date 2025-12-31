export default function TopBar({ parallaxRef }) {
  const scrollToPage = (page) => {
    if (!parallaxRef.current) return;
    parallaxRef.current.scrollTo(page);
  };
  return (
    <div className="w-full shadow-lg TopBarNav">
      <nav className="fixed top-0 max-w-full mx-auto mb-2 sm:px-5 md:px-10 lg:px-15 w-full">
        <div className="flex items-center justify-between h-16 group">
          <div className="font-bold text-white tracking-wider pl-2">
            Electro Archon
          </div>

          <ul className="flex space-x-2 pr-4 gap-2">
            <button className="neon-button px-3 py-2 rounded-3xl text-sm md:text-base lg:text-lg transition duration-50 min-h-[2rem] min-w-[5rem]" onClick={() => scrollToPage(0)}>Home</button>
            <button className="neon-button px-3 py-2 rounded-3xl text-sm md:text-base lg:text-lg transition duration-50 min-h-[2rem] min-w-[5rem]" onClick={() => scrollToPage(1)}>Teams</button>
            <button className="neon-button px-3 py-2 rounded-3xl text-sm md:text-base lg:text-lg transition duration-50 min-h-[2rem] min-w-[5rem]" onClick={() => scrollToPage(2.1)}>Lore</button>
            <button className="neon-button px-3 py-2 rounded-3xl text-sm md:text-base lg:text-lg transition duration-50 min-h-[2rem] min-w-[5rem]" onClick={() => scrollToPage(3.1)}>Artifacts</button>
          </ul>
        </div>
      </nav>
    </div>
  );
}
