import { useTranslation } from 'react-i18next'
import '../styles/Information.css'

import fotoAbout from '../imgs/FotoAbout.png'
import iconDownload from '../imgs/icons/iconDownload.png'
import hv from '../docs/HV.pdf'
import cv from '../docs/CV.pdf'

export function Information () {

    const [t,i18n] = useTranslation("global");

    return (
        <div className="information">
            <div className="about">
                <div className="aboutC">
                    <div className="aboutT">
                        <h3>{t("information.aboutme")}</h3>
                        <p>{t("information.aboutmep")}</p>
                        <div className="btns">
                            <div className="btn">
                                <span>Download Curriculum - English</span>
                                <button>
                                    <a href={cv} download="Curriculum_JulianAriza"><img src={iconDownload} alt="" /></a>
                                </button>
                            </div>
                            <div className="btn">
                                <span>Descargar Hoja de Vida - Español</span>
                                <button>
                                    <a href={hv} download="HojaDeVida_JulianAriza"><img src={iconDownload} alt="" /></a>
                                </button> 
                            </div>    
                        </div>
                    </div>
                    <div className="aboutImg">
                        <img src={fotoAbout} alt="" />
                    </div>
                </div>
            </div>
            

        </div>
    )
}