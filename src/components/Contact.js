import React from 'react';
import Avatar from "./Avatar";
import Details from "./Details";
import RemoveContact from "./RemoveContact";

export default ({ contact }) =>
    <li className='contact-list-item'>
        <Avatar avatarURL={contact.avatarURL} />
        <Details name={contact.name} email={contact.email} />
        <RemoveContact />
    </li>