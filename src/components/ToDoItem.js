import React from 'react';
import { connect } from 'react-redux';
import { editTask, deleteTask } from '../actions';
import {
    Card,
    CardBody,
    CardHeader,
    CardText,
    Input,
    Button
} from 'reactstrap';

class ToDoItem extends React.Component {

    state = { title: "", description: "", isEdit: false };

    onClickDelete = () => this.props.deleteTask(this.props.id);

    onEditClick = (e) => {
        this.setState(prevState => ({ isEdit: !prevState.isEdit }));

        if( e.target.innerHTML === 'Save' ) {
            this.props.editTask({ id: this.props.id, title: this.state.title, description: this.state.description });
        }
    }

    onEditChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div>
                <Card className="m-3" style={{ width: '16rem' }}>
                    <CardHeader>
                        {   !this.state.isEdit ? 
                                this.props.title : 
                                    <Input 
                                        type="text" 
                                        name="title" 
                                        placeholder="title"
                                        onChange={this.onEditChange}
                                    />
                        }
                    </CardHeader>
                    <CardBody>
                        <CardText>
                            {   !this.state.isEdit ? 
                                    this.props.description :
                                        <Input 
                                            type="text"
                                            name="description"
                                            placeholder="description"
                                            onChange={this.onEditChange}
                                        />
                            }
                        </CardText>
                        <Button 
                            color="primary" 
                            className="float-left"
                            onClick={this.onEditClick}
                        >
                            { !this.state.isEdit ? "Edit" : "Save" }
                        </Button>
                        <Button 
                            color="danger" 
                            className="float-right"
                            onClick={this.onClickDelete}
                        >
                            Delete
                        </Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
};

export default connect(
    null,
    { editTask, deleteTask }
)(ToDoItem);