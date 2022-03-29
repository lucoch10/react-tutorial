import {Navbar, Container, Nav} from "react-bootstrap";

export default function NavMenu({welcomeMsj: {message, userName}}) {
    
    return <>
        <Navbar className="mb-2" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="">React Tutorial</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/counter">Counter</Nav.Link>
                    <Nav.Link href="/pokedex">Pokedex</Nav.Link>
                </Nav>
                <span className="text-white">{message} {userName}</span>
            </Container>
        </Navbar>
    </>
}