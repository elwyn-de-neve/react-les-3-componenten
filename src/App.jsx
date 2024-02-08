import "./styles/global.css";
import { Heart } from "@phosphor-icons/react";

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
          <h2>Products</h2>
          <p>
            We offer a wide range of products including T-Shirts, Sweaters, and
            Hoodies. Our products are made of high-quality materials and are
            available in different sizes and colors.
          </p>
          <div className="wrapper">
            <div className="card">
              <span className="card-image">
                <img src="https://placehold.co/300?text=image" alt="mission" />
                <Heart className="icon" weight="fill" size={24} />
              </span>
              <h3>T-Shirt</h3>
              <p>
                Our T-Shirts are made of high-quality cotton and are available
                in different sizes and colors.
              </p>
              <button
                type="button"
                onClick={() => {}}
                className="btn btn-secondary btn-sm"
              >
                Buy Now
              </button>
            </div>
            <div className="card">
              <span className="card-image">
                <img src="https://placehold.co/300?text=image" alt="mission" />
                <Heart className="icon" weight="fill" size={24} />
              </span>
              <h3>Sweater</h3>
              <p>
                Our Sweaters are made of high-quality wool and are available in
                different sizes and colors.
              </p>
              <button
                type="button"
                onClick={() => {}}
                className="btn btn-secondary btn-sm"
              >
                Buy Now
              </button>
            </div>
            <div className="card">
              <span className="card-image">
                <img src="https://placehold.co/300?text=image" alt="mission" />
              </span>
              <h3>Hoodie</h3>
              <p>
                Our Hoodies are made of high-quality cotton and are available in
                different sizes and colors.
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
