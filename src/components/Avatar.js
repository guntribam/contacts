import React from 'react';

const Avatar = ({avatarURL}) =>
    <div className='contact-avatar' style={{backgroundImage: `url(${avatarURL})`}}></div>

export default Avatar;