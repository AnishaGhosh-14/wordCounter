import React, { useState } from "react";
import "./Textform.css";

export default function Textform(props) {
  const handleUpClick = () => {
    console.log("uppercase" + text);
    let newText = text.toUpperCase();
    setText(newText);
    console.log(text.length);
    props.showAlert("Converted to upper case","success");
  };

  const handleOnChange = (event) => {
    console.log("onchange");
    setText(event.target.value);
  };
  const handleLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower case","success");
  };
  const handleSpace = () => {
    // let newText = text.replaceAll(/[]+/ , "");
    let newText=text.split(/[ ]+/)
    setText(newText.join(" "));
    props.showAlert("Removed Extra space","success");
  };
  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text has been clear","success");
  };
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text has been copied!!","success");
  };

  const handleundo = () => {

    const input = document.getElementById("myBox");
    let arr=input.value.split(" ");
    arr.pop();
    arr=arr.join(" ");
    setText(arr);

  };

  const [text, setText] = useState("");
  return (
    <>
      <div>
        
        {/* <h1 className="text mb-6">{props.heading}</h1> */}
        <div className="mb-6" >
        <span className="text mb-6">{props.heading}</span><br/>
  
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{background:props.mode==='light'?'white':'#212529' ,color: props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-success mx-2 my-2 " onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-success mx-2 my-2" onClick={handleLower}>
          Convert to lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-success mx-2 my-2 " onClick={handleSpace}>
          Remove extra spaces
        </button>
        <button disabled={text.length===0} className="btn btn-success mx-2 my-2 " onClick={handleClear}>
          Clear
        </button>
        <button disabled={text.length===0} className="btn btn-success mx-2 my-2 " onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-success mx-2 my-2" onClick={handleundo}>
          Remove previous word
        </button>
      </div>

      <div className="container my-5">
        <h2>Your Text Summary</h2>

        <p>
          {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters
          </p>
          <p>
          {(text.split(" ").length - 1)*0.008.toFixed(2)} minutes read
        </p>
        <h3>
            Preview your Text
        </h3>
        <p>{text.length>0?text:'Nothing to preview'}</p>
      </div>
    </>
  );
}
