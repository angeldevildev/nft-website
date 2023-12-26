import React from "react";
import "./Minting.css";
import minting from "./minting-process.png";
import Image from "next/image";

function Minting() {
  return (
    <div className="minting-process">
      <div className="img-container-minting">
        <Image
          src={minting}
          alt="minting img"
          className="minting-img"
          loading="lazy"
        />
      </div>
      <div className="text-minting">
        <h1 className="minting-h1">Minting Process</h1>
        <div className="description-container">
          <p>
              Minting begins on May 1st 2022 and the minting price is 0.07 ETH.
              Willy Wang believes in honesty, inclusion and fairness, and
              everyone will have an equal chance to mint any of the Willy Wang
              NFTs. Minting will occur randomly to avoid someone trying to
              obtain the rarest NFTs. <br />
              The identity of your Willy Wang NFT will remain a secret until the
              reveal takes place at 5000 mints. There is no limit to how many
              Willy Wang NFTs you can mint.
          </p>
        </div>
        <div className="list-container-giveaways">
          <h3 className="h3-giveaway">
            105 ETH will be given away during the minting process
          </h3>
          <div className="list">
            <ul>
              <li>1000 giveaways of 0.055 ETH </li>
              <li>200 giveaways of 0.1 ETH </li>
              <li>20 giveaways of 0.5 ETH</li>
              <li>10 giveaways of 1 ETH</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Minting;
