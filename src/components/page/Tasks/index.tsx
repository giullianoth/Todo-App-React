import { useState } from "react"
import Container from "../../common/Container"
import TaskForm from "../../common/TaskForm"
import styles from "./Tasks.module.css"
import Task from "../../common/Task"
import Actions from "../Actions"
import Filter from "../Filter"

export interface TasksProps {
  lightTheme: boolean
}

export interface TaskFields {
  id: number
  task: string,
  completed: boolean
}

const Tasks = (props: TasksProps) => {
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
      <section className={styles.tasks__form + (props.lightTheme ? ` ${styles.light}` : "")}>
        <TaskForm lightTheme={props.lightTheme} />
      </section>

      <section className={styles.tasks + (props.lightTheme ? ` ${styles.light}` : "")}>
        <ul className={styles.tasks__list}>
          {tasks.map(task => (
            <Task
              key={`task-${task.id}`}
              task={task}
              lightTheme={props.lightTheme} />
          ))}
        </ul>
      </section>

      <Actions lightTheme={props.lightTheme} />
      <Filter lightTheme={props.lightTheme} />
    </Container>
  )
}

export default Tasks