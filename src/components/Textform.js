import React, { useState } from 'react';

export default function TextForm(props){    
    const [text,setText]=useState('');
    
    const toUpperCase=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upppercase","success")
    }
    
    const changingText=(event)=>{
        setText(event.target.value)
    }
    const toLowerCase=()=>{
        let newLowText=text.toLowerCase();
        setText(newLowText);
        props.showAlert("Converted to Lowercase","success")
    }

    const readText=()=>{
        let msg=new SpeechSynthesisUtterance();
        msg.text=text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Speaking Now...","success")
    }
    return(
        <>
        <div className="container">
            <h1 className="my-2">{props.heading}</h1>
            <div className="mb-3">
              <textarea className="form-control" id="textarea" rows="10" value={text} placeholder="Enter Your text here" onChange={changingText} style={{backgroundColor:props.mode==="dark"?"#343a40":"white",color:props.mode==="dark"?"white":"black"}}></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={toUpperCase}>Click to convert to uppercase</button>
            <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={toLowerCase}>Click to convert to lowercase</button>
            <button disabled={text.length===0} className="btn btn-warning mx-1 my-1" onClick={readText}>Click to read the text</button>
        </div>
        <div className="container my-2">
            <h1>Your text summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words {text.length} is number of character</p>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length*0.008 } miutes it will take to read</p>
            <h1>Preview</h1>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
        </>
    )
}