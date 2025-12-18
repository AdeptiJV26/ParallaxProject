export default function TopBar() {
  return (
    <div className="w-full bg-gray shadow-lg TopBarNav">
      <nav className="fixed top-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-16 group">
          {/* Logo/Brand Name */}
          <div className="text-xl font-bold text-white tracking-wider">
          Electro Archon
          </div>

          {/* Navigation Links */}
          <ul className="flex space-x-8">
            <li className="group">
              <a
                href="#home"
                className="text-white hover:bg-indigo-700 rounded-2xl hover:text-white px-3 py-2 text-sm font-medium transition duration-150 neon-glow-purple-hover neon-glow"
              >
                Home
              </a>
            </li>
            <li className="group">
              <a
                href="#about"
                className="text-white hover:bg-indigo-700 rounded-2xl hover:text-white px-3 py-2 text-sm font-medium transition duration-150 neon-glow-purple-hover neon-glow"
              >
                About
              </a>
            </li>
            <li className="group">
              <a
                href="#services"
                className="text-white hover:bg-indigo-700 rounded-2xl hover:text-white px-3 py-2 text-sm font-medium transition duration-150 neon-glow-purple-hover neon-glow"
              >
                Settings?
              </a>
            </li>
            <li className="group">
              <a
                href="#contact"
                className="text-white hover:bg-indigo-600 px-3 py-2 rounded-2xl hover:text-white text-sm font-medium transition duration-150 neon-glow-purple-hover neon-glow"
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