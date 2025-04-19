function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md fixed w-full z-50">
      <h1 className="text-2xl font-bold text-purple-600">&lt;CindaCodes&gt;</h1>
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li>
          <a href="#about" className="hover:text-purple-500">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-purple-500">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-purple-500">
            Contact
          </a>
        </li>
        <li>
          <a href="#certifications-section" className="hover:text-purple-500">
            Certifications
          </a>
        </li>
      </ul>
      
    </nav>
  );
}

export default Navbar;
