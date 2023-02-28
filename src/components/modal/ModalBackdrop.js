import styles from "./Modal.module.css";

const ModalBackdrop = ({closeModal}) => {
    return <div onClick={closeModal} className={styles.backdrop}></div>
}

export default ModalBackdrop