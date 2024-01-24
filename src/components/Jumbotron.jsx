import { useTranslation } from 'react-i18next'
import Foto from '../imgs/FotoSinFondoMv.png'
import '../styles/Jumbotron.css'

export function Jumbotron () {

    const [t,i18n] = useTranslation("global");

    return (
        <div className="jumbotron">
            <div className="foto">
                <img src={Foto} alt="" />
            </div>
            <div className="texto">
                <h1>{t("jumbotron.name")}</h1>
                <h3>{t("jumbotron.subname")}</h3>
            </div>
        </div>
    )
}