import {useDispatch, useSelector} from "react-redux";

import {ArrowIcon} from "../icons/Icons";

import {toggleActions} from "../../store/toggle";

import styles from './Dropdown.module.css'

function Dropdown() {
    const {directories} = useSelector(state => state.tasks)
    const {isOpenDirectory} = useSelector(state => state.toggle)
    const dispatch = useDispatch()

    const onClickHandler = () => {
        dispatch(toggleActions.toggleDirectory())
    }

    const openModal = () => {
        dispatch(toggleActions.directoryModal())
    }

    return <div className={styles.container}>
        <button onClick={onClickHandler} className={styles.btn}>
            <ArrowIcon style={`${styles.icon} ${isOpenDirectory ? styles.iconOpened : styles.iconClosed}`}/>
            Directories
        </button>
        {isOpenDirectory && <div>
            <ul className={styles['dropdown-list']}>
                {
                    directories && directories.map(directory => <li key={directory.id}>{directory.title}</li>)
                }
            </ul>
            <button className={styles.new} onClick={openModal}>+ New</button>
        </div>}
    </div>
}

export default Dropdown