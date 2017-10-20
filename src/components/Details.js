import React from 'react';

const Details = ({name, email}) =>
    <div className='contact-details'>
        <p>{name}</p>
        <p>{email}</p>
    </div>

export default Details;