"use client";
import React from "react";
import Image from "next/image";
function Products({ data }) {
  let product = data?.products?.slice(0, 3).map((el) => (
    <div key={el.id} className="cart">
      <div className="cart_img">
        <Image alt={el.title} width={280} height={280} src={el.images[0]} />
      </div>
      <div className="cart_text">
        <p>
          By <b style={{ color: "#592EA9" }}>{el.brand}</b> | Aug 23,2021
        </p>
        <h3>{el.description.slice(0, 95)}...</h3>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate <br /> velit esse
          cillum dolore eu fugiat nulla pariatur. <br /> Excepteur sint occaecat
          cupidatat non proident.
        </p>
      </div>
    </div>
  ));
  return <div className="carts">{product}</div>;
}

export default Products;
