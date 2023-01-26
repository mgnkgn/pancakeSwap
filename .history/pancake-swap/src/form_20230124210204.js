import React, { useState } from "react";

export function useConverter(num = 0) {
    const [value, setValue] = useState(num);
    const [result, setResult] = useState(0);

    function handleChange(e) {
        setValue(e.target.value);
        setResult(e.target.value * 2)
    }

    return [result, handleChange, value];

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
        <input value={result} placeholder={0} />
    )
}