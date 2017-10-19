import React from 'react';
import Contact from './Contact';

export default ({contacts, onDeleteContact}) => {
    return <ol className='contact-list'>
        {contacts.map(contact => <Contact key={contact.id} contact={contact} onDeleteContact={onDeleteContact}/>)}
    </ol>
}
