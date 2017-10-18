import React from 'react';

const ContactList = (props) =>
    <ul>
        {props.contacts.map((person, index) => <li key={index}>{person.name}</li>)}
    </ul>

export default () =>
    <div className="App">
        <ContactList contacts={[
            {name:'A'},
            {name:'B'},
            {name:'C'}
        ]}/>
        <ContactList contacts={[
            {name:'D'},
            {name:'E'},
            {name:'F'}
        ]}/>
    </div>

