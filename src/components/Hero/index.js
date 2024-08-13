import {
  HeroBtn,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroItems,
  HeroP
} from "./HeroElements";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { useState } from "react";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <HeroContainer>
      <Navbar state={{ toggle }} />
      <Sidebar state={{ isOpen, toggle }} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Most delicious Pizza</HeroH1>
          <HeroP>Get it in 30 minutes</HeroP>
          <HeroBtn>Order Now</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
}
