import React, { useState } from "react"

export function useHookLogin(initialState = 0) {
    const [data, setData] = useState(initialState)

    function inputHandler(event) {
        const [name, value, type, checked] = [event.target.name, event.target.value, event.target.type, event.target.checked];
        setData({
            
    }

    return {
        username,
        password,
        remember,
        inputHandler
    }
}

export function HookLogin2() {
    const { username, password, remember, inputHandler } = useHookLogin()

    return (
        <div>
            <input name="username" type="text" value={username} onChange={inputHandler} placeholder="Type Something" />
            <input name="password" type="password" value={password} onChange={inputHandler} placeholder="Type Something" />
            <input name="remember" type="checkbox" checked={remember} onChange={inputHandler} placeholder="Type Something" />
            <button disabled={!username || !password} onClick={() => console.log({
                username,
                password,
                remember
            })}>Login</button>
        </div>

    )
        }