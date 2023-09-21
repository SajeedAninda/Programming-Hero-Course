import React from 'react';

const ReUsableForms = ({formTitle,submitBtnText, handleInputSubmit}) => {

    return (
        <div>
            <h1>{formTitle}</h1>
            <form onSubmit={handleInputSubmit}>
                <label htmlFor="name">Your Name:</label>
                <input type="text" name="name" id="name" /> <br />
                <label htmlFor="email">Your Email:</label>
                <input type="email" name="email" id="email" /> <br />
                <input type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

export default ReUsableForms;