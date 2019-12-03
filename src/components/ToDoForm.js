import React from 'react';
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

const ToDoForm = (props) => {

    return (
        <div>
            <Modal isOpen={props.isModalOpen} toggle={props.toggle}>
                <ModalHeader toggle={props.toggle}>Task details</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Label for="title">Task Title: </Label>
                            <Input 
                                type="text" 
                                name="title" 
                                id="title" 
                                style={{ width: '300px' }}
                            />
                        </FormGroup>
                        <FormGroup style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Label for="description">Task Description: </Label>
                            <Input 
                                type="text" 
                                name="description" 
                                id="description" 
                                style={{ width: '300px' }} 
                            />
                        </FormGroup>
                        <FormGroup>
                            <Button 
                                outline 
                                color="secondary" 
                                className="float-right" 
                                type="submit"
                            >
                                Add
                            </Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
};

export default ToDoForm;