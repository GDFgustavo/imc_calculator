import styles from './ImcTable.module.css'

const ImcTable = ({imc}) => {
    return (
        <div className={styles.imcTable}>
            <table>
                <thead>
                    <tr>
                        <th>Imc</th>
                        <th>Classificação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={imc !== '' && imc < 18.5 ? styles.active : ''}>
                        <td>Menor que 18,5</td>
                        <td>Magreza</td>
                    </tr>
                    <tr className={imc !== '' && imc >= 18.5 && imc < 24.9 ? styles.active : ''}>
                        <td>Entre 18,5 e 24,9</td>
                        <td>Normal</td>
                    </tr>
                    <tr className={imc !== '' && imc >= 25.0 && imc < 29.9 ? styles.active : ''}>
                        <td>Entre 25,0 e 29,9</td>
                        <td>Sobrepeso</td>
                    </tr>
                    <tr className={imc !== '' && imc >= 30.0 && imc < 39.9 ? styles.active : ''}>
                        <td>Entre 30,0 e 39,9</td>
                        <td>Obesidade</td>
                    </tr>
                    <tr className={imc !== '' && imc >= 40.0 ? styles.active : ''}>
                        <td>Maior que 40,0</td>
                        <td>Obesidade Grave</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ImcTable