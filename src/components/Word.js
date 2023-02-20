import React, { useState } from "react";
import Character from "./Character";

function Word({word, incrementarError, disabled}){
    const [typed, setTyped] = useState([]);
    const splittedWord = word.split('');
    const keyDown = (event) => {
        event.preventDefault();
        if(/^[a-z]$/i.test(event.key){
            const lletra = event.key.toLowerCase();
            if(typed.includes(lletra))
            return incrementarError();
            if(!splittedWord.includes(lletra))
            return incrementarError();
            setTyped[...typed, lletra]);

            let notwin = false;
            splittedWord.forEach(char =>){
                if(!typed.includes(char))
                notwin = true;
            });
            if(!notwin) winnerWinnerChikenDiner();
        }
        
    }
    return(
        <><p>
            {splittedWord.map(char => { Character char = { char }; visible ={typed.includes{char}}/> })};
        </p><input type="text" onKeyDown={} autoFocus /></>
    );
}