import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions';
import uuid from 'uuid';
import {
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

class ToDoForm extends React.Component {

    state = { taskDetails: { title: '', description: '' } };

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState(prevState => {
            const newObj = { ...prevState.taskDetails };
            newObj[name] = value;
            return {
                taskDetails: newObj
            }
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state);
        this.props.addTask( { id: uuid(), ...this.state.taskDetails } );

        this.props.toggle();
    }

    modalToggle = () => {
        this.setState(prevState => {
            return {
                modalOpen: !prevState.modalOpen
            }
        });
    }

    renderModal() {
        return (
            <Modal isOpen={this.props.isModalOpen} toggle={this.props.toggle}>
                <ModalHeader toggle={this.props.toggle}>Task details</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Label for="title">Task Title: </Label>
                            <Input 
                                type="text" 
                                name="title" 
                                id="title" 
                                style={{ width: '300px' }}
                                onChange={this.handleInputChange}
                            />
                        </FormGroup>
                        <FormGroup style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Label for="description">Task Description: </Label>
                            <Input 
                                type="text" 
                                name="description" 
                                id="description" 
                                style={{ width: '300px' }} 
                                onChange={this.handleInputChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Button 
                                outline 
                                color="secondary" 
                                className="float-right" 
                                type="submit"
                                onClick={this.handleSubmit}
                            >
                                Add
                            </Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        );
    };

    render() {
        return (
            <div>
                { this.renderModal() }
            </div>
        );
    };
};

export default connect(
    null, 
    { addTask }
)(ToDoForm);