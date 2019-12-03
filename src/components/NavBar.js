import React, { useState } from 'react';
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button
} from 'reactstrap';
import ToDoForm from './ToDoForm';

const NavBar = () => {
    const [ isOpen, setIsOpen ] = useState(false);
    const [ isModal, setIsModal ] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const toggleModal = () => setIsModal(!isModal);

    return (
        <div>
            <Navbar color="dark" dark expand="md"> 
                <Container>
                    <NavbarBrand href="/" >Todo List</NavbarBrand>
                    <Button onClick={toggleModal}>Add Task</Button>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar >
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/adb2396/reduxformtest">GitHub</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
            <ToDoForm 
                isModalOpen={isModal}
                toggle={toggleModal}
            />
        </div>
    );
}

export default NavBar;