import Doctor from '../assets/doctor.png';

import {BsWhatsapp} from 'react-icons/bs';

import Board from './Board';

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__text">
                <h3>Bonjour 👋</h3>
                <h1>Laissez nous prendre soin de votre sante.</h1>
                <p>L'otorhinolaryngologie (littéralement « étude de l'oreille, du nez et du larynx ») représente une branche de la médecine spécialisée dans le diagnostic et le traitement des troubles du nez, de la gorge, de l'oreille, et de la région tête et cou.</p>
                <a href="http://wa.me/212614671572" target="_blank" className="btn"><BsWhatsapp className="icon icon--whatsapp" /> Rendez-vous sur Whatsapp</a>
            </div>
            <img src={Doctor} alt="doctor png" className="hero__img" />
            <Board />
        </div>
    )
}

export default Hero;