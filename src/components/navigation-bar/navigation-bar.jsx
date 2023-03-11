import {Navbar, Container, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export const NavigationBar = function ({user, onExited}) {
    return (
        <Navbar bg='primary' variant='dark' expand='xs'>
            <Container>
                <Navbar.Brand as={Link} to='/'>NuMuseum</Navbar.Brand>
                <Navbar.Toggle aria-controls='general-menu-options' />
                <Navbar.Collapse id='general-menu-options'>
                    <Nav className='me-auto'>
                        {!user && (
                            <div>
                                <Nav.Link as={Link} to='/login'>Sign In</Nav.Link>
                                <Nav.Link as={Link} to='/registration'>Register</Nav.Link>
                            </div>
                        )}
                        {user && (
                            <div>
                                <Nav.Link as={Link} to='/'>Collection</Nav.Link>
                                <Nav.Link as={Link} to='/profile'>Profile</Nav.Link>
                                <Nav.Link onClick={onExited}>Sign Out</Nav.Link>
                            </div>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};