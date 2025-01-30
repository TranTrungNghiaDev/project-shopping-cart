import NavBar from "../../common_components/NavBar"
import styles from "./Home.module.css"

const Home = () => {
    return (
        <>
        <NavBar />
        <div className={styles.home}>
        <h1>Welcome to my NTF Fake Store</h1>
        </div>
        </>
    )
}

export default Home