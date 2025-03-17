import styles from "./TaskForm.module.css"
import iconCheck from "../../../assets/images/icon-check.svg"

const TaskForm = () => {
  return (
    <form autoComplete="off" className={styles.taskForm}>
            <label className="complete">
                <input
                    type="checkbox"
                    name="new-complete"
                    id="new-complete" />

                <img src={iconCheck} alt="Complete" />
            </label>

            <input
                type="text"
                name="new-task"
                id="new-task"
                placeholder="Create a new todo..." />
        </form>
  )
}

export default TaskForm