import styles from "./TaskForm.module.css"
import iconCheck from "../../../assets/images/icon-check.svg"
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react"

export interface TaskFormProps {
  lightTheme: boolean
  onSubmit: Function
  task?: string
  completed?: boolean
}

const TaskForm = (props: TaskFormProps) => {
  const [newTask, setnewTask] = useState(props.task ?? "")
  const [newCompleted, setNewCompleted] = useState(props.completed ?? false)
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (props.task) {
      inputRef?.current?.focus()
    }
  }, [])

  const changeFormData = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "new-complete") {
      setNewCompleted(event.target.checked)
    }

    if (event.target.name === "new-task") {
      setnewTask(event.target.value)
    }

    inputRef?.current?.focus()
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    props.onSubmit(newTask, newCompleted)

    setnewTask("")
    setNewCompleted(false)
    inputRef?.current?.focus()
  }

  return (
    <form autoComplete="off" className={styles.taskForm} onSubmit={handleSubmit}>
      <label className={`complete${props.lightTheme ? " light" : ""}`}>
        <input
          type="checkbox"
          name="new-complete"
          checked={newCompleted}
          onChange={changeFormData} />

        <img src={iconCheck} alt="Complete" />
      </label>

      <input
        type="text"
        name="new-task"
        placeholder="Create a new todo..."
        ref={inputRef}
        value={newTask}
        onChange={changeFormData} />
    </form>
  )
}

export default TaskForm