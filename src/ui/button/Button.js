import styles from './Button.module.css'

function Button(props) {
    return(
        <button onClick={props.onClickHandler} className={styles.btn}>
            {props.children}
        </button>
    )
}

export default Button