import { useEffect, useState } from "react"
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
  const [tasksLeft, setTasksLeft] = useState(0)

  useEffect(() => {
    setTasksLeft(tasks.filter(task => !task.completed).length)
  }, [])

  const createTask = (task: string, completed: boolean) => {
    if (!task) {
      return
    }

    const newTasks = [
      ...tasks,
      {
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        task: task,
        completed: completed
      }
    ]

    setTasks(newTasks)
    setTasksLeft(newTasks.filter(task => !task.completed).length)
  }

  const completeTask = (taskId: number) => {
    const updatedTasks = tasks.map(task => {
      if (taskId === task.id) {
        task.completed = !task.completed
      }
      return task
    })

    setTasks(updatedTasks)
    setTasksLeft(updatedTasks.filter(task => !task.completed).length)
  }

  const deleteTask = (taskId: number) => {
    const sanitizedTasks = tasks.filter(task => task.id !== taskId)
    setTasks(sanitizedTasks)
    setTasksLeft(sanitizedTasks.filter(task => !task.completed).length)
  }

  const clearCompleted = () => {
    const sanitizedTasks = tasks.filter(task => !task.completed)
    setTasks(sanitizedTasks)
    setTasksLeft(sanitizedTasks.filter(task => !task.completed).length)
  }

  return (
    <Container>
      <section className={styles.tasks__form + (props.lightTheme ? ` ${styles.light}` : "")}>
        <TaskForm lightTheme={props.lightTheme} onSubmit={createTask} />
      </section>

      <section className={styles.tasks + (props.lightTheme ? ` ${styles.light}` : "")}>
        <ul className={styles.tasks__list}>
          {tasks.length
            ? tasks.map(task => (
              <Task
                key={`task-${task.id}`}
                task={task}
                lightTheme={props.lightTheme}
                completeTask={completeTask}
                deleteTask={deleteTask} />
            ))
            : <li className={styles.tasks__empty}>Your todo will appear here</li>}
        </ul>
      </section>

      <Actions lightTheme={props.lightTheme} tasksLeft={tasksLeft} clearCompleted={clearCompleted} />
      <Filter lightTheme={props.lightTheme} />
    </Container>
  )
}

export default Tasks