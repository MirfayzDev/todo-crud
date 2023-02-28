import {useDispatch, useSelector} from "react-redux";

import ProgressBar from "../../ui/progress/ProgressBar";

import {toggleActions} from "../../store/toggle";

import image from '../../image/profile_pic.jpg'

import styles from './Aside.module.css'

function Aside({isOpen}) {
    const dispatch = useDispatch()
    const {darkMode} = useSelector(state => state.toggle)
    const {tasks} = useSelector(state => state.tasks)
    const tasksCompleted = tasks.filter(task => task.completed === true)
    const currentDate = new Date().toLocaleDateString('uz-Uz', {year: 'numeric', month: "2-digit", day: "2-digit"})
    const tasksToday = tasks.filter(task => task.date === currentDate)
    const tasksCompletedToday = tasks.filter(task => task.date === currentDate && task.completed)

    const switchDark = () => {
        console.log(tasksCompletedToday)
        if (darkMode) {
            dispatch(toggleActions.darkModeOff())
        } else {
            dispatch(toggleActions.darkModeOn())
        }
    }

    return (
        <aside className={`${isOpen ? styles.open : styles.container} ${darkMode ? styles.dark : ''}`}>
            <div className={styles.title}>
                <h2>Hi, User!</h2>
                <img className={styles.img}
                     src={image}
                     alt="profile picture"/>
            </div>
            <div className={styles.darkmode}>
                <p>Dark mode</p>
                <label htmlFor={'darkmode'} className={styles.switch}>
                    <input onChange={switchDark} id={'darkmode'} type="checkbox"/>
                    <span className={styles.slider}></span>
                </label>
            </div>
            <div>
                {tasksToday.length > 0 ? <p className={styles.label}>tasks
                        today <span>{tasksCompletedToday.length + '/' + tasksToday.length}</span></p> :
                    <p className={styles.label}>No tasks today :(</p>}
                {tasksToday.length > 0 ?
                    <ProgressBar tasksCompleted={tasksCompletedToday.length} allTasks={tasksToday.length}/> : ''}
            </div>
            <div>
                <p className={styles.label}>All tasks <span>{tasksCompleted.length + '/' + tasks.length}</span></p>
                <ProgressBar tasksCompleted={tasksCompleted.length} allTasks={tasks.length}/>
            </div>
        </aside>
    )
}

export default Aside