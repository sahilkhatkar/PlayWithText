import React, {useState} from 'react'

export default function TextForm(props) {

  const convToUpCase = ()=>{
    setText(text.toUpperCase())
  }
  
  const convToLoCase = ()=>{
    setText(text.toLowerCase())
  }

  const copyText = ()=>{
    var text = document.getElementById("textArea")
    text.select()
    navigator.clipboard.writeText(text.value)
  }
  
  const clearText = ()=>{
    setText('')
  }

  const handleOnChange = (event)=>{
    setText(event.target.value)
  }

  const [text, setText] = useState("Enter text here");
  return (
    <>
    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">Processing your text ...</label> */}
            <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'#fff7e0', color: props.mode==='light'?'black':'white'}} onChange={handleOnChange} id="textArea" rows="8"></textarea>
        </div>
        <button type="button" className="btn btn-primary mx-1 my-1" onClick={convToLoCase}>Convert to LowerCase</button>
        <button type="button" className="btn btn-primary mx-1 my-1" onClick={copyText}>Copy text</button>
        <button type="button" className="btn btn-primary mx-1 my-1" onClick={clearText}>Clear text</button>
        <button type="button" className="btn btn-primary mx-1 my-1" onClick={convToUpCase}>Convert to UpperCase</button>
    </div>

    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
      <h2>Text Summary</h2>
      <p>{text.split(" ").filter((space)=>{return space.length!==0}).length} words and {text.length} characters</p>
      {/* <p>{0.008 * text.split(" ").length} minutes to read</p> */}
      <h2>Preview</h2>
      <p>{text.length>0 ? text : "Enter something in the above textArea to preview"}</p>
    </div>
    </>
  )
}
