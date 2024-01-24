import { useRef ,useState } from 'react';
import Logo from '../imgs/Logo.png'
import '../styles/Header.css'
import { useTranslation } from 'react-i18next'
import iconBars from '../imgs/IconBars.png'
import iconX from '../imgs/IconX.png'

export function Header () {

    const [t,i18n] = useTranslation("global");
    const dayNight = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADgElEQVR4nO2ZW2tTQRDHTxW/gRbv4g0UFfwA+uKl+i4igs9Sk9m0VVrBlyL6IvgBLPqgycwpRvHFV5uZNNYLLYJWqh9B7MXbk2Ib2ZPExvbkdJPsnhDpH/ahdM/s/s7M7JmdeN6q/mMByiuF/MJrdymSoh4u1+hOj3XqlwXE+bYF6U6PdQLJZLAO8uu2BFHZ0Q2K+F0JQj4ksrzRxTpOQVSzEEAyAchvtEttgwRhEhwOMm4aTkAyabqXZSD1GACUgiIeNUtYeV9+w+NOIcJc2pvJb/KalLa5mLC1w0TZzomlb+Uy8fpGbelnTd5wty1PRBvm/ur/pTK540A8BMhTQPw9GMhTCvkO+Plj1XMBZaBlEP+8TeS+iuFEmvcAilQSvNYI5gyP7F5McO6r5dVu1xBLBRk5CsizK0EswvBsivhIlM34IdL5nYAybQpRDaOfbfnHriJd49QLUS4pFsDnC16rPaEFxCcahVA+K88CBNiosBXxvYY8gZKyFU7KRhkEJB9b6IlCyIlYMJq4dLJC+dEKiNr7CymHaoFUTzYGsQzRmtByCFFPYRopQLkbZ2I7U9KXk63yhHUBca5tPVGtFMleRTxn0xNAvA9QBgF5DFA+KZTfgPzQc61S0SjTzUJcGs5vUyiPAzuV4554XlfIg4PFNU42XyrjZUCHi/479aCwvZnaKUm5Uwrla0i+XXUCsGxzKFeM5kVAKJ9PK+JfIRAcD0TEVdcUIoEjO4D4W9jJl6TcGWcQlW6HreupInla6whPuDrVdE/LJkQP8uGoD+rFoYl1rkDeBr2tcoI3A6GliG9HgST955u9uNXIF1s3nqNAAPPnvDjVaNmhSGaiQaTgFYsdJrbOZrNrFYofO4SWSecFQkqdUFvE/dpe7BAlEIPuC+ryRFI1PVMsdgDJtXIF8Dl2iDLIig099dczPAY+n++7/2yLflYfBDqH9F2kek5dG7BVxQLyTVMQZTZuGC9u8z6RSvNBHRI2IIB4vmdY9scOUVFQ7doAQcMy39XNrpcKu+rpG6vQwXOV3HEKsVI3UGXyXfp0atATP/VPGc4hgo2WF42ck8l31esZIPmi27bOIYy7gdVhRvJoxQMAeQGIn6gMbzXaiP5hssnvhFk3cIkS/sgBQL6uL1alMiboCcwEIUp8K4lyqL6NkLzU1W6ziW0SWm0hsNENXJXX3voDbrIYhI1ME4MAAAAASUVORK5CYII=";
    
    const [value, setValue] = useState ('');
    const handleChange = (event) => {
        setValue(event.target.value);
        i18n.changeLanguage(event.target.value);
    };
    const [open, setOpen] = useState (false);
    const navRef = useRef();
    const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
    }
    
    return (
        <header className='header'>
            <div className="Navbar">
                <div className="logoHeader">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="enlaces">
                    <nav ref={navRef} className='nav-menu'>
                        <ul>
                            {/* <li>{t("header.home")}</li>
                            <li>{t("header.about")}</li>
                            <li>{t("header.contact")}</li> */}
                            <li>{t("header.language")}
                                <select value={value} onChange={handleChange}>
                                    <option value="en">English</option>
                                    <option value="es">Español</option>
                                </select>
                            </li>
                        </ul>
                        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                            <img src={iconX} alt="" />
                        </button>
                    </nav>
                </div>
                <button className='nav-btn' onClick={showNavbar}>
                    <img src={iconBars} alt="" />
                </button>
            </div>
        </header>
    )
}