import {ColumnIcon, RowIcon} from "../icons/Icons";

import {useDispatch, useSelector} from "react-redux";
import {toggleActions} from "../../store/toggle";
import {tasksAction} from "../../store/tasks-slice";

import styles from './UserConfig.module.css'

function UserConfig() {
    const {darkMode, listType} = useSelector(state => state.toggle)
    const dispatch = useDispatch()

    const rowList = () => {
        dispatch(toggleActions.changeTypeList('Row'))
    }

    const columnList = () => {
        dispatch(toggleActions.changeTypeList('Column'))
    }

    const onChangeHandler = (event) => {
        dispatch(tasksAction.setSortValue(event.target.value))
    }

    return (
        <section className={`${styles['config-section']} ${darkMode ? styles.dark : ''}`}>
            <div className={styles.icons}>
                <button className={listType === 'Row' ? styles.active : ''} onClick={rowList}><RowIcon/></button>
                <button className={listType === 'Column' ? styles.active : ''} onClick={columnList}><ColumnIcon/></button>
            </div>
            <div>
                <select className={styles.select} onChange={onChangeHandler}>
                    <option value="Order added">Order added</option>
                    <option value="Earlier first">Earlier first</option>
                    <option value="Later first">Later first</option>
                    <option value="Completed first">Completed first</option>
                    <option value="Uncompleted first">Uncompleted first</option>
                </select>
            </div>
        </section>
    )
}

export default UserConfig