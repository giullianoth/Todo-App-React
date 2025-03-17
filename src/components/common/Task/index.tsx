import { TaskFields } from "../../page/Tasks"
import styles from "./Task.module.css"
import iconCheck from "../../../assets/images/icon-check.svg"
import iconCross from "../../../assets/images/icon-cross.svg"

export interface TaskProps {
    task: TaskFields
    lightTheme: boolean
}

const Task = (props: TaskProps) => {
    return (
        <li className={styles.task
            + (props.task.completed ? ` ${styles.completed}` : "")
            + (props.lightTheme ? ` ${styles.light}` : "")}>
            <div className={styles.task__container}>
                <label
                    className={`complete${props.lightTheme ? " light" : ""}`}
                    title={props.task.completed ? "Set as non-complete" : "Complete this task"}>
                    <input
                        type="checkbox"
                        name="new-complete"
                        checked={props.task.completed}
                        onChange={() => {}} />

                    <img src={iconCheck} alt="Complete" />
                </label>

                <p className={styles.task__content}>{props.task.task}</p>

                <button className={styles.task__delete} title="Delete this task">
                    <img src={iconCross} alt="Delete" />
                </button>
            </div>
        </li>
    )
}

export default Task