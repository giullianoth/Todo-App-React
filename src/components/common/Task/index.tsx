import { TaskFields } from "../../page/Tasks"
import styles from "./Task.module.css"
import iconCheck from "../../../assets/images/icon-check.svg"
import iconCross from "../../../assets/images/icon-cross.svg"
import { useState } from "react"
import TaskForm from "../TaskForm"
import { Draggable } from "@hello-pangea/dnd"

export interface TaskProps {
    task: TaskFields
    lightTheme: boolean
    completeTask: Function
    deleteTask: Function
    updateTask: Function
    editing: boolean
    setEditing: Function
    index: number
}

const Task = (props: TaskProps) => {
    const [showUpdateForm, setShowUpdateForm] = useState(false)

    const handleDoubleClick = () => {
        if (!props.editing) {
            setShowUpdateForm(true)
            props.setEditing(true)
        }
    }

    const handleUpdate = (task: string, completed: boolean) => {
        props.updateTask(props.task.id, task, completed)
        setShowUpdateForm(false)
        props.setEditing(false)
    }

    return (
        showUpdateForm
            ? <li
                className={styles.task
                    + (props.task.completed ? ` ${styles.completed}` : "")
                    + (props.lightTheme ? ` ${styles.light}` : "")}>
                <TaskForm lightTheme={props.lightTheme} onSubmit={handleUpdate} task={props.task.task} completed={props.task.completed} />
            </li>

            : <Draggable draggableId={`draggable-task-${props.task.id}`} index={props.index}>
                {(provided) => (
                    <li
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        className={styles.task
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
                                    onChange={() => props.completeTask(props.task.id)} />

                                <img src={iconCheck} alt="Complete" />
                            </label>

                            <p
                                className={styles.task__content}
                                title="Double click to edit task"
                                onDoubleClick={handleDoubleClick}>{props.task.task}</p>

                            <button className={styles.task__delete} title="Delete this task" onClick={() => props.deleteTask(props.task.id)}>
                                <img src={iconCross} alt="Delete" />
                            </button>
                        </div>
                    </li>
                )}
            </Draggable>
    )
}

export default Task