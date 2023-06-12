import React, {useEffect} from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import WebFont from 'webfontloader'
import iconEmail from './imgs/icons/Emailwbg.png'
import iconGithub from './imgs/icons/Githubwbg.png'
import iconWP from './imgs/icons/Whatsappwbg.png'
import iconLinkedin from './imgs/icons/Linkedinwbg.png'
import { motion } from 'framer-motion'

function Contact () {

    useEffect (() => {WebFont.load({google : {families : ['Roboto']}});},[]);
    const bgContainer = {textAlign : 'center', marginTop : '5rem', fontFamily : 'Roboto'}
    const imageStyle = {width : '4rem'}
    const colStyle = {padding : '1rem'}
    const h3Style = {fontSize : '1rem', padding : '1rem', borderTop : '1px solid black', marginTop : '1rem'}

    return (
        <>
            <Container style={bgContainer}>
                <h1 style={{fontSize : '2rem', fontWeight : 'bold', marginBottom : '2rem'}}>Contact whit Me</h1>
                <Row className="justify-content-center, align-items-center">
                    <Col xs={12} md={6} lg={3} style={colStyle}>
                        <a href = "mailto:arjulian003@gmail.com" style={{textDecoration : 'none', color : 'black'}}>
                            <motion.div whileHover={{scale: [null, 1.4, 1.3]}}>
                            <Image src={iconEmail} alt='' style={imageStyle}/>
                            </motion.div>
                            <h3 style={h3Style}>arjulian003@gmail.com</h3>
                        </a>
                    </Col >
                    <Col xs={12} md={6} lg={3} style={colStyle}> 
                        <a href="https://github.com/AndresAriza27?tab=repositories" style={{textDecoration : 'none', color : 'black'}}>
                            <motion.div whileHover={{scale: [null, 1.4, 1.3]}}>
                            <Image src={iconGithub} alt='' style={imageStyle}/> 
                            </motion.div>
                            <h3 style={h3Style}>AndresAriza27</h3>
                        </a>
                    </Col>
                    <Col xs={12} md={6} lg={3} style={colStyle}>
                        <a href="https://wa.me/+573112374167?text=Hola" style={{textDecoration : 'none', color : 'black'}}>
                            <motion.div whileHover={{scale: [null, 1.4, 1.3]}}>
                            <Image src={iconWP} alt='' style={imageStyle}/>
                            </motion.div>
                            <h3 style={h3Style}>Mensaje de WhatsApp</h3>
                        </a>
                    </Col>
                    <Col xs={12} md={6} lg={3} style={colStyle} >
                        <a href="https://www.linkedin.com/in/andres-ariza27/" style={{textDecoration : 'none', color : 'black'}}>
                            <motion.div whileHover={{scale: [null, 1.4, 1.3]}}>
                            <Image src={iconLinkedin} alt='' style={imageStyle}/>
                            </motion.div>
                            <h3 style={h3Style}>andres-ariza27</h3>
                        </a>
                    </Col>
                </Row>
            </Container>
            <Container fluid style={{backgroundColor : 'black'}}>
                <br/><br/><br/><br/>
            </Container>
        </>
    )
}

export default Contact;