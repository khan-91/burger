import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavigationBar.css';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStatetoProps = state => {
  return {
    token: state.token,
  }
}
const NavigationBar = props => {
  let links = null;
  if (props.token === null) {
    links = (
      <Nav className='me-md-1 flex-row gap-3'>
        <Nav.Link as={Link} to='/login'>Login</Nav.Link>
      </Nav>
    )
  }
  else {
  links = (
    <Nav className='me-md-1 flex-row gap-3'>
      <Nav.Link as={Link} to='/'>Burger Builder</Nav.Link>
      <Nav.Link as={Link} to='/order'>Order</Nav.Link>
    </Nav>
  );
}

  return (
    <div className='Navigation'>
      <Navbar expand="lg" style={{
        backgroundColor: '#B22222',
        height: "70px"
      }}>
        <Container>
          <Navbar.Brand href='/' className="me-auto ms-md-1">
            <img src={Logo} alt="Logo" width="80px" />
          </Navbar.Brand>
          {links}
        </Container>
      </Navbar>
    </div>
  );
};

export default connect(mapStatetoProps)(NavigationBar);
