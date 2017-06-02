import React from 'react';
import Navbar from './Navbar';

export default function App ({ children }) {
    return (
    <div>
        <Navbar/>
        <div className="col-xs-10">
            { children }
        </div>
    </div>
    );
}