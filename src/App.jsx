import "./styles/global.css";

function App() {
  function handleGetStartedClick() {
    console.log("Get Started button clicked");
  }

  function handleLearnMoreClick() {
    console.log("Learn More button clicked");
  }

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="container navbar-inner">
            <span>
              <a href="/" className="navbar-logo">
                My Website
              </a>
            </span>
            <ul className="navbar-menu">
              <li className="navbar-menu-item">
                <a href="/">Home</a>
              </li>
              <li className="navbar-menu-item">
                <a href="/about">About</a>
              </li>
              <li className="navbar-menu-item">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="header-hero">
          <h1>Welcome to My Website</h1>
          <p>
            This is a simple website with a navigation bar and three pages. You
            can navigate between the pages by clicking on the links in the
            navigation bar.
          </p>
          <div className="wrapper">
            <button
              type="button"
              onClick={handleGetStartedClick}
              className="btn btn-primary"
            >
              Get Started
            </button>
            <button
              type="button"
              onClick={handleLearnMoreClick}
              className="btn btn-secondary"
            >
              Learn More
            </button>
          </div>
        </div>
      </header>
      <main className="container">
        <section className="section">
          <h2>About</h2>
          <p>
            This is the about page. You can use this page to provide more
            information about your website, products, or services. You can also
            use this page to introduce yourself or your team to your visitors.
          </p>
          <div className="wrapper">
            <div className="card">
              <img src="https://placehold.co/300?text=image" alt="mission" />
              <h3>Our Mission</h3>
              <p>
                Our mission is to provide the best products and services to our
                customers.
              </p>
              <button
                type="button"
                onClick={() => {}}
                className="btn btn-secondary btn-sm"
              >
                Learn More
              </button>
            </div>
            <div className="card">
              <img src="https://placehold.co/300?text=image" alt="mission" />
              <h3>Our Vision</h3>
              <p>
                Our vision is to be the leading provider of high-quality
                products and services in our industry.
              </p>
              <button
                type="button"
                onClick={() => {}}
                className="btn btn-secondary btn-sm"
              >
                Learn More
              </button>
            </div>
            <div className="card">
              <img src="https://placehold.co/300?text=image" alt="mission" />
              <h3>Our Values</h3>
              <p>
                Our values are quality, customer satisfaction, and continuous
                improvement.
              </p>
              <button
                type="button"
                onClick={() => {}}
                className="btn btn-secondary btn-sm"
              >
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
