import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavigationBar.css'
import Logo from '../../assets/logo.png'
const NavigationBar = () => {
  return (
    <div className='Navigation'>
      <Navbar expand="lg" style={{
        backgroundColor: '#B22222',
        height: "70px"
      }}>
        <Container>
          <Navbar.Brand href='/' className="me-auto ms-md-5 Brand">
          <img src={Logo} alt="Logo" width="80px" />
          </Navbar.Brand>
          <Nav className='me-md-5'>
            <Nav.Link className='NavLink' href='#something'>Something</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavigationBar