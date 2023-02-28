import styles from './ProgressBar.module.css'

function ProgressBar({allTasks, tasksCompleted}) {
    const barFill = Math.round((tasksCompleted / allTasks) * 100) + '%'

    return (
        <div className={styles.progressBar}>
            <div className={styles['progressBar-inner']}>
                <div className={styles['progressBar-fill']} style={{width: barFill}}></div>
            </div>
        </div>
    )
}

export default ProgressBar