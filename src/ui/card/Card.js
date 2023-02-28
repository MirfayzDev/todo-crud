import styles from './Card.module.css'

import {CalendarIcon, DeleteIcon, EditIcon, StarIcon} from "../../components/icons/Icons";

function Card({
                  title,
                  date,
                  description,
                  completed,
                  important,
                  darkMode,
                  listType,
                  edit,
                  deleteTask,
                  toggleImportantTask,
                  toggleCompleteTask
              }) {
    return (
        <div className={`${listType === 'Column' ? styles.container : styles.row} ${darkMode ? styles.dark : ''}`}>
            <div>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <time className={styles.date}><CalendarIcon/> {date}</time>
            </div>
            <div className={styles['btns-wrapper']}>
                <button className={`${styles.statusBtn} ${completed ? styles.completed : styles.uncompleted}`}
                        onClick={toggleCompleteTask}>{completed ? 'Completed' : 'Uncompleted'}</button>
                <div className={styles.icons}>
                    <button className={`${styles.markIcon} ${important ? styles.important : ''}`}
                            onClick={toggleImportantTask}><StarIcon/></button>
                    <button className={styles.deleteIcon} onClick={deleteTask}><DeleteIcon/></button>
                    <button className={styles.editIcon} onClick={edit}><EditIcon/></button>
                </div>
            </div>
        </div>
    )
}

export default Card