import Container from "../../common/Container"
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.attribution}>
      <Container>
        Challenge by <a href="https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://github.com/giullianoth" target="_blank">Giulliano Guimarães</a>.
      </Container>
    </footer>
  )
}

export default Footer