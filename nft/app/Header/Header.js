import React from "react";
import Image from "next/image";
import grow from "./grow.png";
import Buttons from "./Buttons/Buttons";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="text-header">
        <h1 className="why-h1-header">
          <span>Why</span> Us? <br />
          Discover and collect <span>extraordinary.</span>
        </h1>
        <div className="description-header">
          <p className="p-header">
            Marketplace for monster character cllections non fungible token NFTs
          </p>
        </div>
        <div className="button-header-container">
          <Buttons explore="Explore" join="Join Now" />
        </div>
      </div>
      <div className="img-container">
        <Image
          src={grow}
          width={500}
          height={500}
          alt="grow img"
          className="img-header"
        />
      </div>
    </div>
  );
}

export default Header;
