import React from 'react';

import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import NavBar from './NavBar';

class App extends React.Component {

    state = { isModal: false };

    onToggleModal = () => {
        this.setState(prevState => ({ isModal: !prevState.isModal }));
    }

    render() {
        return (
            <div>
                <NavBar toggleModal={this.onToggleModal} />
                <ToDoForm 
                    isModalOpen={this.state.isModal}
                    toggle={this.onToggleModal}
                />
                <ToDoList />
            </div>
        );
    };
};

export default App;