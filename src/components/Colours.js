import './Colours.css'
import { useState } from 'react';

function Colours({colour, colourChangeHandler}){

    console.log(`I'm getting rerendered - value is ${colour}`);
    return(
        <div className='Colours'>
            <label className='container'>
                <input 
                readOnly
                type='radio' 
                name='colour' 
                value={0} 
                onClick={(e)=>{
                    colourChangeHandler(parseInt(e.target.value));
                }}
                checked = {colour === 0}
                />
                <span className='rb1'></span>
            </label>
            <label className='container'>
                <input 
                readOnly
                type='radio' 
                name='colour' 
                value={1} 
                onClick={(e)=>{
                    colourChangeHandler(parseInt(e.target.value));
                }}
                checked = {colour === 1}
                />
                <span className='rb2'></span>
            </label>
            <label className='container'>
                <input 
                readOnly
                type='radio' 
                name='colour' 
                value={2} 
                onClick={(e)=>{
                    colourChangeHandler(parseInt(e.target.value));
                }}
                checked = {colour === 2}
                />
                <span className='rb3'></span>
            </label>
            <label className='container'>
                <input 
                readOnly
                type='radio' 
                name='colour' 
                value={3} 
                onClick={(e)=>{
                    colourChangeHandler(parseInt(e.target.value));
                }}
                checked = {colour === 3}
                />
                <span className='rb4'></span>
            </label>
            <label className='container'>
                <input 
                readOnly
                type='radio' 
                name='colour' 
                value={4} 
                onClick={(e)=>{
                    colourChangeHandler(parseInt(e.target.value));
                }}
                checked = {colour === 4}
                />
                <span className='rb5'></span>
            </label>
        </div>
    );
}

export default Colours;
