import React, { useState } from 'react';

export function InputField({ inputValue, setInputValue }) {
    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    return (
        <div>
            <input type="text" onChange={handleInputChange} value={inputValue} placeholder="0" />
        </div>
    );
}

export function Result({ inputValue, coeffient = 1 }) {
    function performConversion(inputValue) {
        return inputValue * 1.341231 * coeffient;
    }
    const result = performConversion(inputValue); // perform the conversion
    return <input value={result} placeholder="0"/>;
}

/* export function ParentComponent() {
    const [inputValue, setInputValue] = useState('');
    return (
        <div>
            <InputField inputValue={inputValue} setInputValue={setInputValue} />
            <Result inputValue={inputValue} />
        </div>
    );
} */
