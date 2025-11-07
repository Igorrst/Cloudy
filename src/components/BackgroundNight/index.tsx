import React, { useEffect } from "react";
import "./index.css";

const BackgroundNight: React.FC = () => {
  useEffect(() => {
    const starsContainer = document.querySelector(".stars");
    if (!starsContainer) return;

    starsContainer.innerHTML = "";

    const numStars = 250;
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 3}s`;
      starsContainer.appendChild(star);
    }
  }, []);

  return (
    <div className="frame">
      <div className="moon"></div>
      <div className="stars"></div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 762 331"
        className="cloud big front slowest"
      >
        <path
          fill="#b0b0b0"
          d="M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16
          c0-58.542-47.458-106-106-106 c-8.198,0-16.178,0.932-23.841,2.693
          C548.279,45.434,488.199,0,417.5,0 c-84.827,0-154.374,65.401-160.98,148.529
          C245.15,143.684,232.639,141,219.5,141 c-49.667,0-90.381,38.315-94.204,87H46.607
          C20.866,228,0,251.058,0,279.5 S20.866,331,46.607,331h668.787
          C741.133,331,762,307.942,762,279.5 S741.133,228,715.394,228z"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 762 331"
        className="cloud distant smaller slower"
      >
        <path
          fill="#a0a0a0"
          d="M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16
          c0-58.542-47.458-106-106-106 c-8.198,0-16.178,0.932-23.841,2.693
          C548.279,45.434,488.199,0,417.5,0 c-84.827,0-154.374,65.401-160.98,148.529
          C245.15,143.684,232.639,141,219.5,141 c-49.667,0-90.381,38.315-94.204,87H46.607
          C20.866,228,0,251.058,0,279.5 S20.866,331,46.607,331h668.787
          C741.133,331,762,307.942,762,279.5 S741.133,228,715.394,228z"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 762 331"
        className="cloud small slow"
      >
        <path
          fill="#c5c5c5"
          d="M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16
          c0-58.542-47.458-106-106-106 c-8.198,0-16.178,0.932-23.841,2.693
          C548.279,45.434,488.199,0,417.5,0 c-84.827,0-154.374,65.401-160.98,148.529
          C245.15,143.684,232.639,141,219.5,141 c-49.667,0-90.381,38.315-94.204,87H46.607
          C20.866,228,0,251.058,0,279.5 S20.866,331,46.607,331h668.787
          C741.133,331,762,307.942,762,279.5 S741.133,228,715.394,228z"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 762 331"
        className="cloud smaller slowest"
      >
        <path
          fill="#bcbcbc"
          d="M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16
          c0-58.542-47.458-106-106-106 c-8.198,0-16.178,0.932-23.841,2.693
          C548.279,45.434,488.199,0,417.5,0 c-84.827,0-154.374,65.401-160.98,148.529
          C245.15,143.684,232.639,141,219.5,141 c-49.667,0-90.381,38.315-94.204,87H46.607
          C20.866,228,0,251.058,0,279.5 S20.866,331,46.607,331h668.787
          C741.133,331,762,307.942,762,279.5 S741.133,228,715.394,228z"
        />
      </svg>
    </div>
  );
};

export default BackgroundNight;