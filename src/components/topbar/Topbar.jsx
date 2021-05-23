import React from 'react'
import './topbar.scss'

export default function Topbar() {
    return (
        <div className='topbar active'>
            <div className='wrapper'>
            <div className='left'>
                <a href="#portfolio"> Go to portfolio</a>
                <div className='itemContainer'>
                    <span>Phone Number: </span>
                    <span>415 717 4573</span>
                </div>
                <div className='itemContainer'>
                    <span>Email: </span>
                    <span>DevinTurner@turnermedia.com</span>
                </div>
            </div>
            <div className='right'>
                <div className='hamburger'>
                <span className='line a'></span>
                <span className='line b'></span>
                <span className='line c'></span>
                </div>
            </div>
            </div>
        </div>
    )
}
