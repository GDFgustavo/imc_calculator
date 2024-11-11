import { useEffect, useState } from 'react';

import styles from './Calculator.module.css';
import InputField from '../InputField'
import Result from '../Result';
import ImcTable from '../ImcTable';


const Calculator = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [imc, setImc] = useState('');

    const calcular = () => {
        const heightNum = parseFloat(height.replace(",", "."));
        const weightNum = parseFloat(weight.replace(",", "."));

        if (height && weight) {
            const imc = weightNum / (heightNum * heightNum)
            setImc(imc.toFixed(2))
        } else {
            setImc('')
        }
    }

    const limpar = () => {
        setHeight('')
        setWeight('')
        setImc('')
    }

    return (
        <>
        <div className={styles.title}>
        <h1>Calcule o seu Imc</h1>
        </div>
        <div className={styles.calculator}>
            <div>
                <InputField
                label='Altura'
                    placeholder='1,70 (m)'
                    maxLength={4}
                    value={height}
                    onChange={e => setHeight(e.target.value.replace(/[^0-9,]/g, ''))}
                >
                </InputField>
                <InputField
                    label='Peso'
                    placeholder='70 (kg)'
                    maxLength={5}
                    value={weight}
                    onChange={e => setWeight(e.target.value.replace(/[^0-9,]/g, ''))}
                >
                </InputField>
                <button type="button" onClick={calcular}>Calcular</button>
                <button type='button' onClick={limpar}>Limpar</button>
                <Result imc={imc}></Result>
            </div>
            <div>
                {imc && (
                    <ImcTable imc={imc}></ImcTable>
                )}
            </div>
        </div>
        </>
    )
}

export default Calculator