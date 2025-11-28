const Hero = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="/assets/brand_logo.svg" alt="logo" />
      </div>
      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>

      <button>login</button>
    </nav>
  );
};

export default Hero;