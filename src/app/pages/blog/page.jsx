import React from "react";
import "./blog.css";
import Image from "next/image";
import girls from "../../../img/girls.png";
function Blog() {
  return (
    <div className="blog_flex">
      <div className="blog">
        <h1>Business</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
          eiusmod tempor incididunt ut labore.
        </p>
        <h4>Blog - Business</h4>
      </div>
      <div className="continer">
        <div className="search">
          <input type="text" placeholder="Searching..." />
        </div>
        <div className="blog_boxes">
          <div className="blog_box">
            <div className="img">
              <Image src={girls} alt="girl" />
            </div>
            <div className="img_text">
              <b>Business</b>
              <h1>
                Top 6 free website mockup <br /> tools 2022
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
                <br />
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non{" "}
                <br />
                blandit massa enim nec.
              </p>
            </div>
          </div>
          <div className="blog_box">
            <div className="img">
              <Image src={girls} alt="girl" />
            </div>
            <div className="img_text">
              <b>Business</b>
              <h1>
                Step-by-step guide to choosing <br /> great font pairs
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
                <br />
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non{" "}
                <br />
                blandit massa enim nec.
              </p>
            </div>
          </div>
          <div className="blog_box">
            <div className="img">
              <Image src={girls} alt="girl" />
            </div>
            <div className="img_text">
              <b>Business</b>
              <h1>
                Ten free foogle fonts that you <br /> should use
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
                <br />
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non{" "}
                <br />
                blandit massa enim nec.
              </p>
            </div>
          </div>
          <div className="blog_box">
            <div className="img">
              <Image src={girls} alt="girl" />
            </div>
            <div className="img_text">
              <b>Business</b>
              <h1>
                What did I learn from doing 50+ <br /> design sprints?
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
                <br />
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non{" "}
                <br />
                blandit massa enim nec.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
