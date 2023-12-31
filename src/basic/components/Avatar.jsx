import React from 'react';

export default function avatar({image, isNew}) {
    return (
    <div className='avatar'>
       <img className='photo' src={image} alt="avatar" /> 
       {isNew && <span className='new'>NEW</span>}
    </div>
)}

