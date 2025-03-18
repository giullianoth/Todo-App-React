import styles from "./Actions.module.css"

export interface ActionsProps {
  lightTheme: boolean
  tasksLeft: number
  clearCompleted: Function
}

const Actions = (props: ActionsProps) => {
  return (
    <section className={styles.actions + (props.lightTheme ? ` ${styles.light}` : "")}>
      <div className={styles.actions__count}>
        {props.tasksLeft} {props.tasksLeft === 1 ? "item" : "items"} left
      </div>

      <div className={styles.actions__clear}>
        <button className={styles.actions__clear} onClick={() => props.clearCompleted()}>Clear Completed</button>
      </div>
    </section>
  )
}

export default Actions