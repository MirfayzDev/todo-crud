import {Fragment} from "react";
import ReactDOM from "react-dom";

import {useDispatch, useSelector} from "react-redux";
import {toggleActions} from "../../store/toggle";
import {DeleteTask} from "../../store/tasks-action";

import ModalBackdrop from "./ModalBackdrop";
import {CloseIcon} from "../icons/Icons";

import styles from './Modal.module.css'

const ModalOverlay = ({darkMode, closeModal, deleteTask}) => {
    return (
        <div className={`${styles.deleteModalContainer}  ${darkMode ? styles.dark : ''}`}>
            <div className={styles['title-wrapper']}>
                <h2>Are you sure?</h2>
                <button className={styles['close-btn']} onClick={closeModal}><CloseIcon/></button>
            </div>
            <p>This task will be deleted.</p>
            <div className={styles['btn-wrapper']}>
                <button className={styles.cancelBtn} onClick={closeModal}>cancel</button>
                <button className={styles.confirmBtn} onClick={deleteTask}>Confirm</button>
            </div>
        </div>
    )
}

function DeleteModal({darkMode}) {
    const dispatch = useDispatch()
    const {selectedTask} = useSelector(state => state.tasks)

    const closeModal = () => {
        dispatch(toggleActions.closeModal())
    }

    const deleteTask = () => {
        dispatch(DeleteTask(selectedTask))
        closeModal()
    }

    return (
        <Fragment>
            {
                ReactDOM.createPortal(<ModalBackdrop closeModal={closeModal}/>, document.getElementById('modal'))
            }
            {
                ReactDOM.createPortal(<ModalOverlay deleteTask={deleteTask} darkMode={darkMode}
                                                    closeModal={closeModal}/>, document.getElementById('modal'))
            }
        </Fragment>
    )
}

export default DeleteModal