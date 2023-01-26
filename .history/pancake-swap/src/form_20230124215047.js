import { useState } from 'react';

function InputField() {
    const [inputValue, setInputValue] = useState('');

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    return (
        <div>
            <input type="text" onChange={handleInputChange} value={inputValue} />
        </div>
    );
}

function Result({ inputValue }) {
    performConversion = (inputValue) => {
        return inputValue * 2;
        
    const result = performConversion(inputValue); // perform the conversion
    return <div>{result}</div>;
}

function ParentComponent() {
    const [inputValue, setInputValue] = useState('');
    return (
        <div>
            <InputField onInputChange={setInputValue} />
            <Result inputValue={inputValue} />
        </div>
    );
}
