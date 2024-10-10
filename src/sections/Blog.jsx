import React from "react";

function Blog() {
  return (
    <section id="blog" className="blog">
      <div className="blog-heading">
        <span>My Recent Post</span>
        <h3>My Blog</h3>
        <div className="blog-container">
          <div className="blog-box">
            <div className="blog-img">
              <img src="blog1.png" alt="photo" />
            </div>
            <div className="blog-text">
              <span>10th October 2024/ E-commerce Kenya</span>
              <a href="#" className="blog-title">
                Jumia Kenya's top E-commerce App
              </a>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                magnam aliquid officia alias minus aut harum voluptatibus earum
                id quod?
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
          <div className="blog-box">
            <div className="blog-img">
              <img src="https://i.i-sgcm.com/new_cars/cars/12394/12394_m.jpg" alt="photo" />
            </div>
            <div className="blog-text">
              <span>10th October 2024/ Mercedes G-wagon</span>
              <a href="#" className="blog-title">
                Arguably the best SUV in the world
              </a>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                magnam aliquid officia alias minus aut harum voluptatibus earum
                id quod?
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
          <div className="blog-box">
            <div className="blog-img">
              <img src="https://img.olympics.com/images/image/private/t_s_16_9_g_auto/t_s_w960/f_auto/primary/x5z6bm4phzraok3rwfzl" alt="photo" />
            </div>
            <div className="blog-text">
              <span>10th October 2024/ E-commerce Kenya</span>
              <a href="#" className="blog-title">
                The Paris 2024 Olympics
              </a>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                magnam aliquid officia alias minus aut harum voluptatibus earum
                id quod?
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
