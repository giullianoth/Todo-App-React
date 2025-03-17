import Container from "../../common/Container"
import styles from "./Header.module.css"
import iconSun from "../../../assets/images/icon-sun.svg"
import iconMoon from "../../../assets/images/icon-moon.svg"

export interface HeaderProps {
    lightTheme: boolean
    changeTheme: Function
  }
  
const Header = (props: HeaderProps) => {
    return (
        <header className={styles.header}>
            <Container className={styles.header__container}>
                <div className={styles.header__title}>
                    <h1>Todo</h1>
                </div>

                <div
                className={styles.header__switchTheme}
                title={`Ckange to ${props.lightTheme ? "dark" : "light"} theme`}
                onClick={() => props.changeTheme()}>
                    <img src={props.lightTheme ? iconMoon : iconSun} alt="Switch theme" />
                </div>
            </Container>
        </header>
    )
}

export default Header