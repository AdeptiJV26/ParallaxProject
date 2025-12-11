export default function TopBar() {
  return (
    <div className="w-full bg-gray shadow-lg" zIndex={1}>
      <nav className="fixed top-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand Name */}
          <div className="text-xl font-bold text-white tracking-wider">
          Electro Archon
          </div>

          {/* Navigation Links */}
          <ul className="flex space-x-8">
            <li>
              <a
                href="#home"
                className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150"
              >
                Settings?
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white bg-indigo-600 hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium transition duration-150"
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