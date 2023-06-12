import React, {useEffect} from "react";
import WebFont from 'webfontloader'
import { Button, Container, Row, Col} from "react-bootstrap";
import CV from './docs/CV.pdf'
import { motion } from 'framer-motion'

function Description () {

    useEffect (() => {WebFont.load({google : {families : ['Roboto']}});},[]);

    const bgContainer = { marginTop : '3rem', marginBottom : '3rem'}
    const colText = {fontSize : '1rem', padding : '1rem' , textAlign : 'center' , borderRight : '1px solid black' , paddingRight : '2rem', fontFamily : 'Roboto'}
    const colDownload = {fontFamily : 'Roboto', height: '100%', textAlign : 'center'}


    return (
        <>
            <Container style={bgContainer}>
                <Row className="align-items-center justify-content-center" style={{height: '100%'}}>
                    <Col xs={12} md={6} lg={8} style={colText}><br/>
                    <h1 style={{fontSize : '2rem', fontWeight : 'bold', marginBottom : '2rem'}}>About Me</h1>
                    <p>I am a software developer with a junior level of expertise, currently completing my degree in Systems Engineering. With a technical background in programming and a strong passion for software development, I have gained proficiency in various technologies such as C#, React, Object-Oriented Programming (OOP), SCRUM, and API consumption.</p>
                    <p>Throughout my academic journey, I have acquired a solid foundation in computer science principles and have been exposed to various software development methodologies. Additionally, my ongoing studies have provided me with a deeper understanding of complex systems and the ability to analyze and solve intricate problems.</p>
                    <p>While pursuing my degree, I have actively worked on individual projects, allowing me to apply theoretical knowledge to real-world scenarios. This practical experience has further enhanced my skills and given me valuable insights into the software development lifecycle.</p>
                    <p>As I near the completion of my studies, I am excited to embark on a professional career where I can contribute my technical expertise, collaborate with talented teams, and continue expanding my knowledge. I am eager to take on new challenges, embrace innovative technologies, and make a positive impact in the field of software development.</p>
                    </Col>
                    <Col>
                        <Container fluid style={colDownload}>
                            <h2>Download CV</h2>
                            <motion.div whileHover={{scale: [null, 1.4, 1.3]}}>
                            <Button variant="outline-danger" style={{color : 'black', fontWeight : 'bold'}} href={CV} download>Download</Button>
                            </motion.div>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Description;