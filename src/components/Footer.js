import {FiFacebook} from 'react-icons/fi';
import {AiOutlineInstagram, AiOutlineYoutube} from 'react-icons/ai';

const Footer = () => {
    return (
        <div className="section--green">
            <div className="footer wrapper">
                <div className="footer__logo">
                    <span>DR.</span> Abdellilah Sami
                </div>
            <div className="footer__icons">
                <a href="https://facebook.com/dr" target="_blank" ><FiFacebook className="icon icon--socialMedia" /></a>
                <a href="https://instagram.com/dr" target="_blank" ><AiOutlineInstagram className="icon icon--socialMedia" /></a>
                <a href="https://youtube.com/dr" target="_blank" ><AiOutlineYoutube className="icon icon--socialMedia" /></a> 
            </div>
            </div>
        </div>
    )
}

export default Footer;