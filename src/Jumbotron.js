import { Container, Row, Col, Image } from 'react-bootstrap';
import Foto from './imgs/fotoc.jpg'
import { motion } from 'framer-motion'

function App() {

  const bgColor = { backgroundColor : '#111111' , padding : '2rem'}
  const darkDivBgStyle = { backgroundColor : 'rgba(0, 0, 0, 0)' , padding : '15px'}
  const h1StyleLine = {borderBottom: '3px solid white' , paddingBottom: '10px'}
  const imgRoundedStyle = {borderRadius : '50%' , border : '3px solid white' , width : '25rem'}

  //ANIMACIONES

  return (
    <>
    <Container fluid style={bgColor}>
      <Row className="align-items-center justify-content-center" style={{ height: '100%' }} >
        <Col xs={12} md={6} lg={4} >
        <motion.div initial={{ y: -100}} transition={{duration : '1'}} animate={{ y: 0 }}>
            <Container className="align-items-center justify-content-right">
                <Image src={Foto} alt='' fluid style={imgRoundedStyle}/>
            </Container>
        </motion.div>
        </Col>
        <Col xs={12} md={6} lg={4} >
          <Container style={darkDivBgStyle} >
            <br></br><h1 className="text-uppercase text-white text-center display-1" style={h1StyleLine}>Julian Andres Ariza Perez</h1>
            <h2 className="text-uppercase text-white text-center ">Software Developer</h2>
          </Container>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default App;
