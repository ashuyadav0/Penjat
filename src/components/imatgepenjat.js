import React from 'react';

function ImatgePenjat({errors}){
    const url = `img/${errors}.png`;
    
    return (
        <img src={url}/>
    );
}

export default ImatgePenjat;