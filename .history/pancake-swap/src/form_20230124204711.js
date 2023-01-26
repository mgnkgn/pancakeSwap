import React, { useState } from "react";

export function useConverter(num, type = "input") {
    const [value, setValue] = useState(num);
    const [result, setResult] = useState(0);

    const handleChange = (e) => {
        setValue(e.target.value);
        setResult(e.target.value * 2)
    }

    return value, result

}

export function ConverterInput {
    const [value, result] = useConverter(0, "input");
    return (
        <input type="number" value={value} onChange={handleChange} />
}