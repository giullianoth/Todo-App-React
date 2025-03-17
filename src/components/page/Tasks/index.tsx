import Container from "../../common/Container"
import TaskForm from "../../common/TaskForm"
import styles from "./Tasks.module.css"

const Tasks = () => {
  return (
    <Container>
      <section className={styles.tasks__form}>
        <TaskForm />
      </section>
    </Container>
  )
}

export default Tasks