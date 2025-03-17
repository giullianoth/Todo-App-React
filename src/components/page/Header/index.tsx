import Container from "../../common/Container"
import styles from "./Header.module.css"
import iconSun from "../../../assets/images/icon-sun.svg"
import iconMoon from "../../../assets/images/icon-moon.svg"

const Header = () => {
    return (
        <header className={styles.header}>
            <Container className={styles.header__container}>
                <div className={styles.header__title}>
                    <h1>Todo</h1>
                </div>

                <div
                className={styles.header__switchTheme}>
                    <img src={iconSun} alt="Switch theme" />
                </div>
            </Container>
        </header>
    )
}

export default Header