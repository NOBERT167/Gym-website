import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  AnchorLink,
} from "./FooterStyles";
import {
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import { AiOutlineHeart } from "react-icons/ai";

function Footer() {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/">How It Works</FooterLink>
              <FooterLink to="/sigin">Testimonials</FooterLink>
              <FooterLink to="/sigin">Terms of service</FooterLink>
              <FooterLink to="/sigin">Investors</FooterLink>
              <FooterLink to="/sigin">Careers</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/">Submit video</FooterLink>
              <FooterLink to="/sigin">Agency</FooterLink>
              <FooterLink to="/sigin">Influencer</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/">Contact</FooterLink>
              <FooterLink to="/sigin">Support</FooterLink>
              <FooterLink to="/sigin">Destination</FooterLink>
              <FooterLink to="/sigin">Sponsorship</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/">Facebook</FooterLink>
              <FooterLink to="/sigin">Instagram</FooterLink>
              <FooterLink to="/sigin">Twitter</FooterLink>
              <FooterLink to="/sigin">Youtube</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Fitness Zone
            </SocialLogo>
            <WebsiteRights>
              Fitness zone &copy; {new Date().getFullYear()} All rights
              resolved. <br /> Created with <AiOutlineHeart /> by{" "}
              <span>
                {" "}
                <AnchorLink target="_blank" href="https://github.com/NOBERT167">
                  {" "}
                  Nobert.Dev{" "}
                </AnchorLink>{" "}
              </span>
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedinIn />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Whatsapp">
                <FaWhatsapp />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;
