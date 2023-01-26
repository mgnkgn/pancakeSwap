import React, { useState } from "react";

export function Converter(num = 0) {
    const [value, setValue] = useState(num);
    const [result, setResult] = useState(0);

    function handleChange(e) {
        setValue(e.target.value);
    }

    return [result, handleChange, value];


}

export function converter2 (num = 0) {
    const [value, setValue] = Converter(num);

    function handleChange(e) {
        setValue(e.target.value);
    }

    return [value, handleChange];