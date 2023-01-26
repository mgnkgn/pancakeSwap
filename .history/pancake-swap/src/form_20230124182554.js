import React, { useState } from "react";

export function Calculator(num) {
    const [value, setValue] = useState(num);
    const [result, setResult] = useState(0);

    const handleChange = (e) => {
        setValue(e.target.value);
    }
    
}