import React from 'react';

import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

class App extends React.Component {

    render() {
        return (
            <div className="ui equal width center aligned padded grid">
                <div className="row">
                    <div className="column">
                        <ToDoForm />
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <ToDoList />
                    </div>
                </div>
            </div>
        );
    };
};

export default App;