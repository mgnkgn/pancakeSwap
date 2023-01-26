import React, { useState } from 'react';

export function InputField({ inputValue, setInputValue }) {
    
    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    return (
        <div>
            <input type="text" onChange={handleInputChange} value={inputValue} defaultValue={0} />
        </div>
    );
}

export function Result({ inputValue }) {
    function performConversion(inputValue) {
        return inputValue * 1.341231;
    }
    const result = performConversion(inputValue); // perform the conversion
    return <input value={result} />;
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
