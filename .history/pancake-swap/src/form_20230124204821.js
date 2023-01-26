import React, { useState } from "react";

export function useConverter(num, type = "input") {
    const [value, setValue] = useState(num);
    const [result, setResult] = useState(0);

    const handleChange = (e) => {
        setValue(e.target.value);
        setResult(e.target.value * 2)
    }

    return value, result, handleChange;

}

export function ConverterInput() {
    const [value, handleChange] = useConverter(0);
    return (
        <input type="number" value={value} onChange={handleChange} />
    )
}

export function ConverterResult() {
    