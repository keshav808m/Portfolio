function Hero() {
  return (
    <header id="home" className="header">

      <div className="profile-container">

        <div className="hreader-text">
          <h1>Keshav Gorai</h1>
          <p>Full Stack Developer | MERN Stack</p>

          <div className="links">
            <a href="mailto:keshavgorai489@gmail.com">Email</a>
            <a href="https://github.com/keshav808m">GitHub</a>
            <a href="https://www.linkedin.com/in/keshav-gorai-1aa558297">LinkedIn</a>
          </div>
        </div>

        <div className="profile-image">
          <img src="keshav.jpeg" alt="profile_photo" />
        </div>

      </div>

    </header>
  );
}

export default Hero;