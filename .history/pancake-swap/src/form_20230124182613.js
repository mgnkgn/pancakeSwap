import React, { useState } from "react";

export function Calculator(num) {
    const [value, setValue] = useState(num);
    const [result, setResult] = useState(0);

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setResult(value * 2);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="number" value={value} onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
            
}