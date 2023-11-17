import React, {useState} from 'react'

export default function TextForm(props) {


const[text, setText] = useState("Enter Text Here");

const handleOnChange = (event) => {
    setText(event.target.value);
}
const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
}
const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
}
const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}
const copyText = () => {
  navigator.clipboard.writeText(text);
}

const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
}
  return (
    <>
    <div className="container">

    <h3>{props.boxHeading}</h3>  
    
    <div><textarea className="form-control" id="box" rows="8" value={text} onChange={handleOnChange}></textarea></div>
      <button className="btn" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn" onClick={speak}>Speak Text</button>
      <button className="btn" onClick={copyText}>Copy Text</button>
      <button className="btn" onClick={handleExtraSpaces}>Remove Extra Space</button>
    </div>

    <div className="container">
            <h3>Your text summary</h3>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(" ").length} Minutes read</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
    
    </>
  )
}
