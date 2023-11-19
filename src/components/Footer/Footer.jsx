import { FaFacebookF } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsPinterest } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <form action="#" className="subscribe-form">
              <input
                type="text"
                placeholder="Enter your email to subscribe..."
              />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
          <div className="col-md-3 col-md-offset-1">
            <div className="social-links">
              <Link className="inline-flex items-center justify-center">
                <FaFacebookF />
              </Link>
              <Link className="inline-flex items-center justify-center">
                <FaTwitter />
              </Link>
              <Link className="inline-flex items-center justify-center">
                <FcGoogle />
              </Link>
              <Link className="inline-flex items-center justify-center">
                <BsPinterest />
              </Link>
            </div>
          </div>
        </div>

        <p className="colophon">
          Copyright 2023 Redon Solution. Designed by Sabbir. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
