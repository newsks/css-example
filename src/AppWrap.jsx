import React from 'react';

export default function AppWrap() {
    return (
        <div>
          <Navbar>
            <Avatar
                image='https://images.unsplash.com/photo-1687777238205-d7c572cde6cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5NTd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
                name='doo'
                size='100'
            />
            <p>안녕하세요!</p>
          </Navbar>

          <Navbar>
            <p>안녕하세요!</p>
          </Navbar>
        </div>
    );
}

function Navbar({children}) {
  return (<header style={{backgroundColor:'yellow'}}>{children}</header>)
}

function Avatar({image, name, size}) {
    return (
        <div>
            <img 
                src={image}
                alt={`${name}`}
                width={size}
                height={size}
                style={{ borderRadius:'50%'}}
            />
        </div>
    )
}

