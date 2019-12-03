import React from 'react';
import { connect } from 'react-redux';
import { editTask, deleteTask } from '../actions';
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    Button
} from 'reactstrap';

const ToDoItem = (props) => {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle>{props.title}</CardTitle>
                    <CardText>{props.description}</CardText>
                </CardBody>
                <Button>Edit</Button>
                <Button>Delete</Button>
            </Card>
        </div>
    );
};

export default connect(
    null,
    { editTask, deleteTask }
)(ToDoItem);