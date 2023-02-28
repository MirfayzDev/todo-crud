import {Link} from "react-router-dom";

import styles from './ErrorUi.module.css'

function ErrorUi() {
    return (
        <div className={styles.container}>
            <p>404 Error. Page not found!</p>
            <button className={styles.btn}><Link to={'/'}>Back to our site</Link></button>
        </div>
    )
}

export default ErrorUi