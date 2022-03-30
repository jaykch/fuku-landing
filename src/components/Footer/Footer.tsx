import React from "react";
import { Discord, FukuLogoWhite, Twitter } from "../../assets";
import { SocialMedia } from "../SocialMedia";
import "./Footer.scss";
import FooterBackgroundLg from "../../assets/footer-lg.png";
import { SubscribeForm } from "../SubscribeForm";

export const Footer = () => {
  return (
    <footer className="footer">
      <img src={FooterBackgroundLg} alt="fuku-footer-background" />
      <div className="footer__content-container">
        <div className="footer__content">
          <h1 className="footer__header">Join our community</h1>
          <div className="footer__content-right">
            <SubscribeForm />
            <div className="footer__social">
              <div className="footer__social-list">
                <SocialMedia
                  className="footer__social-icon"
                  link="https://twitter.com/fukunft"
                  image={
                    <React.Fragment>
                      <Twitter />
                    </React.Fragment>
                  }
                />
                <SocialMedia
                  className="footer__social-icon"
                  link="https://discord.gg/wJMWhNa5"
                  image={
                    <React.Fragment>
                      <Discord />
                    </React.Fragment>
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <FukuLogoWhite />
        </div>
      </div>
    </footer>
  );
};
