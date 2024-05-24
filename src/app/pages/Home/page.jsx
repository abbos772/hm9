import React from "react";
import "./home.css";
import Image from "next/image";
import Products from "@/components/Products/Products";
import box1 from "@/img/icon.png";
import box2 from "@/img/box1.png";
import box3 from "@/img/box2.png";
import box4 from "@/img/box3.png";

async function getData() {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Home = async () => {
  const data = await getData();
  console.log(data);
  return (
    <div className="home">
      <div className="man">
        <div className="man_text continer">
          <h4>Posted on startup</h4>
          <h1>
            Step-by-step guide to choosing <br /> great font pairs
          </h1>
          <p>
            By <b style={{ color: "#FFD050" }}>James West</b> | May 23, 2022{" "}
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu <br /> fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident.
          </p>
          <button>Read More </button>
        </div>
      </div>
      <div className="continer">
        <div className="product_flex">
          <h3 className="h3">Popular blogs</h3>
          <div className="carts">
            <Products data={data} />
          </div>
        </div>
        <hr
          style={{
            background: "#6D6E76",
            marginBottom: "50px",
            marginTop: "50px",
            width: "100%",
          }}
        />
        <div className="boxes">
          <h1>Choose A Catagory</h1>
          <div className="box">
            <div className="box1">
              <Image src={box1} alt="box" />
              <h3>Business</h3>
              <p>
                Lorem ipsum dolor sit amet, <br /> consectetuer adipiscing elit.
              </p>
            </div>
            <div className="box1">
              <Image style={{ marginTop: "10px" }} src={box2} alt="box" />
              <h3 style={{ marginTop: "10px" }}>Startup</h3>
              <p>
                Lorem ipsum dolor sit amet, <br /> consectetuer adipiscing elit.
              </p>
            </div>
            <div className="box1">
              <Image src={box4} alt="box" />
              <h3>Economy</h3>
              <p>
                Lorem ipsum dolor sit amet, <br /> consectetuer adipiscing elit.
              </p>
            </div>
            <div className="box1">
              <Image style={{ marginTop: "10px" }} src={box3} alt="box" />
              <h3 style={{ marginTop: "10px" }}>Economy</h3>
              <p>
                Lorem ipsum dolor sit amet, <br /> consectetuer adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
