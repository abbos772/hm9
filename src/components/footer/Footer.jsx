import React from "react";
import "./footer.css";
import Image from "next/image";
import socal from "../../img/socal.png";
function Footer() {
  return (
    <div className="footer">
      <div className="continer">
        <div className="foot">
          <div className="fo">
            <p>Finstreet 118 2561 Fintown</p>
            <p>Hello@finsweet.com 020 7993 2905</p>
          </div>
          <div>
            <Image src={socal} alt="foot" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
