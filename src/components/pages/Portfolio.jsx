import React from "react";
import "./Portfolio.css"
const Portfolio= () => {
    return (
        <div className="portfolio" id="Portfolio">
        <div className="card-item h-full" style={{ display: 'flex', flexDirection: 'column' }}>
          <h1 className="card-title btn-outline btn-accent justify-center items-center text-4xl">Portfolio</h1>
          <p className="portfolio sub-title bg-primary text-center">Please scroll through the Projects</p>
          <div className="h-96 carousel carousel-vertical">
            <div className="carousel-item h-full">
              <div className="image-container">
                <img src="https://github.com/LizaSmirnov/professional_portfolio/assets/122588135/91dc9214-9f73-4e51-be8d-cd86076842db" alt="picture of a bad portfolio website" className="w-full" style={{ width: "3030px" }} />
                <div className="hover-text">
                  <div className="hover-content">
                    <p>Professional Portfolio Version 1</p>
                    <div className="buttons-container">
                      <a target="_blank" rel="noopener" href="https://github.com/LizaSmirnov/professional_portfolio">
                        <button className="hover-button">GitHub Repository</button>
                      </a>
                      <a target="_blank" rel="noopener" href="https://lizasmirnov.github.io/professional_portfolio/">
                        <button className="hover-button">Launched Webpage</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item h-full">
  <a target="_blank" rel="noopener" href="https://github.com/LizaSmirnov/horiseon_refactor">
    <div className="image-container">
      <img src="https://github.com/LizaSmirnov/horiseon_refactor/assets/122588135/f63a387a-035d-4a88-b8b3-1de14020083e" alt="picture of web app horiseon refactor" className="w-full" style={{ width: "3000px" }} />
      <div className="hover-text">
        <div className="hover-content">
          <p>Horiseon Refactor(HTML & CSS)</p>
          <div className="buttons-container">
            <a target="_blank" rel="noopener" href="https://github.com/LizaSmirnov/horiseon_refactor">
              <button className="hover-button">GitHub Repository</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </a>
</div>
<div className="carousel-item h-full">
  <a target="_blank" rel="noopener" href="https://github.com/LizaSmirnov/prework_study_guide_ucberk">
    <div className="image-container">
      <img src="https://user-images.githubusercontent.com/122588135/215419355-5a98d369-d831-444c-9a48-17e95aaa3821.JPG" alt="picture of website and code" className="w-full" style={{ width: "2000px", height: "600px" }} />
      <div className="hover-text">
        <div className="hover-content">
          <p>PreWork Study Guide(HTML & CSS & JS)</p>
          <div className="buttons-container">
            <a target="_blank" rel="noopener" href="https://github.com/LizaSmirnov/prework_study_guide_ucberk">
              <button className="hover-button">GitHub Repository</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </a>
</div>
<div className="carousel-item h-full">
  <div className="image-container">
    <a target="_blank" rel="noopener" href="https://camerong7.github.io/Forecast_Flix/">
      <img src="https://user-images.githubusercontent.com/122588135/228051187-c4fcc27b-4c28-42aa-aa6d-4ebebd7e46a0.png" alt="image website forecast flix" className="w-full" style={{ width: "3000px" }} />
    </a>
    <div className="hover-text">
      <div className="hover-content">
        <p>Forecast_Flix(API)</p>
        <div className="buttons-container">
          <a target="_blank" rel="noopener" href="https://github.com/CameronG7/Forecast_Flix">
            <button className="hover-button">Github Repository</button>
          </a>
            <a target="_blank" rel="noopener" href="https://camerong7.github.io/Forecast_Flix/">
            <button className="hover-button">Launched Webpage</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="carousel-item h-full">
  <div className="image-container">
    <a target="_blank" rel="noopener" href="https://github.com/LizaSmirnov/ecommerce_backend/blob/main/README.md">
      <img src="https://github.com/LizaSmirnov/portfolio_v2_react/assets/122588135/d521fe8e-4dab-4dab-8af0-beace969a78a" alt="picture of code" className="w-full" style={{ width: "3000px" }} />
      <div className="hover-text">
        <div className="hover-content">
          <p>Ecommerce Backend</p>
          <div className="buttons-container">
            <a target="_blank" rel="noopener" href="https://github.com/LizaSmirnov/ecommerce_backend/blob/main/README.md">
              <button className="hover-button">Github Repository</button>
            </a>
          </div>
        </div>
      </div>
    </a>
  </div>
</div>

<div className="carousel-item h-full">
  <div className="image-container">
    <a target="_blank" rel="noopener" href="https://grow-react-787be2a9ebf7.herokuapp.com/">
      <img src="https://github.com/LizaSmirnov/portfolio_v2.1/assets/122588135/62c33346-ebbd-4801-9018-37181d22f36d" alt="picture of code" className="w-full" style={{ width: "3000px" }} />
      <div className="hover-text">
        <div className="hover-content">
          <p>G.R.O.W (Full Stack React App)</p>
          <div className="buttons-container">
            <a target="_blank" rel="noopener" href="https://github.com/CameronG7/G.R.O.W">
              <button className="hover-button">GitHub Repository</button>
            </a>
            <a target="_blank" rel="noopener" href="https://grow-react-787be2a9ebf7.herokuapp.com/">
              <button className="hover-button">Launched Website</button>
            </a>
          </div>
        </div>
      </div>
    </a>
  </div>
</div>

</div>
</div>
</div>
    );
    }

export default Portfolio;
