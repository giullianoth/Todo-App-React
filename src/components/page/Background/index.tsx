import { useState } from "react"
import styles from "./Background.module.css"
import bgDesktopDark from "../../../assets/images/bg-desktop-dark.jpg"
import bgDesktopLight from "../../../assets/images/bg-desktop-light.jpg"
import bgMobileDark from "../../../assets/images/bg-mobile-dark.jpg"
import bgMobileLight from "../../../assets/images/bg-mobile-light.jpg"

const Background = () => {
  const [largeScreen, setLargeScreen] = useState(window.innerWidth >= 576)
  window.addEventListener("resize", () => setLargeScreen(window.innerWidth >= 576))


  return (
    <div
      className={styles.background}
      style={{
        backgroundImage: `url(${largeScreen ? bgDesktopDark : bgMobileDark})`
      }}></div >
  )
}

export default Background