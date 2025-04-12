import React from "react";
import { Link } from "react-router-dom";
import bg from "../assets/image.png"; // Replace with your actual background image path
import dropboxLogo from "../assets/dropbox.png"; // Replace with your actual logo paths
import spotifyLogo from "../assets/spotify.png";
import stripeLogo from "../assets/stripe.png";
import netflixLogo from "../assets/netflix.png";

const Home = () => {
  return (
    <section className="position-relative pb-5">
      {/* Left Image Section */}
      <img
        className="d-none d-lg-block position-absolute top-0 start-0 bottom-0 w-50 h-100 img-fluid"
        style={{ objectFit: "cover" }}
        // src={bg}
        alt="Background"
      />

      {/* Right Content Section */}
      <div className="position-relative">
        <div className="container">
          <div className="row pt-5">
            <div className="col-12 col-lg-5 ms-auto">
              <div className="mb-5">
                <h2 className="display-4 fw-bold mb-5">
                  Keep Track of Your Income & Expenses
                </h2>
                <p className="lead text-muted mb-5">
                  View all your income and expenses flow from your team in one
                  dashboard
                </p>
                <div className="d-flex flex-wrap">
                  <Link
                    to="/profile"
                    className="btn btn-primary me-2 mb-2 mb-sm-0"
                  >
                    Track your performance
                  </Link>
                  <a
                    target="_blank"
                    className="btn btn-secondary mb-2 mb-sm-0"
                    href="https://github.com/petermsy/Expenses"
                    rel="noopener noreferrer"
                  >
                    Github Repo
                  </a>
                </div>
              </div>
              <h1 className="text-danger">Admin Login</h1>
              <p>
                <strong>User name:</strong> admin@gmail.com
              </p>
              <p>
                <strong>Password:</strong> 12345
              </p>
              <div className="row align-items-center pt-5">
                <div className="col-6 col-md-4 col-lg-3 col-xl-2 text-center">
                  <img
                    className="d-inline-block img-fluid"
                    src={dropboxLogo}
                    alt="Dropbox"
                  />
                </div>
                <div className="col-6 col-md-4 col-lg-3 col-xl-2 text-center">
                  <img
                    className="d-inline-block img-fluid"
                    src={spotifyLogo}
                    alt="Spotify"
                  />
                </div>
                <div className="col-6 col-md-4 col-lg-3 col-xl-2 text-center">
                  <img
                    className="d-inline-block img-fluid"
                    src={stripeLogo}
                    alt="Stripe"
                  />
                </div>
                <div className="col-6 col-md-4 col-lg-3 col-xl-2 text-center">
                  <img
                    className="d-inline-block img-fluid"
                    src={netflixLogo}
                    alt="Netflix"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;