import {useDispatch, useSelector} from "react-redux";

import {toggleActions} from "../../store/toggle";

import {NavLink} from "react-router-dom";

import Button from "../../ui/button/Button";
import Dropdown from "../dropdown/Dropdown";

import styles from './Header.module.css'

function Header({isOpen}) {
    const dispatch = useDispatch()
    const {darkMode} = useSelector(state => state.toggle)

    const openModal = () => {
        dispatch(toggleActions.openAddModal())
    }

    return (
        <header className={`${isOpen ? styles.open : styles.container} ${darkMode ? styles.dark : ''}`}>
            <h1 className={styles.logo}>To-do list</h1>
            <div className={styles.btn}>
                <Button onClickHandler={openModal}>Add new task</Button>
            </div>
            <nav className={styles.nav}>
                <ul className={styles['nav-list']}>
                    <li><NavLink to='/' className={({isActive}) => (isActive ? styles.active : undefined)}>All tasks</NavLink></li>
                    <li><NavLink to='today' className={({isActive}) => (isActive ? styles.active : undefined)}>Today's task</NavLink></li>
                    <li><NavLink to='important' className={({isActive}) => (isActive ? styles.active : undefined)}>Important tasks</NavLink></li>
                    <li><NavLink to='completed' className={({isActive}) => (isActive ? styles.active : undefined)}>Completed tasks</NavLink></li>
                    <li><NavLink to='uncompleted' className={({isActive}) => (isActive ? styles.active : undefined)}>Uncompleted tasks</NavLink></li>
                </ul>
            </nav>
            <Dropdown/>
        </header>
    )
}

export default Header