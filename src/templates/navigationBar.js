export default function TopBar({ parallaxRef }) {
  const scrollToPage = (page) => {
    if (!parallaxRef.current) return;
    parallaxRef.current.scrollTo(page);
  };
  return (
    <div className="w-full shadow-lg TopBarNav">
      <nav className="fixed top-0 max-w-full mx-auto sm:px-10 lg:px-20 w-full">
        <div className="flex items-center justify-between h-16 group">
          <div className="font-bold text-white tracking-wider">
            Electro Archon
          </div>

          <ul className="flex space-x-8 gap-8">
            <button className="neon-button px-3 py-2 rounded-2xl text-md transition duration-50" onClick={() => scrollToPage(0)}>Home</button>
            <button className="neon-button px-3 py-2 rounded-2xl text-md transition duration-50" onClick={() => scrollToPage(1)}>Teams</button>
            <button className="neon-button px-3 py-2 rounded-2xl text-md transition duration-50" onClick={() => scrollToPage(2)}>Lore</button>
            <button className="neon-button px-3 py-2 rounded-2xl text-md transition duration-50" onClick={() => scrollToPage(3)}>Contact</button>
          </ul>
        </div>
      </nav>
    </div>
  );
}
