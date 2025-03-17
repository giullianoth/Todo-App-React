import styles from "./Actions.module.css"

const Actions = () => {
  return (
    <section className={styles.actions }>
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