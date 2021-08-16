import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  z-index: 1;
  justify-content: center;
  position: relative;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: rgb(1, 6, 6);
  background: radial-gradient(
    circle,
    rgba(1, 6, 6, 0.6502976190476191) 15%,
    rgba(1, 191, 113, 0.6474964985994398) 100%
  );
`;
export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.3;
  /* background: #232a34; */
`;
export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const HeroHeading = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;
  font-family: "Righteous", cursive;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const Span = styled.span`
  font-size: 5rem;
  color: #01bf71;
`;
export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  font-family: "Open Sans Condensed", sans-serif;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;
