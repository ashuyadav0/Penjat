import React from "react";

function Character({char, visible}){
    return (
        <span style={{fontSize: '14pt'}}>{visible ? char : '_'}</span>
    );
}
export default Character;