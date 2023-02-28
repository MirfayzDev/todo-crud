import {Fragment} from "react";
import ReactDOM from "react-dom";

import {useDispatch} from "react-redux";
import {toggleActions} from "../../store/toggle";
import {PostDirectory} from "../../store/tasks-action";

import {CloseIcon} from "../icons/Icons";
import ModalBackdrop from "./ModalBackdrop";
import Button from "../../ui/button/Button";

import styles from "./Modal.module.css";

const ModalOverlay = ({onSubmitHandler, closeModal, darkMode}) => {
    return (
        <div className={`${styles.container} ${darkMode ? styles.dark : ''}`}>
            <div className={styles['title-wrapper']}>
                <h2>Create new directory</h2>
                <button className={styles['close-btn']} onClick={closeModal}><CloseIcon/></button>
            </div>
            <form className={styles.form} onSubmit={onSubmitHandler}>
                <label className={styles['form-label']} htmlFor="title">
                    Title
                    <input className={styles['form-control']} required placeholder={'Enter a directory name'}
                           type="text"/>
                </label>
                <Button>Create</Button>
            </form>
        </div>
    )
}

function DirectoryModal({darkMode}) {
    const dispatch = useDispatch()

    function closeModal() {
        dispatch(toggleActions.closeModal())
    }

    function onSubmitHandler(event) {
        event.preventDefault()
        const directory = event.target[0].value
        if (directory) {
            dispatch(PostDirectory({title: directory}))
        }
        closeModal()
    }

    return (
        <Fragment>
            {
                ReactDOM.createPortal(<ModalBackdrop closeModal={closeModal}/>, document.getElementById('modal'))
            }
            {
                ReactDOM.createPortal(<ModalOverlay onSubmitHandler={onSubmitHandler} darkMode={darkMode}
                                                    closeModal={closeModal}/>, document.getElementById('modal'))
            }
        </Fragment>
    )
}

export default DirectoryModal