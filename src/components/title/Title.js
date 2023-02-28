import styles from './Title.module.css'
import {useSelector} from "react-redux";

function Title() {
    const {title} = useSelector(state => state.tasks)

    return (
        <h2 className={styles.title}>{title}</h2>
    )
}

export default Title