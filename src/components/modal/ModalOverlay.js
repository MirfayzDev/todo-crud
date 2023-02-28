import Button from "../../ui/button/Button";
import {CloseIcon} from "../icons/Icons";

import styles from "./Modal.module.css";

import {PostTask, EditTask} from '../../store/tasks-action'
import {useDispatch, useSelector} from "react-redux";

function ModalOverlay({closeModal}) {
    const dispatch = useDispatch()
    const {title: taskTitle, description, date, id, completed, important} = useSelector(state => state.tasks.selectedTask)
    const {directories} = useSelector(state => state.tasks)
    const {modalType, darkMode} = useSelector(state => state.toggle)
    const title = modalType === 'addModal' ? 'Add a task' : 'Edit task'
    const btnName = modalType === 'addModal' ? 'Add new task' : 'Edit task'

    const onSubmitHandler = (event) => {
        event.preventDefault()
        const task = {
            title: event.target[0].value,
            date: event.target[1].value,
            description: event.target[2].value || 'Description',
            directory: event.target[3].value,
            completed: false,
            important: false
        }

        if (modalType === 'addModal') {
            dispatch(PostTask(task))
        }

        if (modalType === 'editModal') {
            dispatch(EditTask({id, ...task, completed, important}))
        }

        closeModal()
    }

    return (
        <div className={`${styles.container} ${darkMode ? styles.dark : ''}`}>
            <div className={styles['title-wrapper']}>
                <h2>{title}</h2>
                <button className={styles['close-btn']} onClick={closeModal}><CloseIcon/></button>
            </div>
            <form className={styles.form} onSubmit={onSubmitHandler}>
                <label className={styles['form-label']} htmlFor="title">
                    Title
                    <input defaultValue={modalType === 'editModal' ? taskTitle : ''} className={styles['form-control']} required placeholder={'Title'} id={'title'} type="text"/>
                </label>
                <label className={styles['form-label']} htmlFor="date">
                    Date
                    <input defaultValue={modalType === 'editModal' ? date : ''} className={styles['form-control']} required id={'date'} type="date"/>
                </label>
                <label className={styles['form-label']} htmlFor="description">
                    Description (optional)
                    <textarea defaultValue={modalType === 'editModal' ? description : ''} placeholder={'Description'} className={styles['form-control']} id="description"/>
                </label>
                <label className={styles['form-label']} htmlFor="directory">
                    Select a directory
                    <select className={styles['form-control']} id="directory">
                        {
                            directories.map(directory => <option value={directory.title} key={directory.id}>{directory.title}</option>)
                        }
                    </select>
                </label>
                <Button>{btnName}</Button>
            </form>
        </div>
    )
}

export default ModalOverlay