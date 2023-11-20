import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartwidgetComponent from '../CartWidgetComponent/CartWidgetComponent'
import { Link } from 'react-router-dom';
import '../NavbarComponent/NavbarComponent.css'

const NavBarcomponent = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        axios
            .get('https://dummyjson.com/products/categories')
            .then((res) => {
                setCategories(res.data);
            })
            .catch((error) => console.log(error));
    }, []);
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand><Link to={"/"} className='nombre-tiendita'>Tiendita de JP</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Categorías" id="basic-nav-dropdown">
                            {categories.map((category, index) => {
                                const formattedCategory = category.replace('-', ' ');
                                return (
                                    <NavDropdown.Item key={index} >
                                        <Link to={`/category/${category}`} className='category-text'>
                                            {formattedCategory.charAt(0).toUpperCase() + formattedCategory.slice(1)}
                                        </Link>
                                    </NavDropdown.Item>
                                )
                            })};
                        </NavDropdown>
                    </Nav>
                    <CartwidgetComponent />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default NavBarcomponent;