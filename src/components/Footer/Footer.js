import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import logo from '../../Images/logo.png';
import './Footer.css';

const footerStyel = {
    backgroundColor: '#0463c9',
    color: 'white'
}
const Footer = () => {
    return (
        // <div className="d-flex">
            <div style = {footerStyel} className="footer-distributed">
                <div className="rmstu">
                    <a href="/"><img src={logo} alt=""/></a>
                    <p className="footer-company-name">Rangamati Science & Technology University</p>
                </div>
                <div className="contact">

                    <div>
                        <h2>Contact Us</h2>
                    </div>

                    <div className="phone">
                        <FontAwesomeIcon icon = {faPhone}></FontAwesomeIcon>
                        <p>+880-1x-xxxxxx</p>
                    </div>

                    <div className="email">
                        <FontAwesomeIcon icon = {faEnvelope}></FontAwesomeIcon>
                        <p><a href="mostafarmstu@gmail.com">rmstuwithmostafa@gmail.com</a></p>
                    </div>

                </div>

                <div className="about">
                    <h2>About RMSTU</h2>
                    <p className="footer-company-about">
                        Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aperiam.
                    </p>
                </div>
                <div className="icons">
                    <a href="https://facebook.com"><FacebookIcon></FacebookIcon></a>
                    <a href="https://twitter.com"><TwitterIcon></TwitterIcon></a>
                    <a href="https://linkedin.com"><LinkedInIcon></LinkedInIcon></a>
                </div>
            </div>
        // </div>
    );
};

export default Footer;