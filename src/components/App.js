import React from 'react';

import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import NavBar from './NavBar';

class App extends React.Component {

    render() {
        return (
            <div>
                <NavBar />
            </div>
        );
    };
};

export default App;