import GitHub from '../../assets/github.png';
import Insta from '../../assets/instagram.png';
import Linkedin from '../../assets/linkedin.png';
import logo from '../../assets/logo.png';

import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <hr />
            <div className="footer">
                <div className="social-links">
                    <img src={GitHub} alt="git" />
                    <img src={Insta} alt="insta" />
                    <img src={Linkedin} alt="linka" />
                </div>
                <div className="logo-f">
                    <img src={logo} alt="logo" />
                </div>
            </div>
            <div className="blur blur-f1"></div>
            <div className="blur blur-f2"></div>
        </div>
    );
};

export default Footer;