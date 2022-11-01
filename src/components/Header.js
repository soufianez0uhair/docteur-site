const Header = () => {
    return (
        <header className="header">
            <h1 className="logo"><span>DR.</span> Abdellilah Sami</h1>
            <ul className="nav">
                <li><a className="nav__option" href="#accueil">Accueil</a></li>
                <li><a className="nav__option" href="#services">Services</a></li>
                <li><a className="nav__option" href="#contact">Contact</a></li>
            </ul>
            <a target="_blank" href="http://wa.me/212614671572" className="btn btn--header">Rendez-vous sur Whatsapp</a>
        </header>
    )
}

export default Header;