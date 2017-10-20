import React from 'react';
import ListContacts from './components/ListContacts';
import CreateContact from "./components/CreateContact";
import * as ContactsAPI from './utils/ContactsAPI';


export default class App extends React.Component {
    state = {
        screen: 'list', //list, create
        contacts: []
    }

    componentDidMount() {
        ContactsAPI.getAll().then(contacts => this.setState({contacts}))
    }

    removeContact = (contact) => {
        this.setState((state) => ({
            contacts: state.contacts.filter(c => c.id !== contact.id)
        }))
        ContactsAPI.remove(contact)
    }

    render() {
        return <div>
            {this.state.screen === 'list' && (
                <ListContacts
                    onDeleteContact={this.removeContact}
                    contacts={this.state.contacts}
                    onNavigate={() => this.setState({screen:'create'})}/>
            )}
            {this.state.screen === 'create' && (
                <CreateContact/>
            )}
        </div>
    }

}