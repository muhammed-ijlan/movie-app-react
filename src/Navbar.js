import { Navbar, Nav, Container } from "react-bootstrap"

const Topbar = () => {
    return <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Movie App</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </>
}
export default Topbar;