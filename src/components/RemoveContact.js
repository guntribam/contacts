import React from 'react';

const RemoveContact = ({contact, onDeleteContact}) =>
    <button className='contact-remove' onClick={() => onDeleteContact(contact)}/>

export default RemoveContact;