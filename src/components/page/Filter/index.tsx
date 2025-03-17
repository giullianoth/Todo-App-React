import styles from "./Filter.module.css"

const Filter = () => {
  return (
    <section className={styles.filter}>
      <button className={styles.active}>All</button>
      <button>Active</button>
      <button>Completed</button>
    </section>
  )
}

export default Filter