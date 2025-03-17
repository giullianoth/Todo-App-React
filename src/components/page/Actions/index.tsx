import styles from "./Actions.module.css"

export interface ActionsProps {
  lightTheme: boolean
}

const Actions = (props: ActionsProps) => {
  return (
    <section className={styles.actions + (props.lightTheme ? ` ${styles.light}` : "")}>
      <div className={styles.actions__count}>
        2 items left
      </div>

      <div className={styles.actions__clear}>
        <button className={styles.actions__clear}>Clear Completed</button>
      </div>
    </section>
  )
}

export default Actions