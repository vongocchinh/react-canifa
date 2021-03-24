import React, { useState, useEffect } from "react";
import "./style.scss";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
function Footer() {
  const [onTop, setOnTop] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      toggleVisibility();
    });
  });
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setOnTop(true);
    } else {
      setOnTop(false);
    }
  };
  const ClickTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="footer-top">
        {onTop ? (
          <div onClick={ClickTop} id="scroll-top" className="scroll-top">
            <div className="container-scroll-top">
              <ExpandLessIcon className="icon-onTop" />
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="container">
          <div className="container-footer-top-top">
            <input
              type="text"
              className="ip-text-bottom"
              placeholder="ENTER YOUR EMAIL ..."
            />
            <input
              type="submit"
              className="btn-text-bottom"
              defaultValue="JOIN NEWSLETTER"
            />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="container-footer-bottom">
            <div className="footer-bottom-column">
              <div className="footer-bottom-row-contact">
                <a href="###">Home</a>
                <a href="###">COMPANY</a>
                <a href="###">TEAM</a>
                <a href="###">BLOG</a>
                <a href="###">CONTACT</a>
                <a href="###">PORTFOLIO</a>
              </div>
              <div className="footer-bottom-row-contact-bottom">
                <p>© 2021, made with by Creative Tim</p>
              </div>
            </div>
            <div className="footer-bottom-column">
              <div className="footer-bottom-row-icon">
                <i className="fa fa-facebook" />
                <i className="fa fa-twitter" />
                <i className="fa fa-linkedin" />
                <i className="fa fa-google-plus" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
