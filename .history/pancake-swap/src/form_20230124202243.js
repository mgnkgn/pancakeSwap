import React, { useState } from "react";

export function Converter(num) {
    const [value, setValue] = useState(num);
    const [result, setResult] = useState(0);

    const handleChange = (e) => {
        setValue(e.target.value);
        setResult(e.target.value * 2)
    }


    return value 

/*     return (
        <div>
            <form onSubmit>
                <input type="number" value={value} onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
            <p>{result}</p>
        </div>
    ) */

}