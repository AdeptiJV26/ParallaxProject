export default function TopBar({ parallaxRef }) {
  const scrollToPage = (page) => {
    if (!parallaxRef.current) return;
    parallaxRef.current.scrollTo(page);
  };
  return (
    <div className="w-full shadow-lg TopBarNav">
      <nav className="fixed top-0 max-w-full mx-auto mb-2 sm:px-10 md:px-15 lg:px-20 w-full md:text-lg lg:text-2xl">
        <div className="flex items-center justify-between h-16 group">
          <div className="font-bold text-white tracking-wider">
            Electro Archon
          </div>

          <ul className="flex space-x-8 gap-8">
            <button className="neon-button px-3 py-2 rounded-3xl text-md lg:text-lg transition duration-50 min-h-[2rem] min-w-[5rem]" onClick={() => scrollToPage(0)}>Home</button>
            <button className="neon-button px-3 py-2 rounded-3xl text-md lg:text-lg transition duration-50 min-h-[2rem] min-w-[5rem]" onClick={() => scrollToPage(1)}>Teams</button>
            <button className="neon-button px-3 py-2 rounded-3xl text-md lg:text-lg transition duration-50 min-h-[2rem] min-w-[5rem]" onClick={() => scrollToPage(2)}>Lore</button>
            <button className="neon-button px-3 py-2 rounded-3xl text-md lg:text-lg transition duration-50 min-h-[2rem] min-w-[5rem]" onClick={() => scrollToPage(3)}>Contact</button>
          </ul>
        </div>
      </nav>
    </div>
  );
}
