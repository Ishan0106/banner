// CardComponent.js
import React from 'react';

const RowOfCards = () => {
    const cardContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '500px', // Increased width
        height: '300px', // Increased height
        border: '1px solid #000000', // Border color set to #000000
        borderRadius: '20px', // Increased border radius
        margin: '30px', // Increased margin
        padding: '40px', // Increased padding
        position: 'relative',
        textAlign: 'center',
        backgroundColor: '#000000', // Background color set to black
        color: 'white', // Text color set to white
    };

    const circleStyle = {
        width: '80px', // Increased circle diameter
        height: '80px', // Increased circle diameter
        backgroundColor: '#821BC3', // Circle color set to #821BC3
        borderRadius: '50%',
        position: 'absolute',
        top: '20px', // Adjusted top position
        left: '20px', // Adjusted left position
    };

    return (
        <div style={cardContainerStyle}>
            <div style={circleStyle}></div>
            <h1 style={{ marginTop: '110px' }}>Lorem Ipsum is simply dummy text of the printing</h1>
            <p style={{ marginTop: '10px' }}>
                Edjgd bdswqdgwg giqwgdgiq wsgiqwgigiq wsugiwgig ugsiqwgdig
                wgdiwgqdi sguwqgduigq wqdguiwqg qwdg
            </p>
        </div>
    );
};

export default RowOfCards;
