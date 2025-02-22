import {Link} from "react-router-dom"
import styles from "./NavBar.module.css"
import logo from "./logo.png"

const NavBar = () => {
    return(
        <div className={styles["nav-bar"]}>
            <img src={logo} alt="logo-image"/>
            <ul>
                <li>
                    <Link to="/project-shopping-cart">Home</Link>
                </li>
                <li>
                    <Link to="/project-shopping-cart/products">Products</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar