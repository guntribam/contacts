import React from 'react';

export default (props) => {
    handleClick = () => props.onDeleteContact()

    return <button className='contact-remove' onClick={handleClick}/>
}