import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroHeading,
  Span,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./Herostyles";
import video from "../../Video/video.mp4";
import { Button } from "../Globalstyles/Button";

function Hero() {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay="true" loop muted src={video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroHeading>
          Stay Fit<Span>.</Span>{" "}
        </HeroHeading>
        <HeroP>
          Enjoy unlimited gym access and free gym classes for a low cost
        </HeroP>
        <HeroBtnWrapper>
          <Button
            primary="true"
            dark="true"
            to="/signin"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Get started
            {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;
