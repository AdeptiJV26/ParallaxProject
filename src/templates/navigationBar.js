export default function TopBar() {
  return (
    <div className="w-full shadow-lg TopBarNav">
      <nav className="fixed top-0 max-w-full mx-auto sm:px-10 lg:px-20 w-full">
        <div className="flex items-center justify-between h-16 group">
          {/* Logo/Brand Name */}
          <div className="font-bold text-white tracking-wider">
          Electro Archon
          </div>

          {/* Navigation Links */}
          <ul className="flex space-x-8 gap-8">
            <li className="group">
              <a
                href="#home"
                className="neon-button rounded-2xl px-3 py-2 text-md transition duration-50"
              >
                Home
              </a>
            </li>
            <li className="group">
              <a
                href="#about"
                className="neon-button rounded-2xl px-3 py-2 text-md transition duration-50"
              >
                Teams
              </a>
            </li>
            <li className="group">
              <a
                href="#services"
                className="neon-button rounded-2xl px-3 py-2 text-md transition duration-50"
              >
                Lore
              </a>
            </li>
            <li className="group">
              <a
                href="#contact"
                className="neon-button px-3 py-2 rounded-2xl text-md transition duration-50"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}