import React, { useState } from "react";

export function useConverter(num, type = "input") {
    const [value, setValue] = useState(num);
    const [result, setResult] = useState(0);

    const handleChange = (e) => {
        setValue(e.target.value);
        setResult(e.target.value * 2)
    }




return (
    <input className="token-amount-input _1cvvxtw5 _1cvvxtw8" type="number" value={handleValue} onChange={handleChange} placeholder="0" />
)

}