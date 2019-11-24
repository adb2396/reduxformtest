import React from 'react';

import ToDoForm from './ToDoForm';

class App extends React.Component {

    render() {
        return (
            <div className="ui grid">
                <ToDoForm />
            </div>
        );
    };
};

export default App;