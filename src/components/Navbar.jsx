const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Shardul Sisodiya</div>
      <ul className="navlinks">
        <li className="navlink">
          <a href="#">About</a>
        </li>
        <li className="navlink">
          <a href="#skills">Skills</a>
        </li>
        <li className="navlink">
          <a href="#">Projects</a>
        </li>
        <li className="navlink">
          <a href="#">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
