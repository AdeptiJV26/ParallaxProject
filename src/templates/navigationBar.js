export default function TopBar() {
  return (
    <nav className="**fixed** **top-0** z-50 bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* ⬅️ Logo/Brand Area */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-gray-900">
              YourBrand
            </a>
          </div>

          {/* ➡️ Navigation Links Area */}
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8 items-center">
            <a
              href="#home"
              className="text-gray-900 hover:text-indigo-600 px-3 py-2 font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-900 hover:text-indigo-600 px-3 py-2 font-medium"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-900 hover:text-indigo-600 px-3 py-2 font-medium"
            >
              Services
            </a>
            {/* Add more links here */}
          </div>
        </div>
      </div>
    </nav>
  );
}
