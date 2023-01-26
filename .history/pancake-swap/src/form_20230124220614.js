import React, { useState } from 'react';

export function InputField({ inputValue, setInputValue }) {
    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    return (
        <div>
            <input type="text" onChange={handleInputChange} value={inputValue} />
        </div>
    );
}

export function Result({ inputValue }) {
    function performConversion(inputValue) {
        return inputValue * 2;
    }
    const result = performConversion(inputValue); // perform the conversion
    return <div>{result}/</div>;
}

export function ParentComponent() {
    const [inputValue, setInputValue] = useState('');
    return (
        <div>
            <InputField inputValue={inputValue} setInputValue={setInputValue} />
            <Result inputValue={inputValue} />
        </div>
    );
}
