import styles from "./Container.module.css"

export interface ContainerProps {
    children: any
    className?: string
}

const Container = (props: ContainerProps) => {
  return (
    <div className={styles.container + (props.className ? ` ${props.className}` : "")}>
        {props.children}
    </div>
  )
}

export default Container