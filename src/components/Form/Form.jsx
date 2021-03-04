import style from './Form.module.css';

export default function Form ({ name = '', number = 0, onChangeInput, onSubmitForm }){

        return (
            <>
                <form className={style.form} onSubmit={onSubmitForm}>
                    <label className={style.formLabel}>
                        Name
                    <input
                            name='name'
                            type="text"
                            className={style.formInput}
                            value={name}
                            onChange={onChangeInput}
                            required
                        />
                    </label>
                    <label className={style.formLabel}>
                        Number
                    <input
                            name='number'
                            type="text"
                            className={style.formInput}
                            value={number}
                            onChange={onChangeInput}
                            required
                        />
                    </label>
                    <button type="submit" className={style.formButton}>Add contact</button>
                </form>
                
            </>
        )
    }
