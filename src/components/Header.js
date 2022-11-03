import {FiMenu} from 'react-icons/fi';

import { useState } from 'react';

const Header = () => {
    const [isMenu, setIsMenu] = useState(false);

    function handleIsMenu() {
        setIsMenu(!isMenu);
    }

    return (
        <header className="header">
            <h1 className="logo"><span>DR.</span> Abdellilah Sami</h1>
            <ul style={{left: isMenu ? 0 : "120%"}} className="nav">
                <li><a className="nav__option" href="#accueil">Accueil</a></li>
                <li><a className="nav__option" href="#services">Services</a></li>
                <li><a className="nav__option" href="#contact">Contact</a></li>
            </ul>
            <a target="_blank" href="http://wa.me/212614671572" className="btn btn--header">Rendez-vous sur Whatsapp</a>
            <FiMenu onClick={handleIsMenu} className="icon icon--menu" />
        </header>
    )
}

export default Header;