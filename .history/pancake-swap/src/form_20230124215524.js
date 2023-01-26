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
    
function performConversion(inputValue) {
    return 

    const result = performConversion(inputValue); // perform the conversion
    return <div>{result}</div>;
}

export function ParentComponent() {
    const [inputValue, setInputValue] = useState('');
    return (
        <div>
            <InputField onInputChange={setInputValue} />
            <Result inputValue={inputValue} />
        </div>
    );
}
