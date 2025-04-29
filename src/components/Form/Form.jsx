import classes from './Form.module.css'

export default function Form() {
    return (
        <form className={classes.form}>
            <input className={classes.input} type="text" placeholder="Имя" />
            <input className={classes.input} type="tel" placeholder="Телефон" />
            <input className={classes.input} type="email" placeholder="E-mail" />
            <button className={classes.button} type="submit">Оформить заявку</button>
        </form>
    )
}