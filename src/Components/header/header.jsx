import "./header.css"
import logo from "../../Assets/img/Logo.svg"

export const Header = () => {
    return <div className="header">

    <div className ="headerr container">
        <a href="#">
            <img src={logo} alt="haha" width="140" height="28" />
        </a>

        <ul className="header__list">
            <li className="header__item">
                <a className="header__link" href="#">Home</a>
            </li>

            <li className="header__item">
                <a className="header__link" href="#">Blog</a>
            </li>

            <li className="header__item">
                <a className="header__link" href="#">About Us</a>
            </li>

            <li className="header__item">
                <a className="header__link" href="#">Contact us</a>
            </li>

            <li>
            <a className="header__link1" href="#">Subscribe</a>
            </li>
        </ul>
    </div>

    </div>
}

export default Header