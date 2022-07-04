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
            <h1>{props.heading}</h1>
            <div className="mb-3">
              <textarea className="form-control" id="textarea" rows="10" value={text} placeholder="Enter Your text here" onChange={changingText} style={{backgroundColor:props.mode==="dark"?"#343a40":"white",color:props.mode==="dark"?"white":"black"}}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={toUpperCase}>Click to convert to uppercase</button>
            <button className="btn btn-danger" onClick={toLowerCase}>Click to convert to lowercase</button>
            <button className="btn btn-warning mx-2" onClick={readText}>Click to read the text</button>
        </div>
        <div className="container my-2">
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words {text.length} is number of character</p>
            <p>{text.split(" ").length*0.008 } miutes it will take to read</p>
            <h1>Preview</h1>
            <p>{text.length>0?text:"Enter some text to preview"}</p>
        </div>
        </>
    )
}