import React from 'react';
import { connect } from 'react-redux';
import { getTasks } from '../actions';
import { Container, Row } from 'reactstrap';

import ToDoItem from './ToDoItem';

class ToDoList extends React.Component {

    componentDidMount() {
        this.props.getTasks();
    }

    renderTaskList() {
        return this.props.taskList.map(({ id, title, description }) => {
            return (
                <ToDoItem 
                    key={id}
                    id={id}
                    title={title}
                    description={description}
                />
            )
        });
    }

    render() {
        return (
            <Container>
                <Row>
                    { this.renderTaskList() }
                </Row>
            </Container>
        );
    }
};

const mapStateToProps = (state) => {
    return { taskList: state.tasks }
}

export default connect(
    mapStateToProps,
    { getTasks }
)(ToDoList);