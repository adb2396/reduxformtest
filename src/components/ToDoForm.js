import React from 'react';
import { Field, reduxForm } from 'redux-form';

const ToDoForm = (props) => {

    const { handleSubmit } = props;

    return (
        <div className="fourteen wide column" style={{ marginLeft: "2%", backgroundColor: "rgba(63,155,191, 0.5)" }}>
            <form className="ui form" onSubmit={handleSubmit}> 
                <div className="two fields">
                    <div className="field">
                        <label htmlFor="taskTitle">Task title</label>
                        <Field name="taskTitle" component="input" type="text" />
                    </div>
                    <div className="field">
                        <label htmlFor="taskDescription">Task description</label>
                        <Field name="taskDescription" component="input" type="text" />
                    </div>
                    <button className="ui button secondary" type="submit">Add task</button>
                </div>
            </form>
        </div>
    );
};

const createReduxForm = reduxForm({ form: 'ToDoForm' });

export default createReduxForm(ToDoForm);