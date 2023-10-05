import {Container, Row, Col} from 'react-bootstrap'

const HeroComponent = () => {
  return  (
    <div className='hero min-vh-100 w-100 p-3 mx-auto text-center d-flex justify-content-center align-items-center text-white'>
    <Container>
        <Row>
            <Col className='text-white text-center'>
            <h1>Welcome To XI PPLG 3</h1>
            <p className='text-white-50'>GET > SET > GROW</p>
            </Col>
        </Row>
    </Container>
  </div>
  )
}

export default HeroComponent