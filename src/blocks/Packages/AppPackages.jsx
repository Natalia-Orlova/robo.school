import './AppPackages.css'
import {packages} from '../../data'
import Package from '../../components/Package/Package'

export default function AppPackages() {
    return (
        <section className='packages'>
            <div className="packages-title">Выберите нужный пакет</div>
            <div className="packages-list">
                {packages.map((item) => (
                    <Package key={item.type} {...item} />
                ))}
            </div>
        </section>
    )
}