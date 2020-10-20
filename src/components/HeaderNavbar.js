import React from 'react';
import { Nav, Navbar, NavDropdown, Modal, Form, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from '../assets/images/logo/als_white.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Icons from './Icons'
import { connect } from 'react-redux'
import { userActions } from '../redux/actions';

function LoginModal(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>ALShop</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.alert.message &&
          <div className={`alert ${props.alert.type}`}>{props.alert.message}</div>
        }
        <Form.Group controlId="alshopusername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            name="username"
            type="text"
            onChange={props.handleInput}
            placeholder="Masukkan Username"
            autoComplete="off" />
        </Form.Group>
        <Form.Group controlId="alshoppassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            onChange={props.handleInput}
            placeholder="Masukkan Password"
            autoComplete="off" />
        </Form.Group>
        <span>Tidak punya akun? Daftar sekarang!</span>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={props.handleSubmit}>
          Masuk
        </Button>
        <Button variant="secondary" onClick={props.handleClose}>
          Tutup
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

const ConnectedLoginModal = connect(function mapStateToProps(state) {
    const { alert, authentication } = state
    return {
        alert,
        authentication
    }
})(LoginModal)

class HeaderNavbar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      login: false,
      username: "",
      password: "",
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmitButton = this.handleSubmitButton.bind(this)
  }

  handleModalChange = () => {
    this.setState({ login: !this.state.login })
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleSubmitButton = () => {
    const { username, password } = this.state
    const { dispatch } = this.props
    dispatch(userActions.login(username, password))
  }

  handleLogoutButton = () => {
    const { dispatch } = this.props
    dispatch(userActions.logout())
  }

  render = () => {
    const { authentication } = this.props
    return (
      <Navbar bg="dark" expand="lg" variant="dark" className="font-weight-bold container py-3">
        <Navbar.Brand as={Link} to="/">
            <img src={Logo} width="40" height="40" className="d-inline-block align-top" alt="ALShop Logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
              <Nav.Link as={Link} to="/catalog/pria">PRIA</Nav.Link>
              <Nav.Link as={Link} to="/catalog/wanita">WANITA</Nav.Link>
          </Nav>
            <Nav className="ml-auto">
            { authentication.loggedIn ? (
              <React.Fragment>
                <Nav.Link className="mx-3">
                    <FontAwesomeIcon icon={Icons.ShoppingBag} className="mr-1" />
                    <Badge variant="secondary" className="ml-1">0</Badge>
                </Nav.Link>
                <Nav.Link className="mx-3" as={Link} to="/wishlist">
                    <FontAwesomeIcon icon={Icons.Heart} className="mr-1" />
                    <Badge variant="secondary" className="ml-1">0</Badge>
                </Nav.Link>
                <NavDropdown title={authentication.user.username} id="basic-nav-dropdown">
                    <NavDropdown.Item onClick={this.handleLogoutButton}>Keluar</NavDropdown.Item>
                </NavDropdown>
              </React.Fragment>
            ) : (
                <Nav.Link className="mx-3" onClick={this.handleModalChange}>
                    <span>Login</span>
                </Nav.Link>
            )}
            </Nav>
        </Navbar.Collapse>
        <ConnectedLoginModal
          show={this.state.login}
          handleSubmit={this.handleSubmitButton}
          handleInput={this.handleInputChange}
          handleClose={this.handleModalChange}/>
      </Navbar>
    )
  }
}

function mapStateToProps(state) {
    const { alert, authentication } = state
    return {
        alert,
        authentication
    }
}

export default connect(mapStateToProps)(HeaderNavbar)
