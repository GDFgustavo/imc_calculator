import styles from './InputField.module.css';

const InputField = ({ label, placeholder, maxLength, value, onChange }) => {

    return (
        <div className={styles.inputField}>
            <form>
                <div>
                    <label>{label}</label>
                    <input
                        type='text'
                        placeholder={placeholder}
                        maxLength={maxLength}
                        value={value}
                        onChange={onChange}
                    />
                </div>
            </form>
        </div>
    )
}


export default InputField