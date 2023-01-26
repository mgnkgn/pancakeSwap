import React, { useState } from "react";

export function Converter(num = 0) {
    const [value, setValue] = useState(num);
    const [result, setResult] = useState(0);

    function handleChange(e) {
        setValue(e.target.value);
    }

    return [result, handleChange, value];


}

export function onverter2(num = 0) {
    const [value, setValue] = Converter(num);

    function handleChange(e) {
        setValue(e.target.value);
    }


    return (
        <input className="token-amount
            -input _1cvvxtw5 _1cvvxtw8" type="number" value={value} onChange={handleChange} placeholder={0} />
    )
}