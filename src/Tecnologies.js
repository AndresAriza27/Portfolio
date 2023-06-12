import React, {useEffect} from "react";
import WebFont from 'webfontloader'
import { Row , Card, Col, Container } from "react-bootstrap";
import iconC from './imgs/icons/Cwbg.png';
import iconReact from './imgs/icons/Reactwbg.png';
import iconScrum from './imgs/icons/Scrumwbg.png';
import { motion } from 'framer-motion'

function Tecnologies () {
    useEffect (() => {WebFont.load({google : {families : ['Roboto']}});},[]);

    const stAllContainer = {backgroundColor : '#1000', marginTop : '4rem', marginBottom : '2rem'}
    const cdBgSt = {backgroundColor : 'rgb(222, 0, 153, 0)', height: '100%'}
    const cbStyle = {borderTop : '1px solid black', fontFamily : 'Roboto'}
    const titleStyle = {fontWeight : 'bold'}
    return(
        <>
            <Container style={stAllContainer}>
                <Row className="align-items-center justify-content-center" style={{ height: '100%' }}>
                    <Col xs={12} md={6} lg={4} className="justify-content-center text-center" >
                        <Card style={cdBgSt} className="align-items-center justify-content-center border-0">
                            <motion.div initial={{y:-50, opacity: 0}} animate={{y:0, opacity:1}} transition={{duration : 1}}>
                                <Card.Img variant="top" src={iconC} style={{width : '150px', marginTop : '1rem', marginBottom : '1rem'}}/>
                            </motion.div>
                            <motion.div initial={{opacity: 0}} animate={{opacity:1}} transition={{duration : 1}}>
                            <Card.Body style={cbStyle}>
                                <Card.Title style={titleStyle}>C#</Card.Title>
                                <Card.Text>Proficient in C# language with a focus on .NET development for effective implementation of OOP principles and API implementation.</Card.Text>
                            </Card.Body>
                            </motion.div>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={4} className="justify-content-center text-center" >
                        <Card style={cdBgSt} className="align-items-center justify-content-center border-0">
                            <motion.div initial={{y:-50, opacity: 0}} animate={{y:0, opacity:1}} transition={{duration : 1}}>
                                <Card.Img variant="top" src={iconReact} style={{width : '150px', marginTop : '1rem', marginBottom : '1rem'}}/>
                            </motion.div>
                            <motion.div initial={{opacity: 0}} animate={{opacity:1}} transition={{duration : 1}}>
                            <Card.Body style={cbStyle}>
                                <Card.Title style={titleStyle}>REACT</Card.Title>
                                <Card.Text>Basic React handling, incorporating HTML, CSS, and JS, focus on web development and web applications.</Card.Text>
                            </Card.Body>
                            </motion.div>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={4} className="justify-content-center text-center" >
                        <Card style={cdBgSt} className="align-items-center justify-content-center border-0">
                        <motion.div initial={{y:-50, opacity: 0}} animate={{y:0, opacity:1}} transition={{duration : 1}}>
                            <Card.Img variant="top" src={iconScrum} style={{width : '150px', marginTop : '1rem', marginBottom : '1rem'}}/>
                        </motion.div>
                        <motion.div initial={{opacity: 0}} animate={{opacity:1}} transition={{duration : 1}}>
                            <Card.Body style={cbStyle}>
                                <Card.Title style={titleStyle}>AGILE METHODOLOGIES</Card.Title>
                                <Card.Text>I possess a solid understanding and expertise in Scrum and Kanban methodologies. These two widely adopted frameworks are instrumental in managing and organizing projects effectively.</Card.Text>
                            </Card.Body>
                        </motion.div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Tecnologies;