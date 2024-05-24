import React from "react";
import "./about.css";
import Image from "next/image";
import qol from "../../../img/qol.png";
import per from "../../../img/per.png";
function page() {
  return (
    <div className="continer">
      <div className="about">
        <div className="about_text">
          <h4>Our mision</h4>
          <h1>
            Creating valuable content for creatives <br /> all around the world
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
            <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non{" "}
            <br />
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.{" "}
            <br />
            At risus viverra adipiscing at in tellus.
          </p>
        </div>
        <div className="about_text">
          <p>Our mision</p>
          <h1>
            Creating valuable content for creatives <br /> all around the world
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
            <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non{" "}
            <br />
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.{" "}
            <br />
            At risus viverra adipiscing at in tellus.
          </p>
        </div>
      </div>
      <div className="about_box">
        <div className="about_text">
          <h1>Our team of creatives</h1>
          <h3>
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed
            do eiusmod tempor <br /> incididunt.
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
            <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim{" "}
            <br />
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut{" "}
            <br />
            aliquip ex ea commodo consequat. Duis aute irure dolor in <br />
            reprehenderit in voluptate velit esse cillum dolore eu fugiat.{" "}
            <br />
          </p>
        </div>
        <div className="abo_img">
          <Image src={qol} alt="qol" />
        </div>
      </div>
      <div className="about_box">
        <div className="abo_img">
          <Image src={per} alt="qol" />
        </div>
        <div className="about_text">
          <h1>Why we started this Blog</h1>
          <h3>
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed
            do eiusmod tempor <br /> incididunt.
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
            <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim{" "}
            <br />
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut{" "}
            <br />
            aliquip ex ea commodo consequat. Duis aute irure dolor in <br />
            reprehenderit in voluptate velit esse cillum dolore eu fugiat.{" "}
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
