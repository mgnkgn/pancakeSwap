import React, { useState } from "react";

export function useConverter(num) {
    const [value, setValue] = useState(num);
    const [result, setResult] = useState(0);

    const handleChange = (e) => {
        setValue(e.target.value);
        setResult(e.target.value * 2)
    }

    return {value, result, handleChange;

}

export function ConverterInput() {
    const [value, handleChange] = useConverter(0);
    return (
        <input className="token-amount-input _1cvvxtw5 _1cvvxtw8" type="number" value={value} onChange={handleChange} placeholder={0} />
    )
}

export function ConverterResult() {
    const [result] = useConverter(0);
    return (
        <p>{result}</p>
    )
}