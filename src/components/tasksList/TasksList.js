import Card from "../../ui/card/Card";

import {useDispatch, useSelector} from "react-redux";
import {toggleActions} from "../../store/toggle";
import {tasksAction} from "../../store/tasks-slice";
import {ToggleCompleteTask, ToggleImportantTask} from "../../store/tasks-action";

import styles from './TaskList.module.css'

function TasksList() {
    const {tasks, searchValue, searchList} = useSelector(state => state.tasks)
    const {darkMode, listType} = useSelector(state => state.toggle)
    const dispatch = useDispatch()
    const list = !searchValue ? tasks : searchList

    const openModal = () => {
        dispatch(toggleActions.openAddModal())
    }

    const editModal = (task) => {
        dispatch(toggleActions.openEditModal())
        dispatch(tasksAction.getSelectedTask(task))
    }

    const deleteTask = (task) => {
        dispatch(toggleActions.openDeleteModal())
        dispatch(tasksAction.getSelectedTask(task))
    }

    const toggleCompletedTask = (task) => {
        dispatch(ToggleCompleteTask(task))
    }

    const toggleImportantTask = (task) => {
        dispatch(ToggleImportantTask(task))
    }

    return (
        <section className={styles['tasksList-section']}>
            <ul className={`${listType === 'Column' ? styles.list : styles.row} ${darkMode ? styles.dark : ''}`}>
                {
                    list?.map(task => <li key={task.id} className={styles['list-item']}>
                        <div className={styles.directory}>{task.directory}</div>
                        <Card title={task.title}
                              date={task.date}
                              description={task.description}
                              completed={task.completed}
                              important={task.important}
                              darkMode={darkMode}
                              listType={listType}
                              edit={() => editModal(task)}
                              deleteTask={() => deleteTask(task)}
                              toggleCompleteTask={() => toggleCompletedTask(task)}
                              toggleImportantTask={() => toggleImportantTask(task)}
                        />
                    </li>)
                }
                <li className={`${styles['list-item']} ${darkMode ? styles.dark : ''}`}>
                    <button onClick={openModal} className={styles.newTaskBtn}>Add new task</button>
                </li>
            </ul>
        </section>
    )
}

export default TasksList