import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   let [count, setcount] = useState(0)


    function addvalue(){
      if(count == 20){
        alert('value can not be exceed')
        
      }
      else{
          setcount(count + 1);
      }
    }
    function removevalue(){
      if(count == -10){
        alert('value can not be decrease')
     
      }
      else{
      setcount(count-1);
      }
    }
  return (
    <>
      <h2> Counter : {count}</h2>
      <h1>How to change whole UI with a single click using state(hooks)</h1>
      <br /><br />
      <h1> Counter:  {count}</h1>
      <button id='add' onClick={addvalue}>Add value by one</button>
        <br /><br />
      <button id='remove' onClick={removevalue}>Remove value by one</button>
    </>
  )
}

export default App
