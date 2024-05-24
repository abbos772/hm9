import React from "react";
import "./Navbar.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/img/Logo.png";
function Page() {
  return (
    <div className="navbar">
      <div className="nav continer">
        <Link href={"/"}>
          <div className="logo">
            <Image src={Logo} alt="logo" />
          </div>
        </Link>
        <div className="links">
          <Link href={"/"}>
            <p>Home</p>
          </Link>
          <Link href={"/pages/blog"}>
            <p>Blog</p>
          </Link>
          <Link href={"/pages/About"}>
            <p>About Us</p>
          </Link>
          <Link href={"/pages/login"}>
            <p>Register</p>
          </Link>
          <Link href={"/pages/login"}>
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page;
