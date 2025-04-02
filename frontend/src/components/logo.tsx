import { useState } from "react";
import Image from "next/image";

const JeeviLogo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ cursor: "pointer" }}
    >
      <Image
        src={isHovered ? "/gif/Jeevi_enlargedLogo.gif" : "/gif/big_jeevi.gif"}
        alt="Jeevi Logo"
        width={90}
        height={50}
        unoptimized
      />
    </div>
  );
};

export default JeeviLogo;