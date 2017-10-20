import React from 'react';
import Contact from './Contact';
import PropTypes from 'prop-types';
import escapeStringRegexp from 'escape-string-regexp';


class ListContacts extends React.Component {
    static propTypes = {
        contacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired
    }

    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState({query: query.trim()})
        this.setState({showingContacts: this.filterContacts(this.props.contacts, query)})
    }

    filterContacts = (contacts, query) =>
        contacts.filter(contact => new RegExp(escapeStringRegexp(query), 'i').test(contact.name))


    clearQuery = (event) => {
        event.preventDefault();
        this.updateQuery('')
    }

    render() {
        const {contacts, onDeleteContact} = this.props;
        const {query} = this.state;

        const showingContacts = query ? this.filterContacts(contacts, query) : contacts;

        return <div className='list-contacts'>
            <div className='list-contacts-top'>
                <input
                    className='search-contacts'
                    type='text'
                    placeholder='Search contacts'
                    value={query}
                    onChange={(e) => this.updateQuery(e.target.value)}
                />
                <a
                    href='#create'
                    onClick={this.props.onNavigate}
                    className='add-contact'
                >Add Contact</a>
            </div>

            {showingContacts.length !== contacts.length && (
                <div className='showing-contacts'>
                    <span>Now showing {showingContacts.length} of {contacts.length}</span>
                    <button onClick={this.clearQuery}>Show All</button>
                </div>
            )}

            <ol className='contact-list'>
                {showingContacts.map(contact => <Contact key={contact.id} contact={contact}
                                                         onDeleteContact={onDeleteContact}/>)}
            </ol>
        </div>
    }
}

export default ListContacts;