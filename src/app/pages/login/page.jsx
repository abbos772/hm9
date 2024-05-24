import React from "react";
import "./login.css";
function page() {
  return (
    <div className="continer login">
      <h1>Account</h1>
      <div className="serchs">
        <div className="inpp">
          <input type="text" placeholder="Name..." />
        </div>
        <div className="inpp">
          <input type="text" placeholder="Job..." />
        </div>
        <div className="inpp">
          <input type="email" placeholder="Email..." />
        </div>
        <div className="inpp">
          <input type="text" placeholder="Password..." />
        </div>
        <div className="inpp">
          <input type="text" placeholder="Confirm password..." />
        </div>
      </div>
    </div>
  );
}

export default page;
