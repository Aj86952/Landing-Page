import React, { useState } from "react";
import "./Page.css";
import product from "./product.mp4";

function Page() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <form id="form-main">
        <header className="header">
          <h2 className="travel">Travel</h2>

          <i
            className={`menu-icon ${
              isOpen ? "far fa-window-close move" : "fas fa-bars"
            }`}
            onClick={() => setOpen(!isOpen)}
          ></i>
        </header>

        <h1 id="adventure">Adventure Awaits</h1>

        <p className="content">
          As the monsoon starts retreating, the climate across the country
          becomes quite pleasant and makes for a great opportunity to put on the
          travel shoes! From North to South and East to West, choices for
          vacationing in September in India are plenty and it all depends upon
          your taste.
        </p>
        <video src={product} controls={false} autoPlay={true} muted>
          {" "}
        </video>

        <button className="button">EXPLORE</button>

        <div className="social-icons">
          <i class="fab fa-facebook-square"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-twitter-square"></i>
        </div>
      </form>

      <div className={`menu-bar ${isOpen ? "active" : ""}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Plan Travel</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
}

export default Page;
