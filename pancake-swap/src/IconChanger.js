import { useState } from "react";

export function useIconChanger () {
    const [fromToken, setFromToken] = useState("BNB");
    const [toToken, setToToken] = useState("CAKE");
    const [fromNetwork, setFromNetwork] = useState("CAKE");
    const [toNetwork, setToNetwork] = useState("BNB");
    
  
    const fromTokenSelectHandler = (e) => {
      const token = e.target.value;
      setFromToken(token);
    };
  
    const fromNetworkSelectHandler = (e) => {
      const network = e.target.value;
      setFromNetwork(network);
    };
    const toTokenSelectHandler = (e) => {
      const token = e.target.value;
      setToToken(token);
    };
  
    const toNetworkSelectHandler = (e) => {
      const network = e.target.value;
      setToNetwork(network);
    };
    
    return {fromToken,setFromToken, toToken, setToToken, fromNetwork, setFromNetwork, toNetwork, setToNetwork, fromTokenSelectHandler, fromNetworkSelectHandler, toTokenSelectHandler, toNetworkSelectHandler}
  
}