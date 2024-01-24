import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import emaijs from '@emailjs/browser';
import '../styles/Contact.css'

import iconEmail from '../imgs/icons/iconEmail.png'
import iconWp from '../imgs/icons/iconWhatsapp.png'
import iconLd from '../imgs/icons/iconLinkedin.png'
import iconGh from '../imgs/icons/iconGithub.png'

export function Contact () {

    const [t,i18n] = useTranslation("global");

    const refForm = useRef();
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(refForm.current);
        const serviceId = "service_56laxbe"
        const templateId = "template_ebkjdhi"
        const apiKey = "QYxYppf4feF4phzze"

        emaijs.sendForm(serviceId, templateId, refForm.current, apiKey)
        .then( result => console.log(result.text))
        .catch( error => console.error(error))
    }

    return (
        <div className="contact">
            <h3>{t("contact.title")}</h3>
            <div className="conContactc">
                <div className="otherContact">
                    <div className="itemContact">
                        <a href="mailto:arjulian003@gmail.com">
                            <img src={iconEmail} alt="" />
                            <span>arjulian003@gmail.com</span>
                        </a>
                    </div>
                    <div className="itemContact">
                        <a href="https://github.com/AndresAriza27?tab=repositories">
                            <img src={iconGh} alt="" />
                            <span>AndresAriza27</span>
                        </a>
                    </div>
                    <div className="itemContact">
                        <a href="https://wa.me/+573112374167?text=Hola">
                            <img src={iconWp} alt="" />
                            <span>+57 3112374167</span>
                        </a>
                    </div>
                    <div className="itemContact" id='lik'>
                        <a href="https://www.linkedin.com/in/andres-ariza27/">
                            <img src={iconLd} alt="" />
                            <span>andres-ariza27</span>
                        </a>
                    </div>
                </div>
                <div className="form">
                    <form ref={refForm} action='' onSubmit={handleSubmit}>
                        <div className="headerContact">
                            <span className='contacMeSpan'>{t("contact.contactus")}</span>
                            <p className='contacMeP'>{t("contact.contactp")}</p>
                        </div>
                        <fieldset  className='fieldSet' id='fieldName'>
                            <label className='symbolRequired label' id='labelName' htmlFor="">{t("contact.name")}</label>
                            <input name='username' type="text" placeholder='Ej: Rafael Lopez' required />
                        </fieldset>
                        <fieldset  className='fieldSet' id='fieldEmail'>
                            <label className='symbolRequired label' id='labelEmail' name='email'>Email</label>
                            <input name='email' type="email" id="email" placeholder='Ej: rafaellopez@gmail.com' required />
                        </fieldset>
                        <fieldset  className='fieldSet' id='fieldMessage'>
                            <label className='symbolRequired label' id='labelMessage' name='message'>{t("contact.message")}</label>
                            <textarea maxLength="500" placeholder={t("contact.textarea")} name="message" id="areaMessage" cols="30" rows="10"></textarea>
                        </fieldset>
                        <button className='btnSend'>{t("contact.send")}</button>
                    </form>
                </div>
            </div>
            

        </div>
    )
}