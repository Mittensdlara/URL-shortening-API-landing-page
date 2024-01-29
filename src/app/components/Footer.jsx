import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="mt-5 w-full">
      <footer className="footer p-10 bg-neutral text-neutral-content ">
        <nav>
          <h6 className="footer-title">
            {" "}
            <a className="btn btn-ghost text-4xl font-bold">Shortly</a>
          </h6>
        </nav>
        <nav>
          <h6 className="footer-title">Features</h6>

          <a className="link link-hover">Link Shortening</a>
          <a className="link link-hover">Branded Links</a>
          <a className="link link-hover">Analytics</a>
        </nav>

        <nav>
          <h6 className="footer-title">Resources</h6>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Developers</a>
          <a className="link link-hover">Support</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Our Team</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav className="flex flex-row justify-items-center">
          <h6 className="footer-title">
            <a className="link link-hover">
              <AiFillFacebook />
            </a>
            <a className="link link-hover">
              <AiFillTwitterSquare />
            </a>
            <a className="link link-hover">
              <AiOutlineInstagram />
            </a>
            <a className="link link-hover">
              <AiOutlineLinkedin />
            </a>
          </h6>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
