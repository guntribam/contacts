import React from 'react';
import Contact from './Contact';

export default ({contacts}) => {
    return <ol className='contact-list'>
        {contacts.map(contact => <Contact key={contact.id} contact={contact}/>)}
    </ol>
}
