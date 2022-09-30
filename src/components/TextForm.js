import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("UpperCase was Clicked: " +text);
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLoClick = () => {
    // console.log("UpperCase was Clicked: " +text);
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleCopy = () => {
    // console.log("UpperCase was Clicked: " +text);
    let text = document.getElementById('myBox');
    // text.select();
    navigator.clipboard.writeText(text.value);
  }
  const ExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  const handleClearClick = () => {
    // console.log("UpperCase was Clicked: " +text);
    let newText = '';
    setText(newText);
  }
  const capitalizeCase = () => {
    // console.log("UpperCase was Clicked: " +text);
    let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    setText(newText);
  }
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value)
  }
  const [text, setText] = useState('Enter Text Here');
  //text = "new text";   //Wrong way to change the state
  //setText("new text");   //Right way to change the state
  return (
    <>
      <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>

        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lower Case</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy to Clipboard</button>
        <button className="btn btn-primary mx-2" onClick={ExtraSpace}>Remove Extra Space</button>
        <button className="btn btn-primary mx-2" onClick={capitalizeCase}>Capitalize Case</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear All</button>
      </div>

      <div className="container my-2" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} Characters</p>
        <p>{0.008* text.split(" ").length} Time Taken</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in the textbox above to preview it here"}</p>
      </div>
    </>
  )
}
