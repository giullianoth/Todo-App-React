import styles from "./Filter.module.css"

export interface FilterProps {
  lightTheme: boolean
  filter: string
  filterTasks: Function
}

const Filter = (props: FilterProps) => {
  return (
    <section className={styles.filter + (props.lightTheme ? ` ${styles.light}` : "")}>
      <button
        className={props.filter === "all" ? styles.active : ""}
        onClick={() => props.filterTasks("all")}>All</button>

      <button
        className={props.filter === "active" ? styles.active : ""}
        onClick={() => props.filterTasks("active")}>Active</button>

      <button
        className={props.filter === "completed" ? styles.active : ""}
        onClick={() => props.filterTasks("completed")}>Completed</button>
    </section>
  )
}

export default Filter