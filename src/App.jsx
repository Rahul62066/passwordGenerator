
import React, { useEffect } from 'react'
import { useCallback } from 'react';
import { useState } from 'react'

const App = () => {

const [length,setLength] = useState(8);
const [numberAllowed,setNumberAllowed] = useState("false");
const [characterAllowed,setCharacterAllowed] = useState("false");
const [password,setPassword] =useState("false");

const passwordGenerator = useCallback(()=>{
let pass=""
let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
if(numberAllowed) str+="0123456789"
if(characterAllowed) str+="&%$#@!~?*"
for(let i=0; i<length; i++){
  let char= Math.floor(Math.random()*str.length + 1)
  pass += str.charAt(char)
  setPassword(pass)
}
},[length,characterAllowed,numberAllowed,setPassword])

useEffect(()=>{
  passwordGenerator();

},[length,characterAllowed,numberAllowed,])

const copytext = ()=>{
  navigator.clipboard.writeText(password)
}

  return (
    <>
      <div className=" w-full  flex  justify-center content-center ">
        <div className="w-full  text-4xl bg-gray-700  my-10 py-5 px-3 max-w-lg mx-2 rounded-lg shadow-md ">
          <h1 className="text-orange-400 p-5 ">Password Generator</h1>
          <div className="flex shadow  rounded-lg overflow-hidden ">
            <input className="outline-none w-full rounded-s-sm p-2 "
              readOnly 
              type="text" 
              value={password}
              placeholder="password" />
            <button className="outline-none bg-blue-500 text-white text-center p-3 "
            onClick={copytext}>
              copy
              </button>
          </div>
          <div className="flex text-sm">
            <div className="mx-2 my-3 flex  justify-center content-center">
              <input min={6} max={100} onChange={(e)=>{setLength(e.target.value)}} className="cursor-pointer" type="range" />

              <label >Length:{length}</label>
              </div>
            <div className="mx-2 my-3 flex  justify-center content-center">
              <input   type="checkbox" defaultChecked={numberAllowed} onChange={()=>{setNumberAllowed((prev)=>!prev)}}/>
              <label htmlFor="numberInput">NumberAllowed</label></div>
            <div className="mx-2 my-2 flex  justify-center content-center">
              <input type="checkbox" defaultChecked={characterAllowed} onChange={()=>{setCharacterAllowed((prev)=>!prev)}} />
              <label htmlFor="characterInput">CharacterAllowed</label></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App