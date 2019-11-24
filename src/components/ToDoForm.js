import React from 'react';
import { Field, reduxForm } from 'redux-form';

const ToDoForm = (props) => {

    const { handleSubmit } = props;

    return (
        <div className="six wide column">
            <form onSubmit={handleSubmit}> 
                    
            </form>
        </div>
    );
};

export default ToDoForm;