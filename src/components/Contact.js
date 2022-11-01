import {ImLocation} from 'react-icons/im';
import {MdEmail} from 'react-icons/md';
import {BsWhatsapp} from 'react-icons/bs';

import PatientDoctor from '../assets/patientwithdoctor.jpg';

const Contact = () => {
    return (
        <div className="contactPage">
            <div className="contact wrapper">
                <div className="contact__text">
                    <h1 className="contact__title">N'hesitez pas de nous visiter!</h1>
                    <div className="contact__options">
                        <span className="contact__option">
                            <ImLocation className="icon icon--location" /> 44 rue, Casablanca 20250
                        </span>
                        <span className="contact__option">
                            <MdEmail className="icon icon--email" /> abdellahsami@gmail.com
                        </span>
                    </div>
                    <a href="http://wa.me/212614671572" target="_blank" className="btn"><BsWhatsapp className="icon icon--whatsapp" /> Rendez-vous sur Whatsapp</a>
                </div>
                <img src={PatientDoctor} alt="patient with doctor img" className="contact__img" />
            </div>
        </div>
    )
}

export default Contact;