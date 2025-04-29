import Form from '../../components/Form/Form'
import './AppSign.css'

export default function AppSign() {
    return (
        <section className='sign'>
            <div className="sign-container">
                <div className="sign-left">
                    <div className="sign-text">Запишитесь на курс со&nbsp;скидкой 10%</div>
                    <p className="sign-info">Акция действительна до&nbsp;10&nbsp;марта 2022&nbsp;года</p>
                </div>
                <Form />
            </div>
            
        </section>
    )
}