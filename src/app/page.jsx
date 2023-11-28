"use client";
import { useState } from "react";
import aliens from "./lib/aliens.js";
import Divider from "./Divider.jsx";
import meme from "./lib/meme.webp";
import Image from "next/image.js";

export default function Home() {
  const [alienDetails, setAlienDetails] = useState(aliens);

  return (
    <main>
      <Divider section="1" />
      <div className="blue"></div>
      <Divider section="2" />
      <Image src={meme} />
      <Divider section="3" />
      <h2>Alien Planet</h2>
      <div className="container">
        {alienDetails.map((p) => {
          return (
            <div className="aliencard" key={p.id}>
              <p>{p.emoji}</p>
              <p>{p.name}</p>
              <p>
                {" "}
                {p.name} is {p.distanceFromEarth} from earth. {p.name} is
                {p.hasLife
                  ? " believed to have life. "
                  : " believed to not have life. "}
                The atmosphere of {p.name} is {p.atmosphere}.
              </p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
