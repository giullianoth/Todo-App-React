import { useState } from "react"
import Container from "../../common/Container"
import TaskForm from "../../common/TaskForm"
import styles from "./Tasks.module.css"
import Task from "../../common/Task"

export interface TaskFields {
  id: number
  task: string,
  completed: boolean
}

const Tasks = () => {
  const [tasks, setTasks] = useState<TaskFields[]>([
    {
      id: 1,
      task: "Complete online JavaScript course",
      completed: true
    },
    {
      id: 2,
      task: "Jog around the park 3x",
      completed: false
    },
    {
      id: 3,
      task: "10 minutes meditation",
      completed: false
    },
  ])

  return (
    <Container>
      <section className={styles.tasks__form}>
        <TaskForm />
      </section>

      <section className={styles.tasks}>
        <ul className={styles.tasks__list}>
          {tasks.map(task => (
            <Task
              key={`task-${task.id}`}
              task={task} />
          ))}
        </ul>
      </section>
    </Container>
  )
}

export default Tasks