import { useTranslation } from 'react-i18next'
import '../styles/Tecnologies.css'

import iconReact from '../imgs/icons/iconReact.png'
import iconHtml from '../imgs/icons/iconHtml.png'
import iconCSS from '../imgs/icons/iconCss.png'
import iconJS from '../imgs/icons/iconJs.png'
import iconC from '../imgs/icons/iconCsharp.png'
import iconScrum from '../imgs/icons/iconScrum.png'
import iconKanban from '../imgs/icons/iconKanban.png'
import iconApi from '../imgs/icons/iconApi.png'
import iconPOO from '../imgs/icons/iconPOO.png'

export function Tecnologies () {

    const [t,i18n] = useTranslation("global");
    
    return ( 
        <section className="tecnologies">
            <h3>{t("tecnologies.title")}</h3>
            
            <div className="tecno">
                <div className="division mvlView">
                    <div className="secTec">
                        <div className="conjunt mvlView">
                            <div className="tecGroup">
                                <div className="tecnology">
                                    <img src={iconHtml} alt="" />
                                    <span>HTML</span>
                                </div>
                                <div className="tecnology">
                                    <img id='icoCss' src={iconCSS} alt="" />
                                    <span>CSS</span>
                                </div>
                                <div className="tecnology">
                                    <img id='icoCss' src={iconJS} alt="" />
                                    <span>JavaScript</span>
                                </div>
                            </div>
                            <span>{t("tecnologies.webdevelopment")}</span>
                        </div>
                        <div className="conjunt mvlView">
                            <div className="tecGroup">
                                <div className="tecnology">
                                    <img src={iconReact} alt="" />
                                    <span>React</span>
                                </div>
                            </div>
                            <span>Frameworks</span>
                        </div>  
                    </div>
                    <span className='spanDivision'>FrontEnd</span>
                </div>
                <div className="division mvlView">
                    <div className="secTec">
                        <div className="conjunt mvlView">
                            <div className="tecGroup">
                                <div className="tecnology">
                                    <img src={iconC} alt="" />
                                    <span>C#</span>
                                </div>
                            </div>
                            <span>{t("tecnologies.languages")}</span>
                        </div>  
                    </div>
                    <span className='spanDivision'>BackEnd</span>
                </div>
                <div id='others' className="division mvlView">
                    <div className="secTec">
                        <div className="conjunt mvlView">
                            <div className="tecGroup">
                                <div className="tecnology">
                                    <img src={iconScrum} alt="" />
                                    <span>SCRUM</span>
                                </div>
                                <div className="tecnology">
                                    <img id='icoCss' src={iconKanban} alt="" />
                                    <span>KANBAN</span>
                                </div>
                            </div>
                            <span>{t("tecnologies.agilemethodologies")}</span>
                        </div>
                        <div className="conjunt mvlView">
                            <div className="tecGroup">
                                <div className="tecnology">
                                    <img src={iconApi} alt="" />
                                    <span>APIS</span>
                                </div>
                                <div className="tecnology">
                                    <img id='icoCss' src={iconPOO} alt="" />
                                    <span>POO</span>
                                </div>
                            </div>
                            <span>{t("tecnologies.skills")}</span>
                        </div>
                    </div>
                    <span className='spanDivision'>{t("tecnologies.otherskills")}</span>
                </div>
            </div>
            
        </section>
    )
}