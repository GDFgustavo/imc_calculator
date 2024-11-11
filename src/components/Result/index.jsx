import styles from './Result.module.css'

const Result = ({ imc }) => {
    return (
        <div className={styles.result}>
            <h2>Resultado:
                <span className={styles.imc}>{imc}</span>
            </h2>
        </div>
    )
}

export default Result