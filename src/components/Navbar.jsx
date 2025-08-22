export default function Navbar() {
  return (
    <nav className="bg-[#0f172a] text-white px-6 py-4 flex justify-between items-center fixed top-0 left-0 w-full z-50 shadow-lg">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <span className="hover:text-yellow-400 transition">
          <a href="#home">Shashank</a>
        </span>
      </div>

      {/* Menu Links */}
      <ul className="hidden md:flex space-x-8 font-medium">
        <li><a href="#home" className="hover:text-yellow-400 transition">Home</a></li>
        <li><a href="#about" className="hover:text-yellow-400 transition">About</a></li>
        <li><a href="#projects" className="hover:text-yellow-400 transition">Projects</a></li>
        <li><a href="#contact" className="hover:text-yellow-400 transition">Contact</a></li>
      </ul>

      {/* Mobile menu button (optional future hamburger menu) */}
      <button className="md:hidden text-yellow-400">☰</button>
    </nav>
  );
}
