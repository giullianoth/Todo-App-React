import styles from "./Filter.module.css"

export interface FilterProps {
  lightTheme: boolean
}

const Filter = (props: FilterProps) => {
  return (
    <section className={styles.filter + (props.lightTheme ? ` ${styles.light}` : "")}>
      <button className={styles.active}>All</button>
      <button>Active</button>
      <button>Completed</button>
    </section>
  )
}

export default Filter